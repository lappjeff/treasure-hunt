import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import mapJSON from '../data/maze-20191023.json';
import Room from './Room';

function Map() {
  const [mapData, setMapData] = useState(mapJSON);

  useEffect(() => {
    console.log('mapJSON', mapJSON)
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {Object.keys(mapData).map(roomID => <Room key={roomID} roomData={mapJSON[roomID]} />)}
      </Grid>
    </Grid>
  )
};

export default Map;
