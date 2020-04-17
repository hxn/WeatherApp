import React from 'react';
import styled from 'styled-components';

const Unit = styled.em`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

const ResultsBox = ({ data }) =>
  data ? (
    <div className='resultsBox'>
      <table>
        <tbody>
          <tr>
            <th>City name:</th>
            <td>{data.name || '-'}</td>
          </tr>
          <tr>
            <th>Temperature:</th>
            <td>
              {data.temp || '-'} <Unit>°F</Unit>
            </td>
          </tr>
          <tr>
            <th>Humidity:</th>
            <td>
              {data.humidity || '-'}
              <Unit>g.m-3</Unit>
              {/* TODO: Overit ze jsou to gramy na ctverec a ne kg */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : null;

export default ResultsBox;
