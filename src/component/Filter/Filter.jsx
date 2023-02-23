import { Container, Input, Svg } from "./Filter.styled";
import search from "../../utility/images/sprite.svg";

const Filter = ({ value,  handleChange }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
      <Svg>
        <use href={search + "#icon-searchFilter"}></use>
      </Svg>
    </Container>
  );
};

export default Filter;
