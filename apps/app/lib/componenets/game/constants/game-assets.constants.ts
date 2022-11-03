export const GAME_ASSETS = {
  sky: {
    assetSrc: '/sky.png',
  },
  road: {
    assetSrc: '/road.png',
  },
  cer_center: {
    assetSrc: '/cars/car_center.png',
  },
  car_left: {
    assetSrc: '/cars/car_left.png',
  },
  car_right: {
    assetSrc: '/cars/car_right.png',
  },
  mountain_fade: {
    assetSrc: '/mountain_fade.png',
  },
  mountain_left: {
    assetSrc: '/mountain_left.png',
  },
  mountain_right: {
    assetSrc: '/mountain_right.png',
  },
  sideroad_left: {
    assetSrc: '/sideroad_left.png',
  },
  sideroad_right: {
    assetSrc: '/sideroad_right.png',
  },
  enemy_center: {
    assetSrc: '/cars/enemy_center.png',
  },
  enemy_left: {
    assetSrc: '/cars/enemy_left.png',
  },
  enemy_right: {
    assetSrc: '/cars/enemy_right.png',
  },
} as const;

export type GameAssetType = keyof typeof GAME_ASSETS;
