import { HTMLAttributes, ReactChild } from 'react';
import ApexLine from './ApexLine';
import ApexChart from './ApexChart';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
}
/**
 * A custom Thing component. Neat!
 */
export { ApexLine, ApexChart };
