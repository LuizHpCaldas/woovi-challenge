import React from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Grid } from '@mui/material';

const PaymentMethod = () => {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>João, como você quer pagar?</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RadioGroup defaultValue="pix">
            <FormControlLabel value="pix" control={<Radio />} label="1x R$ 30.500,00" />
            <FormControlLabel value="pixParceled" control={<Radio />} label="2x R$ 15.300,00" />
            {/* Adicione os outros métodos de pagamento aqui */}
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentMethod;
