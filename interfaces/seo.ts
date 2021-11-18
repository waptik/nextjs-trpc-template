import { NextSeoProps } from 'next-seo';

export type HeadSeoProps = {
  title: string;
  description: string;
  siteName?: string;
  name?: string;
  avatar?: string;
  url?: string;
  canonical?: string;
  nextSeoProps?: NextSeoProps;
};
