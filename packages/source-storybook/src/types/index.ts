import type { Page } from '@jpmorganchase/mosaic-types';

/** Storybook Source config - added to mosaic.config.mjs **/
export type StoryConfig = {
  url: string;
  description: string;
  filter?: RegExp;
  filterTags?: string[];
  additionalData?: Record<string, any>;
  additionalTags?: string[];
};

/** Storybook API response */
export type StoryResponseJSON = {
  id: string;
  kind: string;
  name: string;
  story: string;
  title: string;
  tags: string[];
};
export type StoriesResponseJSON = {
  stories: Record<string, StoryResponseJSON>;
};

/** Storybook page data */
export type StorybookPageData = {
  id: string;
  description: string;
  link: string;
  kind: string;
  name: string;
  story: string;
  source: 'STORYBOOK';
};

/** Page created by the Source for each Storybook story */
export type StorybookPage = {
  content: string;
  description?: string;
  layout: string;
  data: StorybookPageData;
  tags?: string[];
} & Page;