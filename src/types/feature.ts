import { SvgIconProps } from '@mui/material';

export type Feature = {
  id: number;
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  paragraph: string;
};
