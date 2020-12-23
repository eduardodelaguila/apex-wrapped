import { FC } from 'react';
import { IDataSeries, Categories } from '../types/charts';
export interface IProps {
    series: IDataSeries[];
    categories: Categories;
}
export declare const ApexLine: FC<IProps>;
