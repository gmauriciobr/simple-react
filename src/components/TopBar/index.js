import { Link } from "react-router-dom";
import { CardIcon, FancyButton, TopBarContainer } from "./styles";

const TopBar = ({ title }) => {
  return (
    <TopBarContainer>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <FancyButton to="/cart">
        <CardIcon />
        Checkout
      </FancyButton>
    </TopBarContainer>
  );
};

export default TopBar;
