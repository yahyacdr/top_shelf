import styled from "styled-components";
import Heading from "./Heading";
import Menu from "./Menu";
import Card from "./Card";
import { howToCards } from "../data/Static/StaticData";
import Btn from "./Btn";
import refer_a_friend_img from "../data/images/refer-a-friend-bg.svg";
import FloatingPanel from "./FloatingPanel";
import PropTypes from "prop-types";

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
      grid-template-columns: 75% 25%;
      grid-template-rows: 50% 50%;
      grid-template-areas: "head btn" "text btn";
      align-items: flex-start;
      row-gap: 32px;
      > h1 {
        grid-area: head;
        text-align: left;
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
    }
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
  & img {
    width: 100%;
    aspect-ratio: 1;
  }
`;

export default function HowToSection() {
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
      <Menu.ItemCards distribution="grid">
        {howToCards.map((htc) => (
          <Menu.CardContainer distribution="flex" width="548px" key={htc.id}>
            <ImgCardContainer>
              <Card.Tag shape="circle">{htc.id + 1}</Card.Tag>
              <Card.Img img={htc.img} />
            </ImgCardContainer>
            <Card.TitleItem case="uppercase" color="--light-300">
              {htc.name}
            </Card.TitleItem>
            <Card.Desc color="--light-900" opacity="1" maxwidth="500px">
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
}

function ReferAFriend({ className }) {
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
}

ReferAFriend.propTypes = {
  className: PropTypes.string,
};
