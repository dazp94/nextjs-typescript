import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
`;

const Page = ({ children }: { children: ReactNode }) => (
  <StyledPage>{children}</StyledPage>
);

export default Page;
