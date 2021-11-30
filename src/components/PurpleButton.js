import { Button } from '@mui/material';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import styled from 'styled-components';

const PurpleButton = styled(Button)`
  color: white !important;
  background-color: #8b63ff !important;
  border: 0 !important;
  width: 160px !important;
  font-size: 14px !important;
  margin: 0 auto !important;
  padding: 5px !important;
  @media only screen and (min-width: 800px) {
    font-size: 18px !important;
    width: 220px !important;
    margin: 0 !important;
    padding: 10px !important;
  }
  &:hover {
    background-color: #7655d9 !important;
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

export default PurpleButton;
