import { Button } from '@mui/material';
import styled from 'styled-components';

const WhiteButton = styled(Button)`
  color: white !important;
  border: 2px solid white !important;
  width: 160px !important;
  font-size: 14px !important;
  margin: 0 auto !important;
  padding: 5px !important;
  @media only screen and (min-width: 800px) {
    font-size: 18px !important;
    width: 220px !important;
    margin: 0 !important;
    padding: 10px !important;
  } ;
`;

export default WhiteButton;
