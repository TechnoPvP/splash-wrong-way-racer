import { Sprite, Texture, Assets } from 'pixi.js';
import { GAME_ASSETS } from '../constants/game-assets.constants';
import { RoadLane, SpriteParams } from '../logic.game';

export class Enemy extends Sprite {
  constructor(texture: Texture, private readonly params: SpriteParams) {
    super(texture);

    this.scale = { x: 0.1, y: 0.1 };
    this.y = params.canvasHeight / 2;
    this.x = params.canvasWidth / 2 - this.width * 1.7;
    this.setLane('left');
  }

  update(elapsed: number, delta: number) {
    if (this.y > this.params.canvasHeight + this.height) return;

    this.y += delta * 2.5;
    this.width += 1 * delta;
    this.height += 1 * delta;
    this.anchor.set(0.5, 0.5);
  }

  resetEnemy(lane: RoadLane) {
    this.y = this.params.canvasHeight / 2;
    this.scale.set(0.1, 0.1);
    this.setLane(lane);
  }

  private async setLane(lane: RoadLane) {
    if (lane === 'center') {
      this.texture = await Assets.load(GAME_ASSETS.enemy_center.assetSrc);
      return (this.x = this.params.canvasWidth / 2);
    }

    if (lane === 'left') {
      this.texture = await Assets.load(GAME_ASSETS.enemy_left.assetSrc);
      return (this.x = this.params.canvasWidth / 2 - this.width * 2);
    }

    if (lane === 'right') {
      this.texture = await Assets.load(GAME_ASSETS.enemy_right.assetSrc);
      return (this.x = this.params.canvasWidth / 2 + this.width / 2);
    }
  }
}
