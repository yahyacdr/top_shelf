import styled from "styled-components";
import "swiper/css";

import Heading from "./Heading";
import Card from "./Card";
import { testimonials } from "../data/Static/StaticData";
import Menu from "./Menu";
import Divider from "./Divider";
import Carousel from "./Carousel";
import { SwiperSlide } from "swiper/react";
import { useRef } from "react";

const StyledMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 0 0 120px;
  width: 100%;
  overflow: hidden;
  & h3 {
    max-width: 265px;
    line-height: 120%;
    letter-spacing: -1.5px;
    font-size: var(--font-size-large-66);
    margin-bottom: 32px;
  }
  .swiper-wrapper {
    & > div {
      border: 2px solid #f4f4f4;
      border-radius: 16px;
      padding: 40px;
    }
  }
`;

const StyledHeaderContainer = styled.div`
  text-align: left;
  margin-inline: auto;
  color: var(--dark-900);
  width: 100%;
  margin-bottom: 30px;
  & > h1 {
    max-width: 900px;
  }
  @media (max-width: 1366px) {
    & > h1 {
      max-width: 600px;
    }
  }
`;

const StyledReviewsCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 20%;
  width: 100%;
  & > div {
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    & h4 {
      margin-bottom: 0;
      height: fit-content;
      align-self: center;
    }
  }
`;

const ImgCardContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--green-300);
  margin-right: 16px;
  & img {
    aspect-ratio: 1.31/1.4;
    border-radius: inherit;
  }
`;

const StyledReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: var(--light-300);
  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      &:first-child {
        margin-inline: 16px;
      }
      &:last-child {
        color: var(--green-200);
        margin-left: 8px;
      }
    }
  }
  & > svg {
    margin-bottom: 0px;
  }
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 58%;
  & p {
    font-weight: 500;
    text-align: left;
  }
  & > svg {
    margin-bottom: 32px;
  }
`;

