import yaml from "js-yaml";
import meta from "../../assets/img/map-spritesheet.png.meta?raw";

const cached = {};

export function getSprite(filter = "") {
  const ZOOM = "Z2";
  if (`${ZOOM}-${filter}` in cached) return cached[`${ZOOM}-${filter}`];
  const sprites = yaml.load(meta, "uft8").TextureImporter.spriteSheet.sprites;
  let sprite = sprites.find((sprite) => sprite.name === `${ZOOM}-${filter}`);
  if (!sprite) {
    let _filter = [
      filter.substr(2, 1),
      filter.substr(1, 1),
      filter.substr(0, 1),
      filter.substr(3, 1),
    ].join("");
    sprite = sprites.find((sprite) => sprite.name === `${ZOOM}-${_filter}`);
    if (!sprite) {
      _filter = [
        filter.substr(0, 1),
        filter.substr(3, 1),
        filter.substr(2, 1),
        filter.substr(1, 1),
      ].join("");
      sprite = sprites.find((sprite) => sprite.name === `${ZOOM}-${_filter}`);
      if (!sprite) {
        _filter = [
          filter.substr(2, 1),
          filter.substr(3, 1),
          filter.substr(0, 1),
          filter.substr(1, 1),
        ].join("");
        sprite = sprites.find((sprite) => sprite.name === `${ZOOM}-${_filter}`);
      }
    }
  }
  if (sprite) {
    cached[sprite.name] = [sprite.rect.x * -1, (512 - sprite.rect.y - 36) * -1];
  }
  return sprite
    ? [sprite.rect.x * -1, (512 - sprite.rect.y - 36) * -1]
    : undefined;
}
