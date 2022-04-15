import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

import Card from "../Card/Card";
import { GridContainer, Outer } from "./ContentStyles";

import axios from "axios";

import "./content.css";
import LoadingCard from "../LoadingCard/LoadingCard";

const ContentDefault: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [videoResult, setVideoResult] = useState<any[]>();
  const [profileThumbnails, setProfileThumbnails] = useState<any[]>([]);

  const [progress, setProgress] = useState(0);

  const API_KEY = process.env.REACT_APP_API_KEY;

  //const amount = useSelector((state: State) => state.bank);
  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = () => {
    // Gives basic information about the video
    const searchResults = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
                           &part=snippet,id&maxResults=20&q=rick&order=viewCount`;

    const searchResults2 = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&chart=mostPopular&maxResults=20`;

    axios(searchResults2).then((res) => {
      //console.log(res);
      const videoTuple: any = new Map();

      const requests = res.data.items.map((video: any) => {
        //console.log(video);
        // Gives a more detailed information about the video
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${video.id}&key=${API_KEY}
                     &part=snippet,contentDetails,statistics,status`;

        // Gives information about the channel
        const profileUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${API_KEY}`;

        // Sets the key in the Map to the videoId
        // console.log(video);
        videoTuple.set(video.id, []);

        // Two return statements separated by comma
        // The first return statement fills up the first position in the array in the Map with res.data
        // The second return statement fills up the second position in the array in the Map with the profile picture

        /**  The return statements does not run synchronously, but when the loop is done, the first and second
           positions in the array will be filled up in the correct order since the return statements are independent **/

        return (
          axios.get(url).then((res) => {
            //console.log(res.data);
            videoTuple.get(video.id)[0] = res.data;
            //console.log(video.id.videoId);
          }),
          axios.get(profileUrl).then((res) => {
            //console.log(res);
            //console.log(res);
            videoTuple.get(video.id)[1] = res.data.items[0].snippet.thumbnails.default.url;
            //console.log(video.id.videoId);
          })
        );
      });

      // When all request are finished inside requests
      return Promise.all(requests).then(() => {
        const posts: any = [];
        const profilePictures: any = [];

        videoTuple.forEach((video: any) => {
          posts.push(video[0]);
          profilePictures.push(video[1]);
        });

        setVideoResult(posts);
        setProfileThumbnails(profilePictures);
        setIsLoading(false);
      });
    });
  };
  // Displaying loading while waiting for fetching data
  if (isLoading) {
    let arr = new Array(20);
    return (
      <Outer>
        <GridContainer>
          {/* Displays 20 loading cards while loading content*/}
          {Array.apply(0, new Array(20)).map((i, index) => {
            return <LoadingCard key={index} />;
          })}
        </GridContainer>
      </Outer>
    );
  }
  // Filtrer ut alle undefined objects
  let filteredArray: Array<any> = [];
  const filtered = videoResult?.filter((element) => {
    if (element === undefined) {
      return false;
    }
    filteredArray.push(element);
  });

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Outer>
        <GridContainer>
          {filteredArray?.map(({ items }, index) => {
            // Checks if a maxres image exists
            // If it does: set maxres, else set highres
            let imageRes: string = items[0].snippet.thumbnails.maxres ? "maxresdefault" : "mqdefault";
            let pp: string = profileThumbnails[index];

            let videoTime = items[0].contentDetails.duration;

            const convertTime = (dur: string | any) => {
              if (dur.includes("D")) {
                return "> 24h";
              }
              let match = dur.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

              match = match?.slice(1).map(function (x: any) {
                if (x != null) {
                  return x.replace(/\D/, "");
                }
              });

              const hours = parseInt(match[0]) || 0;
              const minutes = parseInt(match[1]) || 0;
              const seconds = parseInt(match[2]) || 0;

              const secs = hours * 3600 + minutes * 60 + seconds;

              if (secs >= 3600) {
                let shortTime = new Date(secs * 1000).toISOString().substr(11, 8);
                let shortTimeSplit = shortTime.split(":");

                return `${shortTimeSplit[0].substring(1)}:${shortTimeSplit[1]}:${shortTimeSplit[2]}`;
              } else {
                let shortTime = new Date(secs * 1000).toISOString().substr(14, 5);
                let shortTimeSplit = shortTime.split(":");

                if (parseInt(shortTimeSplit[0]) < 10) {
                  return `${shortTimeSplit[0].substring(1)}:${shortTimeSplit[1]}`;
                } else {
                  return new Date(secs * 1000).toISOString().substr(14, 5);
                }
              }
            };

            const duration = convertTime(videoTime);

            //console.log(items);
            return (
              <Card
                key={index}
                title={items[0].snippet.title.slice(0, 50)}
                imageId={items[0].id}
                imageRes={imageRes}
                channel={items[0].snippet.channelTitle}
                profilePicture={pp}
                views={items[0].statistics.viewCount}
                time={items[0].snippet.publishedAt}
                duration={duration}
              />
            );
          })}
        </GridContainer>
      </Outer>
    </>
  );
};

export default ContentDefault;
