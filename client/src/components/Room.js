import React from 'react';
import Grid from '@material-ui/core/Grid';

function Room(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {props.roomData.room_id}
      </Grid>
    </Grid>
  )
}

export default Room;
