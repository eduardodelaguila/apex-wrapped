import React from 'react';
import Donut from '../src/Donut';

export default {
  title: 'Donut Chart',
  component: Donut,
};

export const Default = () => (
  <div>
    <Donut
      series={[10, 9, 5, 20, 11, 2, 7, 11]}
      categories={[
        'T-Shirts',
        'Shirts',
        'Jeans',
        'Dresses',
        'Accessories',
        'Shoes',
        'Coats',
        'PJs',
      ]}
    />
  </div>
);
