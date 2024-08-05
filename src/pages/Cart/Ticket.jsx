/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { memo } from "react";
import styled from "styled-components";
import Card from "../../ui/Card";
import screens from "../../utils/screens";

const StyledTicket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 16px;
  max-width: 530px;
  h4 {
    font-size: var(--font-size-medium-50);
    font-weight: 500;
  }

  @media (min-width: ${screens.tablet.xxxl}) {
    align-self: flex-end;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 16px;
  padding: 16px;
  border: 1px solid var(--light-600);
  border-radius: 12px;
  p {
    font-weight: 400;
  }

  @media (min-width: ${screens.tablet.xxxl}) {
    max-width: 220px;
  }
`;

const Ticket = memo(({ children, title = "", offer = "", desc }) => {
  return (
    <StyledTicket>
      {title && (
        <Card.TitleItem case="capitalize" color="--green-200">
          {title}
        </Card.TitleItem>
      )}
      <Info>
        {children}
        {offer && <Card.TitleItem color={"--dark-900"}>{offer}</Card.TitleItem>}
        <Card.Desc color="--dark-300">{desc}</Card.Desc>
      </Info>
    </StyledTicket>
  );
});

Ticket.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  offer: PropTypes.string,
  desc: PropTypes.string,
};

export default Ticket;
