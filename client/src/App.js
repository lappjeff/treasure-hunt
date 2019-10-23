import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Map, RoomInfo, PlayerInfo, Controls } from './components/index';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h1" style={{fontSize: '38px'}}>LAMDA TREASURE HUNT</Typography>
      </Grid>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <Map />
      </Grid>
      <Grid item xs={6} style={{display: 'flex', justifyContent: 'center'}}>
        <RoomInfo />
      </Grid>
      <Grid item xs={6} style={{display: 'flex', justifyContent: 'center'}}>
        <PlayerInfo />
      </Grid>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <Controls />
      </Grid>
    </Grid>
  );
}

export default App;
