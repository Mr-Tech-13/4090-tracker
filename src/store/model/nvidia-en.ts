import {Store} from './store';

export const NvidiaEN: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.buy',
      text: ['Add to cart'],
    },
    outOfStock: {
      container: '.buy',
      text: ['Out of Stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.nvidia.com/de-de/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '4090',
      url: 'https://store.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&category=GPU,DESKTOP&gpu=RTX%204090%20/',
    },
  ],
  name: 'nvidia-en',
};
