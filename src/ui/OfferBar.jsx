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
`;

const StyledText = styled.p`
  color: var(--light-900);
  font-size: 14px;
  font-weight: 300;
  display: inline-block;
`;

const StyledTextLowOpacity = styled(StyledText)`
  opacity: 0.7;
  margin-right: 20px;
`;

export default function OfferBar() {
  return (
    <StyledBar>
      <div>
        <StyledTextLowOpacity>
          LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout. {"  "}
        </StyledTextLowOpacity>
        <StyledText>23 : 15 : 00</StyledText>
      </div>
    </StyledBar>
  );
}
