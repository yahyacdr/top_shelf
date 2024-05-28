import styled from "styled-components";
import Heading from "./Heading";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  width: 50%;
`;

const Title = styled(Heading).attrs(() => ({ as: "h3" }))`
  text-transform: ${(props) => props.case};
  color: var(--dark-900);
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: var(--font-size-medium-33);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;
  color: var(--dark-300);
  max-width: 280px;
`;

export default function Card({ children }) {
  return { children };
}

function Img({ img }) {
  return <StyledImg src={img} />;
}

Img.propTypes = {
  img: PropTypes.string,
};

Card.Img = Img;
Card.Title = Title;
Card.Desc = Desc;
