import { Sprite, Texture } from 'pixi.js';
import { SpriteParams } from '../logic.game';

export class Sky extends Sprite {
  constructor(texture: Texture, private readonly params: SpriteParams) {
    super(texture);

    this.scale = { x: 0.00026 * this.params.canvasWidth, y: 0.20 };
  }
}
