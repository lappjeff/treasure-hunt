import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import traverseMap from './helpers/traverseMap';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2">Treasure Hunt</Typography>
        <button onClick={traverseMap}>Traverse Map</button>
      </Grid>
    </Grid>
  );
}

export default App;
