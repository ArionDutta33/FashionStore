let t = gsap.timeline()
t.from(".navbar .logo,.navbar .nav-items ", {
    y: -100,
    duration: 2,
    stagger: .2

})
t.from(".left h1,.left p,.left button", {
    x: -800,
    duration: 2,
    stagger: .2
})
t.from(".middle h1", {
    y: 100,
    opacity: 0,
    stagger: .2,
    duration: .9,


})
t.from("#img1 img", {

    x: 800,
    transform: "scale(2)",
    duration: .9
})
t.from("#img2 img", {

    x: 700,
    transform: "scale(2)",
    duration: .9
})