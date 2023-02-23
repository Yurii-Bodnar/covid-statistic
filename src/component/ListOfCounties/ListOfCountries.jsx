import CountryDataPopup from "component/CountyDataPopup/CountryDataPopup";
import { useEffect, useState } from "react";
import {
  Container,
  ContainerCountry,
  ContainerNumber,
  ContainerTotal,
  Country,
  Item,
  ItemBoxCountry,
  ItemBoxNumber,
  ItemBoxTotal,
  ItemCountry,
  ItemNumber,
  ItemTotal,
  List,
  Number,
  Total,
} from "./ListOfCountries.styled";

const ListOfCountries = ({ data, filteredCounties, value }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const popupClose = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", popupClose);
    return () => {
      window.removeEventListener("keydown", popupClose);
    };
  }, []);

  const openPopup = (id) => {
    const choseCountry = data.filter((e) => e.ID === id);
    setIsPopupOpen(true);
    setPopupData(choseCountry);
  };

  return (
    <section>
      <Container>
        <ContainerNumber>
          <Number>№</Number>
        </ContainerNumber>
        <ContainerCountry>
          <Country>Country</Country>
        </ContainerCountry>
        <ContainerTotal>
          <Total>Total Confirmed</Total>
        </ContainerTotal>
      </Container>
      <List>
        {filteredCounties && value !== ""
          ? filteredCounties?.map((el, index) => (
              <Item key={el.ID} onClick={() => openPopup(el.ID)}>
                <ItemNumber>{index + 1}</ItemNumber>
                <ItemCountry>{el.Country}</ItemCountry>
                <ItemTotal>{el.TotalConfirmed}</ItemTotal>
              </Item>
            ))
          : data?.map((el, index) => (
              <Item key={el.ID} onClick={() => openPopup(el.ID)}>
                <ItemBoxNumber>
                  <ItemNumber>{index + 1}</ItemNumber>
                </ItemBoxNumber>
                <ItemBoxCountry>
                  <ItemCountry>{el.Country}</ItemCountry>
                </ItemBoxCountry>
                <ItemBoxTotal>
                  <ItemTotal>{el.TotalConfirmed}</ItemTotal>
                </ItemBoxTotal>
              </Item>
            ))}
      </List>
      {isPopupOpen && (
        <CountryDataPopup popupClose={popupClose} popupData={popupData} />
      )}
    </section>
  );
};

export default ListOfCountries;
