import Filter from "component/Filter/Filter";
import Header from "component/Header/Header";
import ListOfCountries from "component/ListOfCounties/ListOfCountries";
import { useEffect, useState } from "react";
import { getCountriesStatistic } from "utility/covidApi/covidApi";
import { Box, Container } from "./HomePage.styled";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [filteredCounties, setFilteredCountries] = useState(null);
  useEffect(() => {
    getCountriesStatistic().then(({ Countries }) => {
      setData(Countries);
    });
  }, []);

  const handleChange = (e) => {
    if (data !== undefined) {
      setValue(e.target.value);
      const correctData = value.toLowerCase();
      const filterCountries = data.filter(({ Country }) =>
        Country.toLowerCase().includes(correctData)
      );
      setFilteredCountries(filterCountries);
    }
    setValue(e.target.value);
  };

  return (
    <Container>
      <Box>
        <Header />
        <Filter value={value} handleChange={handleChange} />
      </Box>
      <ListOfCountries
        data={data}
        filteredCounties={filteredCounties}
        value={value}
      />
    </Container>
  );
};
export default HomePage;
