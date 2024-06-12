import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../data/images/Logo.png";
import logoInvert from "../data/images/Logo_invert.png";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 40px;
  @media (max-width: 480px) {
    width: 119px;
    height: 28px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Logo({ type }) {
  const img = type === "regular" ? logo : logoInvert;
  return (
    <StyledLogo>
      <Link to="/" className="tracking-widest">
        <Img src={img} alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

Logo.propTypes = {
  type: PropTypes.string,
};
