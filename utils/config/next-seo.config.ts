/**
 * This was borrowed from https://github.com/calendso/calendso/blob/main/components/seo/head-seo.tsx
 */

import { DefaultSeoProps } from 'next-seo';

import { HeadSeoProps } from '../../interfaces/seo';

const seoImages = {
  default: 'https://nextjs.org/static/twitter-cards/home.jpg',
  ogImage: 'https://og-image.vercel.app/',
};

export const getSeoImage = (key: keyof typeof seoImages): string => {
  return seoImages[key];
};

export const seoConfig: {
  headSeo: Required<Pick<HeadSeoProps, 'siteName'>>;
  defaultNextSeo: DefaultSeoProps;
} = {
  headSeo: {
    siteName: 'SomeSite.com',
  },
  defaultNextSeo: {
    twitter: {
      handle: '@waptik',
      site: '@waptik',
      cardType: 'summary_large_image',
    },
  },
};
