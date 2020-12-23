import React, { useEffect } from 'react';
import AC from 'apexcharts';

import { IChartOptions } from '../types/charts';
import { lineDefaults } from '../defaults/line';

type IProps = IChartOptions;

export const ApexChart = (props: IProps) => {
  useEffect(() => {
    const chart = new AC(document.querySelector('#apexGeneral'), {
      ...props,
      ...lineDefaults,
    });
    chart.render();
  }, [props]);

  return <div id="apexGeneral" />;
};
