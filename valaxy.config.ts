import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  addons: [
    addonLightGallery(),
  ],

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '何星梦的云之都',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: false,
        icp: '萌20259747',
      },
    },
  },

  unocss: { safelist },
})

