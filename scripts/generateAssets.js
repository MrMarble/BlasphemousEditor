import yaml from "js-yaml";
import { readFileSync } from "fs";
import { resolve } from "path";
import sharp from "sharp";

const mapSprites = yaml.load(
  readFileSync(resolve("./assets/img/map-spritesheet.png.meta")),
  "utf8"
);
const spriteMap = sharp(resolve("./assets/img/map-spritesheet.png"), {
  failOnError: false,
});
spriteMap
  .metadata()
  .then((metadata) => {
    mapSprites.TextureImporter.spriteSheet.sprites.forEach((sprite) => {
      try {
        spriteMap
          .extract({
            height: sprite.rect.height,
            width: sprite.rect.width,
            top: metadata.height - sprite.rect.y - sprite.rect.height,
            left: sprite.rect.x,
          })
          .toFile(resolve(`./assets/img/${sprite.name}.png`));
      } catch (error) {
        console.error(error);
      }
    });
  })
  .catch((r) => console.error(r));
