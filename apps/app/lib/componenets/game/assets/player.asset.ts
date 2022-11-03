import { RoadLane, SpriteParams } from '../logic.game';
import { Texture, Sprite, Assets } from 'pixi.js';
import { GAME_ASSETS } from '../constants/game-assets.constants';

export class Player extends Sprite {
  private lane: RoadLane;
  constructor(texture: Texture, private readonly params: SpriteParams) {
    super(texture);

    this.scale = { x: 0.4, y: 0.4 };
    this.y = params.canvasHeight - this.height - this.height / 4;
    this.x = params.canvasWidth / 2 - this.width / 2;
  }

  update(elapsed: number) {
    this.playDrivingAnimation(elapsed);
  }

  async moveLane(lane: 'left' | 'right') {
    if (lane === 'right')
      await this.setLane(this.lane === 'left' ? 'center' : 'right');
    if (lane === 'left')
      await this.setLane(this.lane === 'right' ? 'center' : 'left');
  }

  private async setLane(lane: RoadLane) {
    this.lane = lane;

    if (lane === 'center') {
      this.texture = await Assets.load(GAME_ASSETS.cer_center.assetSrc);
      return (this.x = this.params.canvasWidth / 2 - this.width / 2);
    }

    if (lane === 'left') {
      this.texture = await Assets.load(GAME_ASSETS.car_right.assetSrc);
      return (this.x = this.params.canvasWidth / 2 - this.width * 1.5);
    }

    if (lane === 'right') {
      this.texture = await Assets.load(GAME_ASSETS.car_left.assetSrc);
      return (this.x = this.params.canvasWidth / 2 + this.width / 2);
    }
  }

  private playDrivingAnimation(elapsed: number) {
    this.y += Math.cos(elapsed / 3) * 0.35;
  }
}
