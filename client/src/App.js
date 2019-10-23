import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Map, RoomInfo, PlayerInfo, Controls } from './components/index';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" style={{fontSize: '38px', textAlign: 'center'}}>LAMDA TREASURE HUNT</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Map />
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RoomInfo />
              </Grid>
              <Grid item xs={12}>
                <PlayerInfo />
              </Grid>
              <Grid item xs={12}>
                <Controls />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
