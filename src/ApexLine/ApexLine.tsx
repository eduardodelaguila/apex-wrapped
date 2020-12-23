import React, { FC, useEffect } from 'react';
import ApexChart from 'apexcharts';

import { IDataSeries, Categories } from '../types/charts';
import { lineDefaults } from '../defaults/line';

export interface IProps {
  series: IDataSeries[];
  categories: Categories;
}

export const ApexLine: FC<IProps> = (props: IProps) => {
  const { series, categories } = props;
  console.log(Object.getPrototypeOf(categories[0]));

  useEffect(() => {
    const chart = new ApexChart(document.querySelector('#apexLine'), {
      ...lineDefaults,
      series,
      chart: { type: 'line' },
      xaxis: { categories },
    });
    chart.render();
  }, [props]);

  return <div id="apexLine" />;
};
