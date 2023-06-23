import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavDiv = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const NavLinks = styled(NavLink)`
  padding: 20px 20px;
  border: 1px solid #000;
  border-radius: 15px;


  &.active{
    color: red;
  }
`;
