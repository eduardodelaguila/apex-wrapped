import React, { FC, useEffect } from 'react';
import ApexChart from 'apexcharts';

import { IDonutSeries, Categories } from '../types/charts';
import { lineDefaults } from '../defaults/line';
import { formatDate } from '../tools/formatValues';

export interface IProps {
  series: IDonutSeries;
  categories: Categories;
  dateFormat?: string;
}

export const Donut: FC<IProps> = (props: IProps) => {
  const { series, categories, dateFormat } = props;

  const formatLabels = () => {
    // Map issue is a TS open  since december 2020, will be fixed in future versions.
    return categories.map((value: Date | number | string) => {
      if (value instanceof Date) {
        console.log(formatDate(value, dateFormat));
        return formatDate(value, dateFormat);
      }
      return value;
    });
  };

  useEffect(() => {
    const chart = new ApexChart(document.querySelector('#chartDonut'), {
      ...lineDefaults,
      series,
      chart: { type: 'donut' },
      labels: formatLabels(),
    });
    chart.render();
  }, [props]);

  return <div id="chartDonut" />;
};
