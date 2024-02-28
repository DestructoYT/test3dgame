scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 4 4 4 f f . . . . . 
    . . . . f f f 4 f 4 f . . . . . 
    . . . . f f 4 4 4 f f . . . . . 
    . . . . . f 4 4 f f . . . . . . 
    . . . . . . f f 4 f . f f f . . 
    . . . f f f f f 4 f f f . . . . 
    . . . f . . . f 4 f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f . . . f . . . . . . 
    . . . . f . . . . f . . . . . . 
    . . . . f . . . . f f . . . . . 
    . . . . . . . . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 0)
