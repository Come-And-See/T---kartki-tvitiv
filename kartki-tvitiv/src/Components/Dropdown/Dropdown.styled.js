import styled from 'styled-components';

export const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
`;

export const DropdownButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #ccc;
  color: #333;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 500;
`;

export const DropdownBlock = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;