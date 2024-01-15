barba.init({
    views: [{
        namespace: 'home',

        afterEnter() {

        }
    }],

    transitions: [{
        name: 'opacity-transition',
        sync:true,
        leave(data) {
            return gsap.timeline().to(data.current.container, {
                opacity: 0
            })
                .fromTo('.box',{
                    x: '100%'},{
                    x: '-100%'
                },0)
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }
    }]
})