import { createPortal } from "react-dom";
import heart from "../../utility/images/sprite.svg";
import skull from "../../utility/images/sprite.svg";
import fileMedical from "../../utility/images/sprite.svg";
import {
  Box,
  BoxButton,
  Button,
  Container,
  Item,
  ItemDataText,
  List,
  Overlay,
  Svg,
  Title,
} from "./CountryDataPopup.styled";

const CountryDataPopup = ({ popupClose, popupData }) => {
  console.log(popupData);
  const { Country, TotalDeaths, TotalRecovered, TotalConfirmed } = popupData[0];
  const popup = document.querySelector("#popup");
  return createPortal(
    <Overlay onClick={popupClose}>
      <Container>
        <Title>{Country}</Title>
        <List>
          <Item>
            <Box>
              <Svg>
                <use href={heart + "#icon-heart"}></use>
              </Svg>
              <ItemDataText>Total Confirmed</ItemDataText>
            </Box>
            <ItemDataText>{TotalConfirmed}</ItemDataText>
          </Item>
          <Item>
            <Box>
              <Svg>
                <use href={skull + "#icon-skull"}></use>
              </Svg>
              <ItemDataText>Total Deaths</ItemDataText>
            </Box>
            <ItemDataText>{TotalDeaths}</ItemDataText>
          </Item>
          <Item>
            <Box>
              <Svg>
                <use href={fileMedical + "#icon-fileMedical"}></use>
              </Svg>
              <ItemDataText>Total Recovered</ItemDataText>
            </Box>
            <ItemDataText>{TotalRecovered}</ItemDataText>
          </Item>
        </List>
        <BoxButton>
          <Button onClick={popupClose} type="button">
            OK
          </Button>
        </BoxButton>
      </Container>
    </Overlay>,
    popup
  );
};

export default CountryDataPopup;
