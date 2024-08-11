/* eslint-disable react/display-name */
import { memo } from "react";
import styled from "styled-components";
import video from "../../data/videos/awJkgWWjdq.webm";

const PlayerContainer = styled.div`
  width: 30px;
  height: 30px;
  aspect-ratio: 1 / 1;
  background-color: #c3d2cc;
  border-radius: 50%;
  video {
    width: 100%;
    height: 100%;
  }
`;

const CheckAnimation = memo(() => {
  return (
    <PlayerContainer>
      {/* <Player
        src={checkMarkAnimation}
        speed={1}
        className="check-mark-player"
        ref={checkMark}
        autoplay={false}
        loop={false}
      /> */}
      <video id="banner-video" autoPlay muted>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </PlayerContainer>
  );
});

export default CheckAnimation;
