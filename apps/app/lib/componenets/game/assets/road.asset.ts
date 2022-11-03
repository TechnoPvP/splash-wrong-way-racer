import { Sprite, Texture } from 'pixi.js';
import { SpriteParams } from '../logic.game';

export class Road extends Sprite {
  constructor(texture: Texture, private readonly params: SpriteParams) {
    super(texture);

    this.width = this.params.canvasWidth;
    this.height = this.params.canvasHeight / 1.95;
    this.y = this.params.canvasHeight - this.height + 5;
  }
}
