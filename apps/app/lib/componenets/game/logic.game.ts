import { Application, Sprite, Loader, Texture, Container } from 'pixi.js';
import { Assets } from '@pixi/assets';
import { GameAssetType, GAME_ASSETS } from './constants/game-assets.constants';
import { Player } from './assets/player.asset';
import { Sky } from './assets/sky.asset';
import { Road } from './assets/road.asset';
import { Enemy } from './assets/enemy.asset';

export interface SpriteParams {
  canvasWidth: number;
  canvasHeight: number;
}

export type RoadLane = 'left' | 'right' | 'center';
export type Controls = 'ArrowLeft' | 'ArrowRight';

export class Game {
  private player: Player;
  private spriteParams: SpriteParams;
  private sky: Sky;
  private road: Road;
  public enemy: Enemy;

  constructor(private readonly app: Application) {
    this.loadAssets();

    this.spriteParams = {
      canvasHeight: this.app.view.height,
      canvasWidth: this.app.view.width,
    };
  }

  async loadAssets() {
    Object.entries(GAME_ASSETS).forEach(([key, asset]) =>
      Assets.add(key, asset.assetSrc)
    );

    const assets = await Assets.load<Record<GameAssetType, any>>(
      Object.entries(GAME_ASSETS).map(([key]) => key)
    );

    this.player = new Player(assets.cer_center, this.spriteParams);
    this.sky = new Sky(assets.sky, this.spriteParams);
    this.road = new Road(assets.road, this.spriteParams);

    this.enemy = new Enemy(assets.enemy_center, this.spriteParams);

    const rightRoadContainer = this.createRightRoad(assets);
    const leftRoadSprites = this.createLeftRoad(assets);

    this.app.stage.addChild(this.sky);
    this.app.stage.addChild(this.road);
    this.app.stage.addChild(this.player);
    this.app.stage.addChild(rightRoadContainer);
    this.app.stage.addChild(leftRoadSprites);
    this.app.stage.addChild(this.enemy);
    this.app.stage.addChild(this.createMountianFade(assets));

    this.start((elapsed) => {
      // rightRoadContainer.scale.x += 0.0015;
      // rightRoadContainer.scale.y += 0.0015;
    });
  }

  processControllerInput(control: Controls) {
    this.player.moveLane(control === 'ArrowLeft' ? 'left' : 'right');
  }

  createLeftRoad(assets: Record<GameAssetType, any>) {
    const mountainLeft = Sprite.from(assets.mountain_left);
    mountainLeft.scale = { x: 0.075, y: 0.075 };
    mountainLeft.y += this.app.view.height / 2 - mountainLeft.height + 10;
    // mountainLeft.x += 330;

    const sideRoadLeft = Sprite.from(assets.sideroad_left);
    sideRoadLeft.scale = { x: 0.1, y: 0.11 };
    sideRoadLeft.y += 300;
    sideRoadLeft.x += 100;

    const containerLeft = new Container();
    containerLeft.addChild(sideRoadLeft);
    containerLeft.addChild(mountainLeft);

    return sideRoadLeft;
  }

  createRightRoad(assets: Record<GameAssetType, any>) {
    const sideRoadRightOffset = 100;
    const sideRoadRight = Sprite.from(assets.sideroad_right);
    sideRoadRight.scale = { x: 0.15, y: 0.15 };
    // sideRoadRight.skew = { x: 0, y: 0.15 };
    sideRoadRight.y = this.app.view.height - sideRoadRight.height * 2;
    sideRoadRight.x +=
      this.app.view.width / 2 + sideRoadRight.width / 2 - sideRoadRightOffset;

    const mountainRight = Sprite.from(assets.mountain_right);
    mountainRight.scale = { x: 0.075, y: 0.075 };
    mountainRight.x = this.app.view.width / 1.85;
    mountainRight.y = this.app.view.height / 2.5;

    const containerRight = new Container();
    containerRight.addChild(mountainRight);
    containerRight.addChild(sideRoadRight);

    return containerRight;
  }

  createMountianFade(assets: Record<GameAssetType, any>) {
    const mountianFade = Sprite.from(assets.mountain_fade);

    mountianFade.width = this.app.view.width / 2;
    mountianFade.scale = { x: 1, y: 0.1 };
    mountianFade.height = this.app.view.height / 2 + mountianFade.height / 6;

    return mountianFade;
  }

  async start(callback: (elapsed: number) => any) {
    let elapsed = 0;

    this.app.ticker.add((delta) => {
      elapsed += delta;
      this.player.update(elapsed);
      this.enemy.update(elapsed, delta);
      callback(elapsed);
    });
  }
}

export class MountianFade extends Sprite {
  constructor(texture: Texture, private readonly params: SpriteParams) {
    super(texture);

    this.width = this.params.canvasWidth;
    this.height = this.params.canvasHeight / 1.95;
  }
}
