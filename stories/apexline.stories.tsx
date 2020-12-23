import React from 'react';
import ApexLine from '../src/ApexLine';

export default {
  title: 'ApexLine',
  component: ApexLine,
};

export const WithNumbers = () => (
  <div>
    <ApexLine
      series={[
        {
          name: 'Series A',
          data: [81, 45, 81, 85, 90, 7, 66],
        },
        {
          name: 'Series B',
          data: [3, 54, 97, 46, 84, 92, 64],
        },
        {
          name: 'Series C',
          data: [15, 92, 50, 76, 80, 56, 83],
        },
        {
          name: 'Series D',
          data: [7, 7, 84, 34, 15, 49, 31],
        },
        {
          name: 'Series E',
          data: [33, 40, 31, 44, 45, 88, 64],
        },
      ]}
      categories={[1, 2, 3, 4, 5, 6, 7, 8]}
    />
  </div>
);

export const WithDates = () => (
  <div>
    <ApexLine
      series={[
        {
          name: 'Series A',
          data: [81, 45, 81, 85, 90, 7, 66],
        },
        {
          name: 'Series B',
          data: [3, 54, 97, 46, 84, 92, 64],
        },
        {
          name: 'Series C',
          data: [15, 92, 50, 76, 80, 56, 83],
        },
        {
          name: 'Series D',
          data: [7, 7, 84, 34, 15, 49, 31],
        },
        {
          name: 'Series E',
          data: [33, 40, 31, 44, 45, 88, 64],
        },
      ]}
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
    />
  </div>
);
