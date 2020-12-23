import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApexLine from '../src/ApexLine';

const App = () => {
  return (
    <div>
      <ApexLine
        categories={[
          new Date('01/01/2020'),
          new Date('02/01/2020'),
          new Date('03/01/2020'),
          new Date('04/01/2020'),
          new Date('05/01/2020'),
          new Date('06/01/2020'),
          new Date('07/01/2020'),
          new Date('08/01/2020'),
        ]}
        series={[
          {
            name: 'Series A',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          },
          {
            name: 'Series B',
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
          {
            name: 'Series C',
            data: [45, 110, 39, 98, 12, 56, 100, 35],
          },
          {
            name: 'Series D',
            data: [11, 39, 94, 88, 72, 12, 10, 76],
          },
          {
            name: 'Series F',
            data: [10, 2, 45, 63, 99, 56, 84, 100],
          },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
