basic.forever(function () {
    images.createImage(`
        . # # # .
        # . . . #
        . . # . .
        # . . . #
        . # # # .
        `).showImage(0)
    images.createImage(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        `).showImage(0)
    images.createImage(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `).showImage(0)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 255, 5, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 255, 5, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    images.createImage(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `).showImage(0)
    images.createImage(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        `).showImage(0)
    images.createImage(`
        . # # # .
        # . . . #
        . . # . .
        # . . . #
        . # # # .
        `).showImage(0)
})
