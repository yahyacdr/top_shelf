/* eslint-disable react/display-name */

import { memo } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledBar = styled.div`
  background-color: var(--green-900);
  height: 37px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  > div {
    display: contents;
    p:last-child {
      min-width: fit-content;
    }
  }
  @media (max-width: 540px) {
    p {
      font-size: var(--font-size-small-50);
    }
  }

  @media (max-width: 360px) {
    padding: 0 16px;
  }
`;

const StyledText = styled.p`
  color: var(--light-600);
  font-size: 14px;
  font-weight: 300;
  display: inline-block;
`;

const StyledTextLowOpacity = styled(StyledText)`
  opacity: 0.7;
  margin-right: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 390px) {
    margin-right: 10px;
  }
`;

const OfferBar = memo(() => {
  return createPortal(
    <StyledBar>
      <div>
        <StyledTextLowOpacity>
          LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout. {"  "}
        </StyledTextLowOpacity>
        <StyledText>23 : 15 : 00</StyledText>
      </div>
    </StyledBar>,
    document.getElementById("root")
  );
});

export default OfferBar;