Menu.CoverCard = styled(Menu.CoverCard)`
  & > span {
    margin-bottom: 32px;
  }
  & > svg {
    margin-bottom: 32px;
  }
`;
export default function ItemsSection() {
  const carouselEl = useRef();

  return (
    <StyledMenuSection>
      <StyledHeaderContainer>
        <Heading as="h1">customer testimonials</Heading>
      </StyledHeaderContainer>
      <Menu.ItemCards width="1612px" height="424px">
        <Menu.CoverCard side="start">
          <Card.Title color="--light-300" case="uppercase">
            voted best online dispensary in canada
          </Card.Title>
          <Divider
            width="100%"
            polarity="horizontal"
            color="var(--green-400)"
          />
          <svg
            width="101"
            height="32"
            viewBox="0 0 101 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_118_3397)">
              <path
                d="M12.634 11.4182V14.8364H20.792C20.5754 16.7273 19.9257 18.1818 18.9149 19.1273C17.7598 20.2909 15.8828 21.6 12.634 21.6C7.65261 21.6 3.75411 17.5273 3.75411 12.5091C3.75411 7.49091 7.58042 3.41818 12.634 3.41818C15.3052 3.41818 17.3267 4.50909 18.7706 5.89091L21.153 3.49091C19.1315 1.52727 16.3881 0 12.634 0C5.77555 0 0 5.6 0 12.5091C0 19.4182 5.77555 25.0182 12.634 25.0182C16.3159 25.0182 19.1315 23.7818 21.2974 21.5273C23.5354 19.2727 24.2573 16.0727 24.2573 13.5273C24.2573 12.7273 24.1851 12 24.1129 11.4182H12.634Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M34.3646 8.58203C29.9607 8.58203 26.2788 12.0002 26.2788 16.6548C26.2788 21.3093 29.8885 24.7275 34.3646 24.7275C38.8406 24.7275 42.4504 21.382 42.4504 16.7275C42.4504 12.0002 38.8406 8.58203 34.3646 8.58203ZM34.3646 21.6002C31.91 21.6002 29.8163 19.5638 29.8163 16.7275C29.8163 13.8184 31.91 11.8548 34.3646 11.8548C36.8192 11.8548 38.9128 13.8184 38.9128 16.7275C38.9128 19.5638 36.8192 21.6002 34.3646 21.6002Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M73.855 10.4002H73.7106C72.9164 9.45476 71.4003 8.58203 69.4511 8.58203C65.4082 8.58203 61.9429 12.0729 61.9429 16.6548C61.9429 21.1638 65.4082 24.7275 69.4511 24.7275C71.4003 24.7275 72.9164 23.8548 73.7106 22.9093H73.855V24.0729C73.855 27.1275 72.1945 28.8002 69.5955 28.8002C67.4296 28.8002 66.1301 27.2729 65.5526 25.8911L62.5204 27.2002C63.3868 29.3093 65.7692 32.0002 69.6677 32.0002C73.7828 32.0002 77.3203 29.5275 77.3203 23.5639V9.01839H73.9993V10.4002H73.855ZM69.8121 21.6002C67.3574 21.6002 65.5526 19.4911 65.5526 16.7275C65.5526 13.8911 67.4296 11.8548 69.8121 11.8548C72.1945 11.8548 74.0715 13.9638 74.0715 16.8002C74.1437 19.5638 72.2667 21.6002 69.8121 21.6002Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M52.3411 8.58203C47.9373 8.58203 44.2554 12.0002 44.2554 16.6548C44.2554 21.3093 47.8651 24.7275 52.3411 24.7275C56.8172 24.7275 60.4269 21.382 60.4269 16.7275C60.4269 12.0002 56.8172 8.58203 52.3411 8.58203ZM52.3411 21.6002C49.8865 21.6002 47.7929 19.5638 47.7929 16.7275C47.7929 13.8184 49.8865 11.8548 52.3411 11.8548C54.7958 11.8548 56.8894 13.8184 56.8894 16.7275C56.8894 19.5638 54.7958 21.6002 52.3411 21.6002Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M79.9912 0.363281H83.4565V24.7996H79.9912V0.363281Z"
                fill="white"
                fillOpacity="0.5"
              />
              <path
                d="M94.1416 21.6002C92.3367 21.6002 91.1094 20.8002 90.2431 19.1275L101 14.6911L100.639 13.7457C99.9893 11.9275 97.8957 8.58203 93.7806 8.58203C89.6655 8.58203 86.2002 11.8548 86.2002 16.6548C86.2002 21.1638 89.5933 24.7275 94.1416 24.7275C97.8235 24.7275 99.9171 22.4729 100.856 21.1638L98.1123 19.3457C97.1737 20.7275 95.9464 21.6002 94.1416 21.6002ZM93.925 11.6366C95.3689 11.6366 96.5962 12.3638 96.9572 13.382L89.7377 16.4366C89.6655 13.0911 92.1201 11.6366 93.925 11.6366Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_118_3397">
                <rect width="101" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>EXELLENCET</p>
          <StyledReview>
            <svg
              width="106"
              height="18"
              viewBox="0 0 106 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2977 2.63297L11.6177 5.27297C11.7977 5.64047 12.2777 5.99297 12.6827 6.06047L15.0752 6.45797C16.6052 6.71297 16.9652 7.82297 15.8627 8.91797L14.0027 10.778C13.6877 11.093 13.5152 11.7005 13.6127 12.1355L14.1452 14.438C14.5652 16.2605 13.5977 16.9655 11.9852 16.013L9.74268 14.6855C9.33768 14.4455 8.67018 14.4455 8.25768 14.6855L6.01518 16.013C4.41018 16.9655 3.43518 16.253 3.85518 14.438L4.38768 12.1355C4.48518 11.7005 4.31268 11.093 3.99768 10.778L2.13768 8.91797C1.04268 7.82297 1.39518 6.71297 2.92518 6.45797L5.31768 6.06047C5.71518 5.99297 6.19518 5.64047 6.37518 5.27297L7.69518 2.63297C8.41518 1.20047 9.58518 1.20047 10.2977 2.63297Z"
                fill="#F2BC1B"
                stroke="#F2BC1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.2977 2.63297L33.6177 5.27297C33.7977 5.64047 34.2777 5.99297 34.6827 6.06047L37.0752 6.45797C38.6052 6.71297 38.9652 7.82297 37.8627 8.91797L36.0027 10.778C35.6877 11.093 35.5152 11.7005 35.6127 12.1355L36.1452 14.438C36.5652 16.2605 35.5977 16.9655 33.9852 16.013L31.7427 14.6855C31.3377 14.4455 30.6702 14.4455 30.2577 14.6855L28.0152 16.013C26.4102 16.9655 25.4352 16.253 25.8552 14.438L26.3877 12.1355C26.4852 11.7005 26.3127 11.093 25.9977 10.778L24.1377 8.91797C23.0427 7.82297 23.3952 6.71297 24.9252 6.45797L27.3177 6.06047C27.7152 5.99297 28.1952 5.64047 28.3752 5.27297L29.6952 2.63297C30.4152 1.20047 31.5852 1.20047 32.2977 2.63297Z"
                fill="#F2BC1B"
                stroke="#F2BC1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.2977 2.63297L55.6177 5.27297C55.7977 5.64047 56.2777 5.99297 56.6827 6.06047L59.0752 6.45797C60.6052 6.71297 60.9652 7.82297 59.8627 8.91797L58.0027 10.778C57.6877 11.093 57.5152 11.7005 57.6127 12.1355L58.1452 14.438C58.5652 16.2605 57.5977 16.9655 55.9852 16.013L53.7427 14.6855C53.3377 14.4455 52.6702 14.4455 52.2577 14.6855L50.0152 16.013C48.4102 16.9655 47.4352 16.253 47.8552 14.438L48.3877 12.1355C48.4852 11.7005 48.3127 11.093 47.9977 10.778L46.1377 8.91797C45.0427 7.82297 45.3952 6.71297 46.9252 6.45797L49.3177 6.06047C49.7152 5.99297 50.1952 5.64047 50.3752 5.27297L51.6952 2.63297C52.4152 1.20047 53.5852 1.20047 54.2977 2.63297Z"
                fill="#F2BC1B"
                stroke="#F2BC1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M76.2977 2.63297L77.6177 5.27297C77.7977 5.64047 78.2777 5.99297 78.6827 6.06047L81.0752 6.45797C82.6052 6.71297 82.9652 7.82297 81.8627 8.91797L80.0027 10.778C79.6877 11.093 79.5152 11.7005 79.6127 12.1355L80.1452 14.438C80.5652 16.2605 79.5977 16.9655 77.9852 16.013L75.7427 14.6855C75.3377 14.4455 74.6702 14.4455 74.2577 14.6855L72.0152 16.013C70.4102 16.9655 69.4352 16.253 69.8552 14.438L70.3877 12.1355C70.4852 11.7005 70.3127 11.093 69.9977 10.778L68.1377 8.91797C67.0427 7.82297 67.3952 6.71297 68.9252 6.45797L71.3177 6.06047C71.7152 5.99297 72.1952 5.64047 72.3752 5.27297L73.6952 2.63297C74.4152 1.20047 75.5852 1.20047 76.2977 2.63297Z"
                fill="#F2BC1B"
                stroke="#F2BC1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M98.2977 2.63297L99.6177 5.27297C99.7977 5.64047 100.278 5.99297 100.683 6.06047L103.075 6.45797C104.605 6.71297 104.965 7.82297 103.863 8.91797L102.003 10.778C101.688 11.093 101.515 11.7005 101.613 12.1355L102.145 14.438C102.565 16.2605 101.598 16.9655 99.9852 16.013L97.7427 14.6855C97.3377 14.4455 96.6702 14.4455 96.2577 14.6855L94.0152 16.013C92.4102 16.9655 91.4352 16.253 91.8552 14.438L92.3877 12.1355C92.4852 11.7005 92.3127 11.093 91.9977 10.778L90.1377 8.91797C89.0427 7.82297 89.3952 6.71297 90.9252 6.45797L93.3177 6.06047C93.7152 5.99297 94.1952 5.64047 94.3752 5.27297L95.6952 2.63297C96.4152 1.20047 97.5852 1.20047 98.2977 2.63297Z"
                fill="#F2BC1B"
                stroke="#F2BC1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>
              <Divider
                width="15px"
                polarity="vertical"
                color="var(--green-400)"
              />{" "}
              <span>on 135</span>
              <span>Reviews</span>
            </p>
          </StyledReview>
        </Menu.CoverCard>
        <Carousel refEl={carouselEl}>
          {testimonials.map((testi) => (
            <SwiperSlide key={testi.id}>
              <Menu.CardContainer distribution="flex" width="100%">
                <StyledReviewsCardHeader>
                  <div>
                    <ImgCardContainer>
                      <Card.Img img={testi.img} />
                    </ImgCardContainer>
                    <Card.Name color="--dark-800">{testi.name}</Card.Name>
                  </div>
                  <Divider
                    polarity="horizonal"
                    color="var(--light-700)"
                    width="100%"
                  />
                </StyledReviewsCardHeader>
                <StyledDesc>
                  <Card.RateStars numStars={testi.numStars} />
                  <Card.Desc color="--dark-900">{testi.testimonial}</Card.Desc>
                </StyledDesc>
                <Card.Date>{testi.date}</Card.Date>
              </Menu.CardContainer>
            </SwiperSlide>
          ))}
        </Carousel>
      </Menu.ItemCards>
    </StyledMenuSection>
  );
}
