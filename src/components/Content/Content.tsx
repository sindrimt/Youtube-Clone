import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

import axios from "axios";
import styled from "styled-components";

import { GridContainer, ContentGap, Outer } from "./ContentStyles";

import "./content.css";
import { ProfilePicture } from "../Card/CardStyles";

const Content: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [videoResult, setVideoResult] = useState<any[]>();
  const [profileThumbnails, setProfileThumbnails] = useState<any[]>([]);

  const API_KEY = "AIzaSyAA2UebdaJgjkACyxTuuCHEnOsywZ1sAWc";

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = () => {
    // Gives basic information about the video
    const searchResults = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
                           &part=snippet,id&maxResults=20&q=rick&order=viewCount`;

    axios(searchResults).then((res) => {
      const videoTuple: any = new Map();

      const requests = res.data.items.map((video: any) => {
        // Gives a more detailed information about the video
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${video.id.videoId}&key=${API_KEY}
                     &part=snippet,contentDetails,statistics,status`;

        // Gives information about the channel
        const profileUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${video.snippet.channelId}&key=${API_KEY}`;

        // Initiates videoTuple with videoID and an empty array
        videoTuple.set(video.id.videoId, []);

        // Two return statements separated by comma
        return (
          axios.get(url).then((res) => {
            videoTuple.get(video.id.videoId)[0] = res.data;
          }),
          axios.get(profileUrl).then((res) => {
            // Pusher profile picture url til arrayen i Mapet
            videoTuple.get(video.id.videoId)[1] = res.data.items[0].snippet.thumbnails.default.url;
          })
        );
      });

      // When all request are finished
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

export default Content;
