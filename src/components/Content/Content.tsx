import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

import axios from "axios";
import styled from "styled-components";

import { GridContainer, ContentGap, Outer } from "./ContentStyles";

import "./content.css";

const Content: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [videoResult, setVideoResult] = useState<any[]>();

  const API_KEY = "AIzaSyCeVwH2_TwCOxKCnI1bpeSiC-VXcLcARVw";

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = () => {
    const searchResults = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
                           &part=snippet,id&maxResults=20&q=rick&order=viewCount`;

    axios(searchResults).then((res) => {
      const posts: any = [];

      const requests = res.data.items.map((video: any) => {
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${video.id.videoId}&key=${API_KEY}
                     &part=snippet,contentDetails,statistics,status`;

        return axios.get(url).then((res) => {
          posts.push(res.data);
        });
      });

      return Promise.all(requests).then(() => {
        setIsLoading(false);
        console.log("stopped loading");
        setVideoResult(posts);
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
            //console.log(items[0]);
            let imageRes = items[0].snippet.thumbnails.maxres ? "maxresdefault" : "hqdefault";
            return (
              <Card
                key={index}
                title={items[0].snippet.title.slice(0, 50)}
                imageId={items[0].id}
                imageRes={imageRes}
                channel={items[0].snippet.channelTitle}
              />
            );
          })}
        </GridContainer>
      </Outer>
    </>
  );
};

export default Content;
