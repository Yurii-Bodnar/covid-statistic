import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: center;
  z-index: 10;

  background: rgba(0, 0, 0, 0.5);
`;
export const Container = styled.div`
  width: 600px;
  height: 400px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  animation: 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0s 1 normal both running
    scale-up-center;
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.m};
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 37px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-last-child(-n + 1) {
    margin-bottom: 36px;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;
`;
export const Svg = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(p) => p.theme.colors.svgFill};
`;
export const ItemDataText = styled.p`
  color: ${(p) => p.theme.colors.svgFill};
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
`;
export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  width: 171px;
  height: 49px;
  border: none;
  cursor: pointer;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 20px;

  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};

  color: ${(p) => p.theme.colors.white};
  &:hover {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate(-1%, -1%);
    box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px,
      rgb(255 255 255 / 30%) -4px -4px 6px;
  }
`;
