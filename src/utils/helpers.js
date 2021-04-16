import yaml from "js-yaml";
import { useMemo } from "react";
import meta from "../../assets/img/map-spritesheet.png.meta?raw";

const cached = {};

function loadSPrites() {
  return useMemo(
    () => yaml.load(meta, "uft8").TextureImporter.spriteSheet.sprites
  );
}

export function getMapSprite(filter = "", zoom = "Z2") {
  if (`${zoom}-${filter}` in cached) {
    return cached[`${zoom}-${filter}`];
  }
  const sprites = loadSPrites();
  let sprite = sprites.find((sprite) => sprite.name === `${zoom}-${filter}`);
  if (!sprite) {
    let _filter = [
      filter.substr(2, 1),
      filter.substr(1, 1),
      filter.substr(0, 1),
      filter.substr(3, 1),
    ].join("");
    sprite = sprites.find((sprite) => sprite.name === `${zoom}-${_filter}`);
    if (!sprite) {
      _filter = [
        filter.substr(0, 1),
        filter.substr(3, 1),
        filter.substr(2, 1),
        filter.substr(1, 1),
      ].join("");
      sprite = sprites.find((sprite) => sprite.name === `${zoom}-${_filter}`);
      if (!sprite) {
        _filter = [
          filter.substr(2, 1),
          filter.substr(3, 1),
          filter.substr(0, 1),
          filter.substr(1, 1),
        ].join("");
        sprite = sprites.find((sprite) => sprite.name === `${zoom}-${_filter}`);
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

export function getIconSprite(filter) {
  if (filter in cached) {
    return cached[filter];
  }

  const sprites = loadSPrites();
  let sprite;
  switch (filter) {
    case "Teleport":
      sprite = sprites.find((sprite) => sprite.name === "map-teleport");
      break;
    case "Soledad":
      sprite = sprites.find((sprite) => sprite.name === "map-soledad");
      break;
    case "MeaCulpa":
      sprite = sprites.find((sprite) => sprite.name === "map-mea-culpa-altar");
      break;
    case "PrieDieu":
      sprite = sprites.find((sprite) => sprite.name === "map-priedieu");
      break;
    case "Nacimiento":
      sprite = sprites.find((sprite) => sprite.name === "map-nacimiento");
      break;
    case "Confessor":
      sprite = sprites.find((sprite) => sprite.name === "map-confessor");
      break;
    case "FuenteFlask":
      sprite = sprites.find((sprite) => sprite.name === "map-flask");
      break;
    case "MiriamPortal":
      sprite = sprites.find((sprite) => sprite.name === "map-miriam");
      break;
    default:
      sprite = { rect: { x: 0, y: 0 } };
      break;
  }
  return [sprite.rect.x * -1, (512 - sprite.rect.y - 10) * -1];
}
