/* eslint-disable react/display-name */
import { memo } from "react";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import Card from "../../ui/Card";
import { Form } from "react-router-dom";
import Divider from "../../ui/Divider";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const StyledReferAFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--light-600);
  h3 {
    font-size: var(--font-size-medium-66);
    font-weight: 500;
    color: var(--dark-900);
    text-transform: capitalize;
    margin-bottom: 0;
  }

  > button {
    font-size: var(--font-size-small-100) !important;
    font-weight: 400 !important;
    text-transform: capitalize;
    line-height: 150% !important;
    letter-spacing: 0;
    color: var(--dark-600) !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px !important;
    width: 100%;
    column-gap: 12px;

    color: var();
    transition: 0.25s;
    border: 1px solid var(--light-600) !important;
    flex-grow: 1;
    border-radius: 3px;

    svg {
      width: 14px;
      height: 14px;
      &.whatsapp-icon {
        fill: #00d95f;
      }
      &.fb-icon {
        fill: #337fff;
      }
      &.twitter-icon {
        fill: #33ccff;
      }
    }
  }

  > form {
    > button {
      margin-top: 20px;
      font-size: var(--font-size-medium-33) !important;
      font-weight: 500 !important;
      text-transform: capitalize;
      line-height: 150% !important;
      letter-spacing: 0;

      border: none !important;
      transition: 0.25s;
      background-color: var(--green-200) !important;
      padding: 16px 28px !important;
      border-radius: 36px;
    }
  }
`;

const SvgContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 26px;
  aspect-ratio: 1/1;
  &.fb-svg {
    background-color: #edf4ff;
  }
  &.twitter-svg {
    background-color: #eefbff;
  }
  &.whatsapp-svg {
    background-color: #ecfff5;
  }
`;

const InfoBox = styled.div`
  background-color: #f3fbf4;
  display: grid;
  grid-template-columns: 10% 70% 20%;
  grid-template-rows: 30% 40% 30%;
  grid-template-areas: "column head img" "column text img" "column text img";
  padding: 16px;
  border-radius: 12px;
  /* column-gap: 16px; */
`;

const Container = styled.div`
  grid-area: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2px;
  justify-self: center;
  > span {
    max-height: unset;
    height: 100%;
    border-radius: 10px;
    align-self: center;
  }
`;

const Head = styled.p`
  grid-area: head;
  font-size: var(--font-size-small-100);
  font-weight: 300;
  line-height: 150%;
  letter-spacing: 0;
  color: var(--dark-600);
  text-transform: capitalize;
`;

const Text = styled.p`
  grid-area: text;
  font-size: var(--font-size-medium-33);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: var(--dark-900);
`;

const ImgContainer = styled.div`
  grid-area: img;
  width: 40px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-300);
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  cursor: pointer;
`;

const DividerText = styled.p`
  color: var(--light-700);
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  margin-inline: auto;
`;

const Label = styled.label`
  display: block;
  color: var(--dark-600);
  font-size: var(--font-size-small-100);
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  margin-bottom: 8px;
`;

const Input = styled.input`
  border: 1px solid var(--light-600);
  border-radius: 8px;
  padding: 13.5px 16px;
  width: 100%;
  background-color: var(--light-300);
  margin-bottom: 8px;
  color: var(--dark-900);
  &::-webkit-input-placeholder {
    color: var(--light-600);
  }

  &::-ms-input-placeholder {
    color: var(--light-600);
  }

  &:-ms-input-placeholder {
    color: var(--light-600);
  }
`;

const ReferAFriend = memo(() => {
  const quote = `🌿 Just got an awesome promo code from Top shelf! 🌿

                Use my code PROMO420 to get 20% off your next purchase! 🤑

                Check out their amazing selection and enjoy some great savings. 🎉

                topshelfbc.com

                #CannabisDeals #PromoCode #CannabisCommunity #420Friendly`;

  return (
    <StyledReferAFriend>
      <Heading as="h3">referral program</Heading>
      <Card.Desc color="--dark-300">
        Absolutely love TopShelfBC; affordable on any budget and such fast
        delivery, straight to my door! I recommend them to all my friends and
        family for their 420 needs.
      </Card.Desc>

      <Divider width="100%" color="var(--light-600)" />

      <InfoBox>
        <Container>
          <Divider polarity="horizontal" width="2px" color="var(--red-600)" />
        </Container>
        <Head>your referral URL</Head>
        <Text>
          Referral code is available only to users with at least one order.
        </Text>
        <ImgContainer onClick={navigator.clipboard.writeText("PROMO420")}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.175V13.325C12 15.95 10.95 17 8.325 17H5.175C2.55 17 1.5 15.95 1.5 13.325V10.175C1.5 7.55 2.55 6.5 5.175 6.5H8.325C10.95 6.5 12 7.55 12 10.175Z"
              stroke="#17AF26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 5.675V8.825C16.5 11.45 15.45 12.5 12.825 12.5H12V10.175C12 7.55 10.95 6.5 8.325 6.5H6V5.675C6 3.05 7.05 2 9.675 2H12.825C15.45 2 16.5 3.05 16.5 5.675Z"
              stroke="#17AF26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ImgContainer>
      </InfoBox>
      <InfoBox>
        <Container>
          <Divider polarity="horizontal" width="2px" color="var(--red-600)" />
        </Container>

        <Head>your coupon code to share</Head>
        <Text>
          Referral code is available only to users with at least one order.
        </Text>
        <ImgContainer onClick={navigator.clipboard.writeText("PROMO420")}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.175V13.325C12 15.95 10.95 17 8.325 17H5.175C2.55 17 1.5 15.95 1.5 13.325V10.175C1.5 7.55 2.55 6.5 5.175 6.5H8.325C10.95 6.5 12 7.55 12 10.175Z"
              stroke="#17AF26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 5.675V8.825C16.5 11.45 15.45 12.5 12.825 12.5H12V10.175C12 7.55 10.95 6.5 8.325 6.5H6V5.675C6 3.05 7.05 2 9.675 2H12.825C15.45 2 16.5 3.05 16.5 5.675Z"
              stroke="#17AF26"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ImgContainer>
      </InfoBox>

      <Divider width="100%" color="var(--light-600)" />

      <FacebookShareButton url={window.location.hostname}>
        <SvgContainer className="fb-svg">
          <FaFacebookF className="fb-icon" />
        </SvgContainer>
        share via facebook
      </FacebookShareButton>

      <TwitterShareButton url={window.location.hostname} title={quote}>
        <SvgContainer className="twitter-svg">
          <FaTwitter className="twitter-icon" />
        </SvgContainer>
        share via twitter
      </TwitterShareButton>

      <WhatsappShareButton url={window.location.hostname} title={quote}>
        <SvgContainer className="whatsapp-svg">
          <FaWhatsapp className="whatsapp-icon" />
        </SvgContainer>
        share via whatsapp
      </WhatsappShareButton>

      <DividerText>Or share via email</DividerText>

      <Form>
        <Label for="email-input">Email</Label>
        <Input
          type="email"
          placeholder="Enter email address"
          id="email-input"
        />
        <Label for="name-input">Name</Label>
        <Input type="text" placeholder="Enter your name" id="name-input" />
        <EmailShareButton
          subject="Check out TopShelfBC"
          body={quote}
          type="submit"
        >
          send emails
        </EmailShareButton>
      </Form>
    </StyledReferAFriend>
  );
});

export default ReferAFriend;
