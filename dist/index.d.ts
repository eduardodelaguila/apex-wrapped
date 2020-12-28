import { HTMLAttributes, ReactChild } from 'react';
import Line from './Line';
import Chart from './Chart';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
/**
 * A custom Thing component. Neat!
 */
export { Line, Chart };
