import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const PixPayment = () => {
  return (
    <Box p={2} textAlign="center">
      <Typography variant="h6" gutterBottom>João, pague a entrada de R$ 15.300,00 pelo Pix</Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box my={2}>
            <img src="path-to-qr-code-image" alt="QR Code" style={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>Clique para copiar QR CODE</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">1ª entrada no Pix: R$ 15.300,00</Typography>
          <Typography variant="body2" color="textSecondary">2ª no cartão: R$ 15.300,00</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PixPayment;
