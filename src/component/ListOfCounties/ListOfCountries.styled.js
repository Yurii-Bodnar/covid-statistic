import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(p) => p.theme.colors.accent};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  border-radius: 20px;
`;
export const ContainerNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  border-right: 1px solid ${(p) => p.theme.colors.white};
  height: 100%;
`;
export const Number = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.white};
`;
export const ContainerCountry = styled.div`
  width: 47%;
`;
export const Country = styled.p`
  width: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.white};
  padding: 26px 0 26px 23px;
`;
export const ContainerTotal = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-left: 1px solid ${(p) => p.theme.colors.white}; ;
`;
export const Total = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.white};
  padding-left: 23px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate(-1%, -1%);
    box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px,
      rgb(255 255 255 / 30%) -4px -4px 6px;
  }
`;

export const ItemBoxNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  border-right: 1px solid ${(p) => p.theme.colors.placeHolder};
  height: 100%;
`;

export const ItemNumber = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.black};
  cursor: pointer;
`;
export const ItemBoxCountry = styled.div`
  width: 47%;
`;
export const ItemCountry = styled.p`
  width: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.black};
  padding: 21px 0 26px 21px;
  cursor: pointer;
`;
export const ItemBoxTotal = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-left: 1px solid ${(p) => p.theme.colors.placeHolder}; ;
`;
export const ItemTotal = styled.p`
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.l};
  color: ${(p) => p.theme.colors.black};
  padding-left: 23px;
  cursor: pointer;
`;
