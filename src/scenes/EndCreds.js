import Phaser from "phaser";

let meItem;
let lText;
let krisText;
let melissaText;
let laurenText;
let music;

export default class EndCreds extends Phaser.Scene {

  constructor() {
    super("EndCreds");

  }

  preload() {
    this.load.tilemapTiledJSON(
      "credits",
      "../public/assets/tilemaps/credits.json"
    );
    this.load.image(
      "urban-landscape-background-Preview",
      "../public/assets/tilesets/city.png"
    );
    this.load.image(
      "Nature Background Raw",
      "../public/assets/tilesets/trees.png"
    );
    this.load.image("finalDay", "../public/assets/tilesets/finalDay.png");
    this.load.image("clouds", "../public/assets/tilesets/clouds.png");
    this.load.image(
      "TeamCherry",
      "../public/assets/images/pridleflags/teamcherry.png"
    );

    this.load.audio("endMusic", ["../public/assets/audio/loading.wav"]);

    this.load.image("katherine", "../public/assets/sprites/katherine.png");
    this.load.image("mary", "../public/assets/sprites/marySprite.png");
    this.load.image("rosalind", "../public/assets/sprites/rosalind.png");
    this.load.image("lynn", "../public/assets/sprites/LYNN.png");
  }

  create() {
    music = this.sound.add("endMusic", { loop: true });
    music.play();
    const info = document.getElementById("rules");
    info.classList.add("hidden");

    const map = this.make.tilemap({
      key: "credits",
      tileWidth: 32,
      tileHeight: 32,
    });

    const cityTiles = map.addTilesetImage(
      "urban-landscape-background-Preview",
      "urban-landscape-background-Preview",
      32,
      32
    );
    const treeTiles = map.addTilesetImage(
      "Nature Background Raw",
      "Nature Background Raw",
      32,
      32
    );

    const triangleTiles = map.addTilesetImage("finalDay", "finalDay", 32, 32);
    const cloudTiles = map.addTilesetImage("clouds", "clouds", 32, 32);
    
    let floorLayer = map.createLayer("Background", [
      cityTiles,
      treeTiles,
      triangleTiles,
      cloudTiles,
    ]);

    let lilSprites = map.getObjectLayer("Spritey")["objects"];
    meItem = this.physics.add.staticGroup();

    lilSprites.forEach((object) => {
      let obj = meItem.create(object.x, object.y, object.name);
      obj.setScale(object.width / object.width, object.height / object.height);
      obj.setOrigin(0);
      obj.body.width = object.width;
      obj.body.height = object.height;
    });

    lText = this.add.text(6, 25, `L Phansalkar does stuff`, {
      backgroundColor: "black",
      fontSize: "15px",
      fill: "white",
    });

    krisText = this.add.text(50, 25, `Kris did stuff here`, {
      backgroundColor: "black",
      fontSize: "15px",
      fill: "white",
    });

    melissaText = this.add.text(6, 50, `blah blah`, {
      backgroundColor: "black",
      fontSize: "15px",
      fill: "white",
    });

    laurenText = this.add.text(50, 50, `blah blah`, {
      backgroundColor: "black",
      fontSize: "15px",
      fill: "white",
    });

    lText.setScrollFactor(0);
    krisText.setScrollFactor(0);
    melissaText.setScrollFactor(0);
    laurenText.setScrollFactor(0);
  }

  update() {}
}
