import React from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const PaymentMethod = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">João, como você quer pagar?</Typography>
      <RadioGroup defaultValue="pix">
        <FormControlLabel value="pix" control={<Radio />} label="1x R$ 30.500,00" />
        <FormControlLabel value="pixParceled" control={<Radio />} label="2x R$ 15.300,00" />
        {/* Adicione os outros métodos de pagamento aqui */}
      </RadioGroup>
    </Box>
  );
};

export default PaymentMethod;
