import React from 'react';
import { ChartPie, CreditCard, PiggyBank, Bank } from '../icons';

type ContributionProps = {
  icon: SVGElement;
  title: string;
  value: string;
};

export const contributions: Array<ContributionProps> = [
  {
    icon: <ChartPie />,
    title: 'Paid',
    value: 'Unavailable',
  },
  {
    icon: <CreditCard />,
    title: 'Due',
    value: 'Unavailable',
  },
  {
    icon: <PiggyBank />,
    title: 'Advance payment',
    value: '€ 1,230.00',
  },
  {
    icon: <Bank />,
    title: 'Modularity',
    value: '€ 340.59',
  },
];
