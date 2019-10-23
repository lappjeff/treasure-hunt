import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import traverseMap from './helpers/traverseMap';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" style={{fontSize: '38px', textAlign: 'center'}}>LAMDA TREASURE HUNT</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            {/* Map */}
            Map
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* RoomInfo */}
                RoomInfo
              </Grid>
              <Grid item xs={12}>
                {/* PlayerInfo */}
                PlayerInfo
              </Grid>
              <Grid item xs={12}>
                {/* Controls */}
                Controls
                <button onClick={traverseMap}>Traverse Map</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
