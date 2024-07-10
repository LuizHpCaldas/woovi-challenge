import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PixPayment = () => {
  return (
    <Box p={2} textAlign="center">
      <Typography variant="h6">João, pague a entrada de R$ 15.300,00 pelo Pix</Typography>
      <Box my={2}>
        <img src="path-to-qr-code-image" alt="QR Code" />
      </Box>
      <Button variant="contained" color="primary">Clique para copiar QR CODE</Button>
      <Typography variant="body2" color="textSecondary">1ª entrada no Pix: R$ 15.300,00</Typography>
      <Typography variant="body2" color="textSecondary">2ª no cartão: R$ 15.300,00</Typography>
    </Box>
  );
};

export default PixPayment;
