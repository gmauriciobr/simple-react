import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopBarContainer = styled.header`
  width: 100%;
  height: 68px;
  background-color: #1976d2;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #ffffff;
  }
`;

export const FancyButton = styled(Link)`
  background-color: #ffffff;
  color: #1976d2;
  padding: 8px 16px;
  border-radius: 2px;

  display: flex;
  align-items: center;
`;

export const CardIcon = styled(FaShoppingCart)`
  color: var(--primary);
  padding-right: 4px;
  font-size: 24px;
`;
