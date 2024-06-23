/* eslint-disable react/display-name */

import styled from "styled-components";
import Heading from "../../ui/Heading";
import Menu from "../../ui/Menu";
import Card from "../../ui/Card";
import { howToCards } from "../../data/Static/StaticData";
import Btn from "../../ui/Btn";
import refer_a_friend_img from "../../data/images/refer-a-friend-bg.svg";
import FloatingPanel from "../../ui/FloatingPanel";
import PropTypes from "prop-types";
import { memo } from "react";

const StyledHowToSection = styled.section`
  margin-top: 240px;
  background-color: var(--dark-900);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 120px !important;
  padding-bottom: 120px !important;
  padding-top: 280px !important;
  position: relative;
  row-gap: 32px;
  & h1 {
    text-align: center;
    max-width: 950px;
  }
  & > p {
    max-width: 800px;
    font-size: var(--font-size-medium-33);
    line-height: 150%;
    font-weight: 300;
    letter-spacing: 0;
    text-align: center;
    color: var(--light-900);
  }
  & > div:not(:first-child) {
    margin-top: 73px;
    margin-bottom: 80px;
    & > div {
      & > p {
        flex-grow: 1;
        text-transform: none;
      }
    }
  }
  & > p + div {
    justify-content: center;
  }

  .refer-a-friend {
    > div {
      width: 100%;
      display: grid;
      grid-template-columns: 65% 35%;
      grid-template-rows: 50% 50%;
      grid-template-areas: "head btn" "text btn";
      align-items: flex-start;
      row-gap: 32px;
      > h1 {
        grid-area: head;
        text-align: left;
        @media (max-width: 640px) {
          text-align: center;
        }
      }
      > p {
        grid-area: text;
        margin-bottom: 0;
        font-size: var(--font-size-large-66);
        > span {
          color: var(--gold);
        }
      }
      > div {
        grid-area: btn;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 920px) {
        grid-template-columns: 57% 43%;
      }
      @media (max-width: 640px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, calc(100% / 3));
        grid-template-areas: "head" "text" "btn";
        row-gap: 8px;
        > p {
          text-align: center;
        }
      }
      @media (max-width: 640px) {
      }
    }
  }

  .card-items {
    @media (max-width: 540px) {
      column-gap: 32px;
    }
  }

  .card-container {
    width: 100%;
    max-width: 548px;
    @media (max-width: 540px) {
      width: 44%;
    }
  }

  .card-desc {
    max-width: 500px;
    @media (max-width: 540px) {
      max-width: 180px;
    }
  }

  .tag {
    background-color: var(--gold);
    width: 32px;
    top: 0;
    left: 0;
    color: var(--green-900);
  }

  @media (max-width: 540px) {
    padding: 280px 24px 120px !important;
  }
`;

const ImgCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  height: fit-content;
  width: 50%;
  @media (max-width: 540px) {
    width: 70%;
  }
  & img {
    width: 144px;
    aspect-ratio: 1;
    @media (max-width: 540px) {
      width: 64px;
    }
  }
`;

const HowToSection = memo(() => {
  return (
    <StyledHowToSection>
      <ReferAFriend className="refer-a-friend" />
      <Heading as="h1">
        how to order weed online from top shelf bc - mail order marijuana
      </Heading>
      <p>
        Ordering weed online from Top Shelf BC is easy. We are proud to have
        made the process accessible across multiple platforms and simple to
        understand, meaning that more people can come to us to buy their
        cannabis products online.
      </p>
      <Menu.ItemCards distribution="grid" className="card-items">
        {howToCards.map((htc) => (
          <Menu.CardContainer
            className="card-container"
            distribution="flex"
            key={htc.id}
          >
            <ImgCardContainer>
              <Card.Tag className="tag" shape="circle">
                {htc.id + 1}
              </Card.Tag>
              <Card.Img img={htc.img} />
            </ImgCardContainer>
            <Card.TitleItem case="uppercase" color="--light-300">
              {htc.name}
            </Card.TitleItem>
            <Card.Desc color="--light-900" opacity="1" className="card-desc">
              {htc.desc}
            </Card.Desc>
          </Menu.CardContainer>
        ))}
      </Menu.ItemCards>
      <Btn variation="primary" size="large" shape="pill" color="--light-300">
        Choose your Weed
      </Btn>
    </StyledHowToSection>
  );
});

const ReferAFriend = memo(({ className }) => {
  return (
    <FloatingPanel className={className} img={refer_a_friend_img}>
      <div>
        <Heading as="h1">refer a friend</Heading>
        <p>
          And get <span>$30!</span>
        </p>
        <div>
          <Btn
            variation="primary"
            size="large"
            shape="pill"
            color="--light-300"
          >
            Refer Here
          </Btn>
        </div>
      </div>
    </FloatingPanel>
  );
});

ReferAFriend.propTypes = {
  className: PropTypes.string,
};

export default HowToSection;
