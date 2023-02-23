import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
export const Title = styled.h1`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.l};
`;
