export interface IDataPair {
  x: number | Date | string;
  y: number;
}

export interface IDataSeries {
  name: string;
  data: number[];
}

export type IDonutSeries = number[];

export type Categories = number[] | Date[] | string[];

export interface IChartOptions {
  chart: {
    width?: string | number;
    height?: string | number;
    type: string;
    foreColor?: string;
  };
  plotOptions?: {
    radialBar?: {
      offsetY?: number;
      startAngle?: number;
      endAngle?: number;
      hollow?: {
        margin: number;
        size: string;
        background: string;
        image: string | undefined;
      };
      track?: {
        show: boolean;
      };
      dataLabels?: {
        showOn?: string;
        name?: {
          show: boolean;
        };
        value?: {
          show: boolean;
        };
      };
    };
    circle?: {
      track?: {
        show: boolean;
      };
      dataLabels: {
        showOn?: string;
        name?: {
          show: boolean;
        };
        value?: {
          show: boolean;
        };
      };
    };
    pie?: {
      size?: undefined;
      donut?: {
        size?: string;
        background?: string;
      };
      customScale?: number;
      offsetX?: number;
      offsetY?: number;
      dataLabels?: {
        offset?: number;
      };
    };
  };
  colors?: string[];
  series: number[];
  labels?: string[];
  legend?: {
    show?: boolean;
    floating?: boolean;
    fontSize?: string;
    position?: string;
    verticalAlign?: string;
    textAnchor?: string;
    labels?: {
      useSeriesColors: boolean;
    };
    markers?: {
      size: number;
    };
    formatter?: Function;
    itemMargin?: {
      vertical: number;
    };
    containerMargin?: {
      left: number;
      top: number;
    };
  };
}
