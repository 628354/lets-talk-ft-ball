import React from 'react';
import Table from 'react-bootstrap/Table';

export default function PremierLeaguetable() {
  return (
    <div>
        <div className='en-table-deta ar-table-deta'>
        <Table striped>
      <thead>
        <tr>
           <th></th>
          <th>TEAM</th>
          <th>GAMES</th>
          <th>WIN</th>
          <th>DRAW</th>
          <th>LOSE</th>
          <th>GOALS SCORED</th>
          <th>GOALS CONCEDED</th>
          <th>POINTS</th>
          <th>POINT GAP</th>
          <th>GS-GC</th>
          <th>WIN%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
       
       
      </tbody>
    </Table>

    

        </div>
    </div>
  )
}
