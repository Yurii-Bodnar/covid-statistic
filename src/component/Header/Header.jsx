import logo from "../../utility/images/logo.jpg";
import { Container, Logo, Title } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" width={200} />
      <Title>STATISTIC</Title>
    </Container>
  );
};

export default Header;
