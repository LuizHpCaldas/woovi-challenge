import React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const CreditCardPayment = () => {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>João, pague o restante em 1x no cartão</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Nome completo" defaultValue="João Linaldo Dias Fraga Santos" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="CPF" defaultValue="405.503.503-15" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Número do cartão" defaultValue="405.503.503-15" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Validade" defaultValue="10/11" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="CVV" defaultValue="405" />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">Pagar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreditCardPayment;
