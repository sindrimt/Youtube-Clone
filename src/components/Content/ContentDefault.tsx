import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import { GridContainer, Outer } from "./ContentStyles";

import axios from "axios";

import "./content.css";

const ContentDefault: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [videoResult, setVideoResult] = useState<any[]>();
  const [profileThumbnails, setProfileThumbnails] = useState<any[]>([]);

  const API_KEY = "AIzaSyA2jqu8DsVe541pB-A3pNX0Hg3gIDMpnQs";

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
            // console.log(res.data);
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
    return (
      <section className="outer">
        <div className="loading">Loading...</div>
      </section>
    );
  }

  return (
    <>
      <Outer>
        <GridContainer>
          {videoResult?.map(({ items }, index) => {
            // Checks if a maxres image exists
            // If it does: set maxres, else set highres
            let imageRes: string = items[0].snippet.thumbnails.maxres ? "maxresdefault" : "hqdefault";
            let pp: string = profileThumbnails[index];

            return (
              <Card
                key={index}
                title={items[0].snippet.title.slice(0, 50)}
                imageId={items[0].id}
                imageRes={imageRes}
                channel={items[0].snippet.channelTitle}
                profilePicture={pp}
              />
            );
          })}
        </GridContainer>
      </Outer>
    </>
  );
};

export default ContentDefault;
