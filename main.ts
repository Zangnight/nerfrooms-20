namespace SpriteKind {
    export const book = SpriteKind.create()
    export const Booktwo = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.startCountdown(5)
})
info.onCountdownEnd(function () {
    myEnemy = sprites.create(img`
        ...........ffffffff...........
        ...........fffffffff..........
        ...........ff1fff1ff..........
        ...........fffffffff..........
        ...........fffffffff..........
        ...........fff222fff..........
        ...........fff2.2fff..........
        ...........f.f222fff..........
        ...........fff222fff..........
        ...........fffffffff..........
        ..........f.f.f.f..ff.........
        .........ff.f.fff...ff........
        ........ff....f.f....ff.......
        ........f..fffffffff..........
        .........ff..ff.fff.ffff......
        .......fff.ffffffffffffffff...
        .....fff..fff.f.f.fffffffffff.
        ...fff..fff...fff.....f.fffff.
        ..ff.fffff....fff.....f..fff..
        ..f.fff.ff....f.f.....f..f.f..
        ..fff....f....fff.....f..f.f..
        ...f.....f...ff.ff....f..f.f..
        ...f.......ffff.ffff.....f.f..
        ............ff...f.f.....ff...
        ...........ff....fff.....fff..
        ........fff.f.....f.ff........
        ........fff.f.....f.fff.......
        ........f.f.f.....f..ff.......
        ......ff.....f...f.....fff....
        ffffffffffffffffffffffffffffff
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile6`)
    myEnemy.follow(mySprite, 70)
    Smiler = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . 1 . . . . . . . . . . 1 . . 
        . . . 1 . . . . . . . . 1 1 . . 
        . . . 1 1 . . . . . . 1 . 1 . . 
        . . . 1 . 1 1 1 1 1 1 . . 1 . . 
        . . . 1 . . 1 . . . . . . 1 . . 
        `, SpriteKind.Enemy)
    Smiler.follow(mySprite, 80)
    tiles.placeOnRandomTile(Smiler, assets.tile`myTile11`)
    for (let index = 0; index < 5; index++) {
        Bouncer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 1 7 7 7 1 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 1 1 1 7 7 7 7 . . . 
            . . 7 7 7 1 7 7 7 1 7 7 7 . . . 
            . . 7 7 1 7 7 7 7 7 1 7 7 . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Bouncer.setBounceOnWall(true)
        tiles.placeOnRandomTile(Bouncer, assets.tile`myTile1`)
        Bouncer.vx += 110
        Bouncer.vy += 110
        Bouncer.startEffect(effects.bubbles, 1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile14`)
    myEnemy = sprites.create(img`
        ...........ffffffff2..........
        ...........fffffffff..........
        ...........ff1fff1ff..........
        ...........fffffffff..........
        ...........fffffffff..........
        ...........fff222fff..........
        ...........fff222fff..........
        ...........f2f222fff..........
        ...........fff222fff..........
        ...........fffffffff..........
        ..............f2f.............
        ..............fff.............
        ..............f2f.............
        ...........fffffffff..........
        .........ff222f2fff2ffff......
        .......fff2ffffff.f2f22ffff...
        .....fff22fff.f2f.ffffff2f2ff.
        ...ff222fff...fff.......f2f2f.
        ..ff2fff......fff........ff2..
        ..f2fff.......f2f.............
        ..fff.........fff.............
        .............ff.ff............
        ...........ffff.f2ff..........
        ...........2ff...f2f..........
        ...........ff....fff..........
        ........fff.......f2ff2.......
        ......22fff.........fff.......
        ......22f2f.........2ff2......
        ......ff2.............2fff....
        ffffffffffffffffffffffffffffff
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile3`)
    myEnemy.follow(mySprite, 90)
    Smiler = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . 1 1 . . 
        . . 1 2 1 . . . . . . 1 2 1 . . 
        . . . 1 2 1 1 1 1 1 1 2 1 . . . 
        . . . . 1 2 2 2 2 2 2 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Smiler.follow(mySprite, 90)
    tiles.placeOnRandomTile(Smiler, assets.tile`myTile11`)
    scene.cameraShake(8, 2000)
    for (let index = 0; index < 10; index++) {
        Bouncer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 7 7 2 7 7 7 7 . . . . 
            . . 7 7 2 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 2 7 7 7 1 7 7 7 . . . 
            . . 2 7 7 7 7 7 7 9 2 7 7 . . . 
            . . 7 7 7 7 1 1 2 9 7 7 7 . . . 
            . . 7 7 7 2 7 7 7 1 7 7 7 . . . 
            . . 7 7 1 7 7 7 7 7 1 7 7 . . . 
            . . . 7 7 7 7 7 7 7 2 7 . . . . 
            . . . . 2 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Bouncer.setBounceOnWall(true)
        Bouncer.vy += 120
        Bouncer.vx += 120
        tiles.placeOnRandomTile(Bouncer, assets.tile`myTile1`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.book, function (sprite, otherSprite) {
    game.showLongText("entry number 1- the experiment. we think we've found the key to immortality, ", DialogLayout.Bottom)
    game.showLongText("entry number 2- we think that by injecting this serum called \"Nerfium\" into living beings, They could live forever!... in theory but we can't do tests on ourselves we need to find other beings, other natural beings.. yes this should do fine ", DialogLayout.Bottom)
    game.showLongText("entry number 3- The firsts test didn't go so well because the anatomy of these are unknown we accidentally overdid it the test subject ended up becoming stronger than we could've imained it killed nearly all of us and brutally wounded us I lost my arm as well but worry not we will continue with the experiments with more caution", DialogLayout.Bottom)
    game.showLongText("entry number 4- the test went well, we overdid it but not too much the entity only killed 1 person and then teleported into the depths", DialogLayout.Bottom)
    game.showLongText("entry number 5- I have no choice, drastic measures need to be taken I will use the others as subjects. yes this is the best solution", DialogLayout.Bottom)
    game.showLongText("entry number 6- the others have fled with all of our supplies, I am alone but they forgot one thing, the Nerfium I will inject myself this will be my last entry.", DialogLayout.Bottom)
    mySprite.setPosition(99, 8)
    mySprite4 = sprites.create(img`
        . . . . . f c c c c f . . . . . 
        . . c c f b b 3 3 b b f c c . . 
        . c b 3 3 b b c c b b 3 3 b c . 
        . f 3 c c c b c c b c c c 3 f . 
        f c b b c c b c c b c c b b c f 
        c 3 c c b c c c c c c b c c 3 c 
        c 3 c c c c c c c c c c c c 3 c 
        . f b b c c c c c c c c b b f . 
        . . f b b c 8 9 9 8 c b b f . . 
        . . c c c f 9 2 2 9 f c c c . . 
        . c 3 f f f 9 2 2 9 f f f 3 c . 
        c 3 f f f f 8 9 9 8 f f f f 3 c 
        f 3 c c f f f f f f f f c c 3 f 
        f b 3 c b b f b b f b b c 3 b f 
        . c b b 3 3 b 3 3 b 3 3 b b c . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Booktwo)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booktwo, function (sprite, otherSprite) {
    game.showLongText("Entry number 7- This is my last entry, I have made a horrible mistake, the Nerferium was too strong for my body to comprehend I am starting to melt but in my last I have at least helped two people but they are still violent and stronger than ever. goodbye Nerf", DialogLayout.Bottom)
    mySprite3 = sprites.create(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 4 4 4 2 . . . . . . 
        . . . . . 2 4 f 4 2 . . . . . . 
        . . . . . 2 . 4 4 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 . 2 . 2 . . . . . . 
        . . . . 2 . . 2 . . 2 . . . . . 
        . . . 2 2 . . 2 . . . . . . . . 
        . . 2 . 2 . . 2 . 2 . . . . . . 
        . . . . 2 . . 2 . . . . . . . . 
        . . 2 . . . 2 . 2 . 2 . . . . . 
        . . . . . 2 . . 2 2 . . . . . . 
        . . . . 2 . . . 2 . 2 . . . . . 
        . . . 2 2 . . . . . . 2 . . . . 
        `, SpriteKind.Enemy)
    Smiler.follow(mySprite, 99)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile9`)
    myEnemy.follow(mySprite, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let Bouncer: Sprite = null
let Smiler: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 7 7 7 8 . . . . . . 
    . . . . . 8 7 8 7 8 . . . . . . 
    . . . . . 8 f 7 f 8 . . . . . . 
    . . . . . 8 8 f 8 8 . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . 8 . 8 . 8 . . . . . . 
    . . . . 8 . . 8 . . 8 . . . . . 
    . . . 8 . . . 8 . . . 8 . . . . 
    . . 8 . . . . 8 . . . . 8 . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . 8 . . . 8 . . . . . . 
    . . . . 8 . . . . . 8 . . . . . 
    . . . 8 . . . . . . . 8 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
scene.cameraFollowSprite(mySprite)
mySprite.sayText("Follow the arrows, they will guide you, Don't go right,", 5000, false)
let mySprite2 = sprites.create(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c c c c c c b b f . . 
    . . c c c f f f f f f c c c . . 
    . c 3 f f f f f f f f f f 3 c . 
    c 3 f f f f f f f f f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.book)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile12`)
