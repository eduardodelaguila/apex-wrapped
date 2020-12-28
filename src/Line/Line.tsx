import React, { FC, useEffect } from 'react';
import ApexChart from 'apexcharts';

import { IDataSeries, Categories } from '../types/charts';
import { lineDefaults } from '../defaults/line';
import { formatDate } from '../tools/formatValues';

export interface IProps {
  series: IDataSeries[];
  categories: Categories;
  dateFormat?: string;
}

export const Line: FC<IProps> = (props: IProps) => {
  const { series, categories, dateFormat } = props;

  useEffect(() => {
    const chart = new ApexChart(document.querySelector('#chartLine'), {
      ...lineDefaults,
      series,
      chart: { type: 'line' },
      xaxis: {
        categories,
        labels: {
          formatter: (value: number | Date | string) => {
            if (value instanceof Date) {
              console.log(formatDate(value, dateFormat));
              return formatDate(value, dateFormat);
            }
            return value;
          },
        },
      },
    });
    chart.render();
  }, [props]);

  return <div id="chartLine" />;
};
