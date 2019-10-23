import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import mapJSON from '../data/maze-complete.json';
import MapRow from './MapRow';
import styled from 'styled-components';

const MapBorder = styled.div`
  border: 2px solid #666;
`;

function Map() {
  const [mapData, setMapData] = useState(mapJSON);
  const [mapMatrix, setMapMatrix] = useState(null);

  useEffect(() => {
    let matrix = [];
    const spacesCount = 6400;
    const rooms = [...Array(spacesCount).keys()].fill(-1);
    while (rooms.length > 0) {
      matrix.push(rooms.splice(0, Math.floor(Math.sqrt(spacesCount))));
    }

    const missingRoomIDs = []
    for (let i = 0; i < Object.keys(mapJSON).length; i++) {
      if (i in mapJSON) {
        let coordinates = mapJSON[i].coordinates.split(',');
        let xAxis = parseInt(coordinates[0].replace('(', ''));
        let yAxis = parseInt(coordinates[1].replace(')', ''));
        matrix[xAxis][yAxis] = mapJSON[i].room_id;
      } else {
        missingRoomIDs.push(i)
      }
    }
    // console.log(`Missing RoomIDs: ${missingRoomIDs.join(',')}`)
    //=> Missing RoomIDs: 5, 24, 44, 96, 97, 118, 130, 137, 181, 203,
    //=> 209, 219, 234, 252, 268, 284, 293, 299, 302, 303, 311, 312,
    //=> 328, 332, 350, 357, 360, 361, 363, 368, 372, 398, 404, 405,
    //=> 406, 408, 411, 415, 418, 422, 423, 425, 426, 430, 436, 438

    // If row is empty then remove it.
    matrix = matrix.filter((row) => {
      let s = new Set(row)
      return !(s.size === 1 && s.has(-1))
    })

    // Trim column padding.
    matrix = matrix.map(row => row.slice(40))

    setMapMatrix(matrix)
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <MapBorder>
          {(mapMatrix) ? mapMatrix.map((row,i) => <MapRow key={i} rowData={row} />) : ''}
        </MapBorder>
      </Grid>
    </Grid>
  )
};

export default Map;
