namespace SpriteKind {
    export const flower = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pik.vy == 0) {
        pik.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    egal = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f d d d f . . . 
        . . . . . . . . f d 1 f 4 . . . 
        . . . . . . . . f d d d d 4 . . 
        . f f . . . . . f d d d f . . . 
        . f f f f f f f f d d d f . . . 
        . f d f d d d d f d d d f . . . 
        . f d d f d d f d d d d f . . . 
        . . f d f f f f d d d d f . . . 
        . . . f d d d d d d d d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    egal.setPosition(pik.x + 80, pik.y + 0)
    egal.follow(pik)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let egal: Sprite = null
let Flower_: Sprite = null
let pik: Sprite = null
info.setLife(5)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccc11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc111111ccccccccccccccccccccccccccccccccccccccddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc111111cccccccccccccccccccccccccccccccccccccddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccdddddddddddddccccccccccccccccccccccccc1111111cccccccccccccccccccccccccccccccccccccddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccddddddddddddddccccccccccccccccccccccc11111111cccccccccccccccccccccccccccccccccccccdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccddddddddddddddddccccccccccccccccccccc111111111ccccccccccccccccccccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccfcccccccccccccccc
    cccccccccddddddddddddddddddccccccccccccccccccc111111111cccccccccccccccccccccccccccccccccccdddddddddddddddddddddddcccccccccccccccccccccffccccffffcccffccccccccccc
    ccccccccddddddddddddddddddddccccccccccccccccc1111111111cccccccccccccccccccccccccccccccccccdddddddddddddddddddddddccccccccccccccccccccccfffffccffffffcccccccccccc
    ccccccccddddddddddddddddddddccccccccccccccccc11111111111cccccccccccccccccccccccccccccccccddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccddddddddddddddddddddcccccccccccccccc111111111111ccccccccccccccccccccccccccccccccdddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccddddddddddddddddddddddcccccccccccccccc1111111111111cccccccccccccccccccccccccccccccdddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccddddddddddddddddddddddcccccccccccccccc1111111111111cccccccccccccccccccccccccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccddddddddddddddddddddddcccccccccccccccc1111111111111cccccccccccccccccccccccccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccddddddddddddddddddddddcccccccccccccccc1111111111111cccccccccccccccccccccccccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccdddddddddddddddddddcccccccccccccccccc1111111111111ccccccccccccccccccccccccccccccdddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccdddddddddddddddddddcccccccccccccccccc11111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccdddddddddddddddddddcccccccccccccccccc11111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccc111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccc1111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccc1111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccc1111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccc11111111111111111ccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccc111111bbb11111111cccccccccccccccccccccccccccddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccc11111bbbb11111111ccccccccccccccccccccccccccdddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccc11111bbbb11111111cccccccccccccccccccccccccdddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc111111bbbb11111111ccccccccccccccccccccccccddddddddddcccccccccccccccccccccccccccccccccceeeeeeeeeeccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc111111bbbbb11111111ccccccccccccccccccccccdddddddddddccccccccccccccccccccccccccccccccceeeeeeeeeeeecccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc111111bbbbb11111111ccccccccccccccccccccccddddddddddddcccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccc111111bbbbb11111111cccccccccccccccccccccdddddddddddddcccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeccccccccccccccccccccc
    43ccccccccccccccccccccccccccccccccccccccc11111bbbbbbbb111111ccccccccccccccccccccddddddddddddddccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeecccccccccccccccccccc
    4433ccccccccccccccccccccccccccccccccccccbbbbb1bbbbbbbb111111ccccccccccccccccccccddddddddddddddcccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeecccccccccccccccccccc
    44443cccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb11111ccccccccccccccccccddddddddddddddddcccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeccccccccccccccccccc
    4444443333ccccccccccccccccccccccccccccccbbbbbbbbbeebbbb11111cccccccccccccccccdddddddddddddddddccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccc
    44444444443333ccccccccccccccccccccccccceeebbbbbbbeebbbbbb111cccccccccccccccccdddddddddddddddddccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccc
    44444444444444333cccccccccccccccccccccceeeeeeeeeeeeebbbbb111ccccccccccccccccddddddddddddddddddcccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccc
    44444444444444443333ccccccccccccccccccceeeeeeeeeeeeebbbbbb11ccccccccccccccccddddddddddddddddddcccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccc
    44444444444444444443cccccccccccccccccceeeeeeeeeeeeeeeebbbb11cccccccccccccccbddddddddddddddddddcccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccc
    4444444444444444444433cccccccccccccccceeeeeeeeeeeeeeeeebbbbbbccccccccccccccbdddddddddddddddddddcccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccc
    4444444444444444444443bbccccccccccccceeeeeeeeeeeeeeeeeebbbbbbccccccccccccccbbbdddddddddddddddddcccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccc
    444444444444444444444433bcccccccccccceeeeeeeeeeeeeeeeeeebbbbbccccccccccccccbbbbbdddddddddddddddccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccc
    44444444444444444444444333ccccccccccceeeeeeeeeeeeeeeeeeeeeeecccccccccccccccbbbbbbddddddddddddddccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccc
    444444444444444444444444433cccccccccceeeeeeeeeeeeeeeeeeeeeeeccccccccccccccebbbbbbddddddddddddddcccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc
    444444444444444444444444443ccccccccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceebbbbbbbddddddddddddcccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc
    444444444444f4444f444f44443ccccccccceeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceebbbbbbbbbbddddddddecccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc
    444444444444ffffff44ff444443cccccccceeeeeeeeeeeeeeeeeeeeeeeeecccccccccccceeeebbbbbbbbbbdddddddcecccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccc
    44444444444444444ffff4444443ccccccceeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccceeeeeebbbbbbbbbbddddddceecccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccc
    4444444444444444444444444443bccccceeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccceeeeeeebbbbbbbbbbbbbbbcceeeeecccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccc
    44444444444444444444444444433ccccceeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccceeeeeeebbbbbbbbbbbbbbbccccccceeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccc
    44444444444444444444444444443ccccceeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccceeeeeeebbbbbbbbbbbbbbbcccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    44444444444444444444444444443ccccceeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeeeebbbbbbbbbbbbbbcccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    444444444444444444444444444443ccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeeeeeeeeebbbbbbbbbbbbcccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    4444444444444444444444444444443cceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeeeeeeeeeebbbbbbbbbbbcccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccc
    44444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeebbbbbbbbbbccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccc
    44444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeebbbbbccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccc
    44444444444444444444444444444443eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccc
    ffff444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc
    555f44444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc
    555ff444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccc
    5555f444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccc
    5555f444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc
    5555fff444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc
    555555f44444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
    555555ff4444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc
    5555555ff44444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    5555555ff4444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555f444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555f44444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555f4444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555ff444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f4444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555555f44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555ff4444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555ff444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    55555555ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    5555555ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555ff44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    555555f44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    5555fff4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffff44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    4444e4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
pik = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . f f f f e e f f f f . . . 
    . . f f d d d e e d d d f . . . 
    . . f d d f f e e f f d d f . . 
    . f d d f . f e e f . f d d f . 
    f d d f . . f e e f . . f d d f 
    f d f . . . f e e f . . . f d f 
    . f . . . . f e e f . . . . f . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(pik, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(pik)
pik.ay = 350
if (true) {
	
} else {
	
}
if (info.life() == 0) {
    game.gameOver(false)
}
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    Flower_ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . d d . . . . . . . . . . . . 
        . d d d d . . . . . . . . . . . 
        . d d d d . . . d d . . d d . . 
        e d d d d . . d d d d d d d . e 
        e e d d e e e d d d d d d d d e 
        e e e e e e e d d d d d d d d e 
        . e d d e e e e d d e e d d e . 
        . . e e e e e e e e e e e e . . 
        . . . e e e d e e e e e e . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(Flower_, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    if ((pik.isHittingTile(CollisionDirection.Left) || pik.isHittingTile(CollisionDirection.Right)) && pik.vy < 0) {
        pik.vy = 0
        pik.ay = 0
    } else {
        pik.ay = 350
    }
})
