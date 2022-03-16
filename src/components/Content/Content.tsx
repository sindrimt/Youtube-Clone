import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

import axios from "axios";
import styled from "styled-components";

import { GridContainer, ContentGap } from "./ContentStyles";

const Content = () => {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url =
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHVGC8O0A56Q1CA4uu3c7b1azLMTSvRQs&part=snippet,id&maxResults=20&q=rick&order=viewCount";
    axios.get(url).then((res) => {
      setResult(res.data.items);
      console.log(res.data.items);
    });
  };

  return (
    <>
      <GridContainer>
        {result?.map((video) => {
          return (
            <Card
              key={video.id.videoId}
              title={video.snippet.title.slice(0, 50)}
              image={video.snippet.thumbnails.default}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default Content;
