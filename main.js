window.onload = function () {


    //retrieve character one svg from the dom
    let char_01 = document.getElementById('character_01').contentDocument;

    //declare character one variables
    //full mouth (lips and fangs)
    let char01_mouth = char_01.getElementById('Mouth');
    //character one lips
    let char01_lips = char_01.getElementById('mouth-2');
    //character one fangs
    let char01_FangL = char_01.getElementById('FangL');
    let char01_FangR = char_01.getElementById('FangR');

    //eye, pupil and brow
    let char01_EyeR_Full = char_01.getElementById('EyeR');
    let char01_EyeL_Full = char_01.getElementById('EyeL');
    //pupils
    let char01_PupilL = char_01.getElementById('PupilL');
    let char01_PupilR = char_01.getElementById('PupilR');

    let char01_eyeLC = char_01.getElementById('EyeL-2');
    let char01_eyeRC = char_01.getElementById('EyeR-2');
    //brows
    let char01_BrowL = char_01.getElementById('BrowL');
    let char01_BrowR = char_01.getElementById('BrowR');


    //set transform origin for items
    TweenMax.set(char01_PupilL, {
        transformOrigin: "center center"
    })

    TweenMax.set(char01_PupilR, {
        transformOrigin: "center center"
    })

    TweenMax.set(char01_BrowR, {
        transformOrigin: "center center"
    })
    TweenMax.set(char01_BrowL, {
        transformOrigin: "center center"
    })

    TweenMax.set(char01_mouth, {
        transformOrigin: "center center"
    })

    //neutral button
    document.getElementById('neutral1').onclick = function () {

        //full eye animation
        TweenMax.to(char01_EyeR_Full, 2, {
            attr: {
                transform: "translate(0, 0)",
                ease: Power1.easeOut
            }
        })
        TweenMax.to(char01_EyeL_Full, 2, {
            attr: {
                transform: "translate(0, 0)",
                ease: Power1.easeOut
            }
        })

        //cornea animation
        TweenMax.to(char01_eyeLC, 2, {
            stroke: "black",
            fill: "white",
            ease: Power1.easeOut
        })
        TweenMax.to(char01_eyeRC, 2, {
            stroke: "black",
            fill: "white",
            ease: Power1.easeOut
        })

        //pupil animation
        TweenMax.to(char01_PupilL, 2, {
            rotation: 0
        })
        TweenMax.to(char01_PupilR, 2, {
            rotation: 0
        })

        //brow animation
        TweenMax.to(char01_BrowL, 2, {
            rotation: 0
        })
        TweenMax.to(char01_BrowR, 2, {
            rotation: 0
        })

        //full mouth animation
        TweenMax.to(char01_mouth, 2, {
            scaleY: 1,
            y: 0,
        })
        
        //lips animation
        TweenMax.to(char01_lips, 2, {
            scaleY: 1,
            y: 0
        })

        //fangs animation
        TweenMax.to(char01_FangL, 2, {
            y: 0,
            rotation: 0
        })
        TweenMax.to(char01_FangR, 2, {
            y: 0
        })


    }

    //happy button
    document.getElementById('happy1').onclick = function () {

        //entire eye animation
        TweenMax.to(char01_EyeR_Full, 3, {
            attr: {
                transform: "translate(-10, 0)",
                ease: Power1.easeOut
            }
        })
        TweenMax.to(char01_EyeL_Full, 3, {
            attr: {
                transform: "translate(10, 0)",
                ease: Power1.easeOut
            }
        })

        //pupil animation
        TweenMax.to(char01_PupilL, 3, {
            rotation: 45
        })
        TweenMax.to(char01_PupilR, 3, {
            rotation: -45
        })

        //brow animation
        TweenMax.to(char01_BrowL, 3, {
            rotation: -15,
        })
        TweenMax.to(char01_BrowR, 3, {
            rotation: 15
        })

        //full mouth animation
        TweenMax.to(char01_mouth, 3, {
            scaleY: 1,
        })
        //lips animation
        TweenMax.to(char01_lips, 3, {
            scaleY: 2,
            y: -15
        })
        //fang animation
        TweenMax.to(char01_FangL, 3, {
            y: -12 ,
            rotation: 7
        })
        TweenMax.to(char01_FangR, 3, {
            y: -7
        })

    }

    //sad button character 1
    document.getElementById('sad1').onclick = function(){

        //full mouth animation
        TweenMax.to(char01_mouth, 3, {
            scaleY: -1,
            y: -20
        })

        //eye cornea animation
        TweenMax.to(char01_eyeLC, 3, {
            stroke: "blue",
            fill: "lightcyan"
        })
        TweenMax.to(char01_eyeRC, 3, {
            stroke: "blue",
            fill: "lightcyan"
        })

        //entire eye animation
        TweenMax.to(char01_EyeR_Full, 3, {
            attr: {
                transform: "translate(-10, 0)",
                ease: Power1.easeOut
            }
        })
        TweenMax.to(char01_EyeL_Full, 3, {
            attr: {
                transform: "translate(10, 0)",
                ease: Power1.easeOut
            }
        })

        //pupil animation
            TweenMax.to(char01_PupilL, 3, {
                rotation: 45
            })
            TweenMax.to(char01_PupilR, 3, {
                rotation: -45
            })
    
            //brow animation
            TweenMax.to(char01_BrowL, 3, {
                rotation: -15,
            })
            TweenMax.to(char01_BrowR, 3, {
                rotation: 15
            })


    }
    //character 1 angry button
    document.getElementById('angry1').onclick = function(){
    
        //pupil animation
        TweenMax.to(char01_PupilL, 2, {
            rotation: 135,
            ease: Bounce.easeOut
        })
        TweenMax.to(char01_PupilR, 2, {
            rotation: -135,
            ease: Bounce.easeOut
        })

        //lip animation
        TweenMax.to(char01_lips, 2, {
            scaleY: 0.2,
            y: -20,
            ease: Bounce.easeOut
        })

        //left fang animation
        TweenMax.to(char01_FangL, 2, {
            y: -23,
            rotation: -10,
            ease: Bounce.easeOut
            
        })
        //right fang animation
        TweenMax.to(char01_FangR, 2, {
            y: -27,
            ease: Bounce.easeOut
        })

        //left brow animaton
        TweenMax.to(char01_BrowL, 2, {
            rotation: 15,
            ease: Bounce.easeOut
        })
        //right brow animation
        TweenMax.to(char01_BrowR, 2, {
            rotation: -15,
            ease: Bounce.easeOut
        })

        //entire eye animation
        TweenMax.to(char01_EyeR_Full, 2, {
            attr: {
                transform: "translate(-10, 0)",
                ease: Bounce.easeOut
            }
        })
        TweenMax.to(char01_EyeL_Full, 2, {
            attr: {
                transform: "translate(10, 0)",
                ease: Bounce.easeOut
            }
        })
        
    
    }

    //retrieve character 2 from the dom
    let char_02 = document.getElementById('character_02').contentDocument;

    //declare character two variables
    //tie
    let char02_tie = char_02.getElementById('Tie');
    //eyes, pupil and brow
    let char02_EyeR_Full = char_02.getElementById('EyeR');
    let char02_EyeL_Full = char_02.getElementById('EyeL');
    //pupils
    let char02_PupilL = char_02.getElementById('PupilL');
    let char02_PupilR = char_02.getElementById('PupilR');
    //brows
    let char02_BrowR = char_02.getElementById('BrowR');
    let char02_BrowL = char_02.getElementById('BrowL');
    //nose
    let char02_nose = char_02.getElementById('Nose');
    //mouth
    let char02_mouth = char_02.getElementById('Mouth');

    //set the transform origin of various items
    TweenMax.set(char02_PupilL, {
        transformOrigin: "center center"
    })

    TweenMax.set(char02_PupilR, {
        transformOrigin: "center center"
    })
    TweenMax.set(char02_tie, {
        transformOrigin: "center center"
    })

    TweenMax.set(char02_BrowR, {
        transformOrigin: "center center"
    })
    TweenMax.set(char02_BrowL, {
        transformOrigin: "center center"
    })

    TweenMax.set(char02_nose, {
        transformOrigin: "center center"
    })

    //character 2 neutral button
    document.getElementById('neutral2').onclick = function(){

        //character 2 full eye animation
        TweenMax.to(char02_EyeL_Full, 5, {
            attr: {
                transform: "translate(0, 0)",
                ease: Power1.easeOut
            },
            fill: "white"
        })
        TweenMax.to(char02_EyeR_Full, 5, {
            attr: {
                transform: "translate(0, 0)",
                ease: Power1.easeOut
            },
            fill: "white"
        })

        //character 2 pupil animation
        TweenMax.to(char02_PupilL, 5, {
            rotation: 0
        })
        TweenMax.to(char02_PupilR, 5, {
            rotation: 0
        })

        //character 2 brow animation
        TweenMax.to(char02_BrowR, 5, {
            attr: {
                transform: "translate(0, 0)"
            }
        })
        TweenMax.to(char02_BrowL, 5, {
            attr: {
            transform: "translate(0, 0)"
        }
        })

        //character 2 mouth animation
        TweenMax.to(char02_mouth, 2, {
            scaleY: 1
        })

        //character 2 tie animation
        TweenMax.to(char02_tie, 0.5, {
            rotation: 0,
            repeat: 2
        })
        //character 2 nose animation
        TweenMax.to(char02_nose, 0.5, {
            fill: "blue",
            rotation: 0
        })

    }

    //character 2 happy button
    document.getElementById('happy2').onclick = function(){

        //character 2 full eye animaton (brow, pulil)
        TweenMax.to(char02_EyeL_Full, 5, {
            attr: {
                transform: "translate(10, 10)",
                ease: Power1.easeOut
            }
        })
        TweenMax.to(char02_EyeR_Full, 5, {
            attr: {
                transform: "translate(-10, 10)",
                ease: Power1.easeOut
            }
        })

        //character 2 pupil animation
        TweenMax.to(char02_PupilL, 5, {
            rotation: 45
        })
        TweenMax.to(char02_PupilR, 5, {
            rotation: -45
        })

        //character 2 brow animation
        TweenMax.to(char02_BrowR, 5, {
            attr: {
                transform: "translate(0, -5)"
            },
            rotation: -15
        })
        TweenMax.to(char02_BrowL, 5, {
            attr: {
            transform: "translate(0, -5)",
        },
        rotation: 15
        })

        //character 2 tie animation
        TweenMax.to(char02_tie, 0.5, {
            rotation: 180,
            repeat: 2
        })

        //character 2 mouth animation
        TweenMax.to(char02_mouth, 2, {
            scaleY: 2
        })

        //character 2 nose animation
        TweenMax.to(char02_nose, 0.5, {
            fill: "gold",
            rotation: 360
        })

    }

    //character 2 sad button
    document.getElementById('sad2').onclick = function(){

        //character 2 move entire eye (brow, pupil)
        TweenMax.to(char02_EyeL_Full, 5, {
            attr: {
                transform: "translate(-10, 20)",
                ease: Power1.easeOut
            }
        })
        TweenMax.to(char02_EyeR_Full, 5, {
            attr: {
                transform: "translate(10, 20)",
                ease: Power1.easeOut
            }
        })

        //character 2 mouth animation
        TweenMax.to(char02_mouth, 2, {
            scaleY: -1
        })

//character 2 pupil animation
        TweenMax.to(char02_PupilL, 5, {
            rotation: -45,
            fill: "lightcyan"
        })
        TweenMax.to(char02_PupilR, 5, {
            rotation: 45,
            fill: "lightcyan"
        })

        //character 2 nose animation
        TweenMax.to(char02_nose, 5, {
            fill: "gold",
            rotation: 180
        })
    }

    //character 2 angry button
    document.getElementById('angry2').onclick = function(){

        //character 2 pupil animation
        TweenMax.to(char02_PupilL, 5, {
            rotation: -135
        })
        TweenMax.to(char02_PupilR, 5, {
            rotation: 135
        })

        //character 2 brow animation
        TweenMax.to(char02_BrowL, 5, {
        rotation: 15
        })
        TweenMax.to(char02_BrowR, 5, {
        rotation: -15
        })
    }


}