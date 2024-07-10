/* eslint-disable react/display-name */
import { Player } from "@lottiefiles/react-lottie-player";
import { memo, useRef } from "react";
import pageNotFoundAnimation from "../assets/error-animation.json";
import styled from "styled-components";
import Heading from "./Heading";
import Btn from "./Btn";

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 120px 0 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--dark-900);
    margin-inline: auto;
  }
`;

const ErrorOccured = memo(() => {
  const PageNotFound = useRef();

  return (
    <PlayerContainer>
      <Player
        src={pageNotFoundAnimation}
        speed={2}
        className="error-player"
        ref={PageNotFound}
        autoplay={true}
        loop={true}
      />
      <Heading as="h2">A weird error ocurred, please</Heading>
      <Btn
        size="medium"
        variation="primary"
        shape="button"
        onClick={() => window.location.reload()}
      >
        Try Again
      </Btn>
    </PlayerContainer>
  );
});

export default ErrorOccured;
