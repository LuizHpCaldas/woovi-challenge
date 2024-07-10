import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const CreditCardPayment = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">João, pague o restante em 1x no cartão</Typography>
      <TextField fullWidth margin="normal" label="Nome completo" defaultValue="João Linaldo Dias Fraga Santos" />
      <TextField fullWidth margin="normal" label="CPF" defaultValue="405.503.503-15" />
      <TextField fullWidth margin="normal" label="Número do cartão" defaultValue="405.503.503-15" />
      <TextField fullWidth margin="normal" label="Validade" defaultValue="10/11" />
      <TextField fullWidth margin="normal" label="CVV" defaultValue="405" />
      <Button fullWidth variant="contained" color="primary">Pagar</Button>
    </Box>
  );
};

export default CreditCardPayment;
