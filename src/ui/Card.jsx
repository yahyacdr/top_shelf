import styled from "styled-components";
import Heading from "./Heading";
import PropTypes from "prop-types";

const StyledImg = styled.img`
  /* width: 50%; */
`;

const Title = styled(Heading).attrs(() => ({ as: "h3" }))`
  text-transform: ${(props) => props.case};
  color: var(${(props) => props.color});
  /* margin-bottom: 10px; */
`;

const Desc = styled.p`
  font-size: var(--font-size-medium-33);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 150%;
  color: var(${(props) => props.color});
  opacity: ${(props) => props.opacity};
  max-width: ${(props) => props.maxwidth};
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
