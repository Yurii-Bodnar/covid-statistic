import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 600px;
  height: 80px;
  background: ${(p) => p.theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  padding: 12px 0 12px 32px;

  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.black};
  &::placeholder {
    color: ${(p) => p.theme.colors.placeHolder};
  }
  &:hover,
  :focus {
    outline: none;
  }
  @media screen and (max-width: 1320px) {
    width: 500px;
  }
`;
export const Svg = styled.svg`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 25px;
  left: 540px;
  fill: ${(p) => p.theme.colors.svgFill};
  @media screen and (max-width: 1320px) {
    left: 444px;
  }
`;
