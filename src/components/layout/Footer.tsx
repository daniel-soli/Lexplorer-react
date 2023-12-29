
import { Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';

export interface FooterProps {
    drawerwidth: number;
}

export default function FooterComponent(props: FooterProps) {
  
  return (
    <>
      <Paper sx={{marginTop: 'calc(10% + 60px)',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'background.default',
        backgroundImage: 'none',
        width: { xs: '100%',sm: `calc(100% - ${props.drawerwidth}px)` },
        ml: { sm: `${props.drawerwidth}px` },
        p: 1,
        }} >
            <Grid container rowSpacing={0} columnSpacing={0} spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant='body2'>©2023 Lexplorer.io</Typography>
                </Grid>
            </Grid>
        
      </Paper>
    </>
  );
}