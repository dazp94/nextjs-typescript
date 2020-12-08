import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  &:hover {
    color: blue;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="/users">
        <StyledLink>Users</StyledLink>
      </Link>
    </StyledNav>
  </StyledHeader>
);

export default Header;
