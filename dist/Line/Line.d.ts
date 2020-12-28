import { FC } from 'react';
import { IDataSeries, Categories } from '../types/charts';
export interface IProps {
    series: IDataSeries[];
    categories: Categories;
    dateFormat?: string;
}
export declare const Line: FC<IProps>;
