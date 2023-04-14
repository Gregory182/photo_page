import React from "react";
import { BiFastForwardCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #eee;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarLink = ({ linkTo, text }) => {
  return (
    <li>
      <LinkContainer>
        <BiFastForwardCircle />
        <StyledLink to={linkTo}>{text}</StyledLink>
      </LinkContainer>
    </li>
  );
};

export default SidebarLink;
