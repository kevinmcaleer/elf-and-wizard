scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    game.gameOver(true)
})
scene.setBackgroundColor(0)
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(assets.image`Elf`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite, assets.tile`start`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(1000, function () {
    mySprite2.setVelocity(randint(-50, 50), randint(-50, 50))
})
