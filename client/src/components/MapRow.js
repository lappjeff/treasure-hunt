import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin: 3px;
`;

const Padding = styled.div`
  background-color: #DDD;
  padding: 8px;
  margin: 1px;
  `;
  
  const Cell = styled.div`
  background-color: #999;
  padding: 8px;
  margin: 1px;
`;

function MapRow(props) {
  return (
    <Row>
      {(props.rowData) ? props.rowData.map((item, i) => {
        if (item === -1) {
          return <Padding key={i}></Padding>
        } else {
          return (
            <Cell key={i}></Cell>
          )
        }
      }) : ''}
    </Row>
  )
};

export default MapRow;
