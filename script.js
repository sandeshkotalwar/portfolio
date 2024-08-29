document.addEventListener('DOMContentLoaded',
    function(){
        const navlinks = document.querySelectorAll('.nav-links');
        navlinks.forEach(link =>{
            link.addEventListener('click',function(){
                navlinks.forEach( link => link.classList.remove('active'));
                
                this.classList.add('active');
            });
        });


    }
)

const services=["FRONTEND DEVELOPER","WEB DESIGNER","UI EXPERT"];

let index=0;

const service =document.getElementById('service');

setInterval(()=>{
    index=(index+1)%services.length;
    service.innerHTML=services[index];
},3500);


let mm = gsap.matchMedia();

mm.add("(min-width:800px)",()=>{
    gsap.to("#page1 #info",{
        scrollTrigger:{
            trigger:"#page1 #info",
            markers:false,
            scrub:true,
            start:"top top",
            end:"bottom top"
        },
        y:"-2000",
        opacity:"0",
    })
    
    gsap.to("#page1 #shape",{
        scrollTrigger:{
            trigger:"#page1 #info",
            markers:false,
            scrub:true,
            start:"top top",
            end:"bottom top"
        },
        scale:"3",
        y:"10",
        opacity:0.3,
    })
    
    gsap.to("#page1 #heading",{
        scrollTrigger:{
            trigger:"#page1 #heading",
            scroller:"body",
            markers:false,
            scrub:true,
            start:"top top",
            end:"bottom top"
        },
        opacity:0,
    })
    
    gsap.from("#page2 .cards",{
        scrollTrigger:{
            trigger:"#page2 .cards",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0.5,
        scale:2,
        y:100,
    })
    
    gsap.from("#page2 #p2-shape",{
        scrollTrigger:{
            trigger:"#page2 #shape2",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0,
        scale:0.3,
        y:"-100",
    })
    
    gsap.from("#page3 .stack-img",{
        scrollTrigger:{
            trigger:"#page3 .stack-img",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0,
        scale:0,
        y:"100",
        stagger:0.1,
    })
    
    gsap.from("#page3 #page3-bgimg1",{
        scrollTrigger:{
            trigger:"#page3 #page3-bgimg1",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        x:"-4000",
        
    })
    
    gsap.from("#page3 #page3-bgimg2",{
        scrollTrigger:{
            trigger:"#page3 #page3-bgimg2",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        x:"4000",
        
    })

})
/*gsap.to("#page1 #info",{
    scrollTrigger:{
        trigger:"#page1 #info",
        markers:false,
        scrub:true,
        start:"top top",
        end:"bottom top"
    },
    y:"-2000",
    opacity:"0",
})

gsap.to("#page1 #shape",{
    scrollTrigger:{
        trigger:"#page1 #info",
        markers:false,
        scrub:true,
        start:"top top",
        end:"bottom top"
    },
    scale:"3",
    y:"10",
    opacity:0.3,
})

gsap.to("#page1 #heading",{
    scrollTrigger:{
        trigger:"#page1 #heading",
        scroller:"body",
        markers:false,
        scrub:true,
        start:"top top",
        end:"bottom top"
    },
    opacity:0,
})

gsap.from("#page2 .cards",{
    scrollTrigger:{
        trigger:"#page2 .cards",
        scroller:"body",
        markers:false,
        scrub:true,
    },
    opacity:0.5,
    scale:2,
    y:100,
})

gsap.from("#page2 #p2-shape",{
    scrollTrigger:{
        trigger:"#page2 #shape2",
        scroller:"body",
        markers:false,
        scrub:true,
    },
    opacity:0,
    scale:0.3,
    y:"-100",
})

gsap.from("#page3 .stack-img",{
    scrollTrigger:{
        trigger:"#page3 .stack-img",
        scroller:"body",
        markers:false,
        scrub:true,
    },
    opacity:0,
    scale:0,
    y:"100",
    stagger:0.1,
})

gsap.from("#page3 #page3-bgimg1",{
    scrollTrigger:{
        trigger:"#page3 #page3-bgimg1",
        scroller:"body",
        markers:false,
        scrub:true,
    },
    x:"-4000",
    
})

gsap.from("#page3 #page3-bgimg2",{
    scrollTrigger:{
        trigger:"#page3 #page3-bgimg2",
        scroller:"body",
        markers:false,
        scrub:true,
    },
    x:"4000",
    
})*/

mm.add("(max-width:799px)",()=>{
    gsap.to("#page1 #info",{
        scrollTrigger:{
            trigger:"#page1 #info",
            markers:false,
            scrub:true,
            markers:true,
            start:"top top",
            end:"bottom top"
        },
        y:"-2000",
        opacity:"0",
    })
    
   /* gsap.to("#page1 #shape",{
        scrollTrigger:{
            trigger:"#page1 #info",
            markers:false,
            scrub:true,
            start:"top top",
            end:"bottom top"
        },
        scale:"3",
        y:"10",
        opacity:0.3,
    })
    
    gsap.to("#page1 #heading",{
        scrollTrigger:{
            trigger:"#page1 #heading",
            scroller:"body",
            markers:false,
            scrub:true,
            start:"top top",
            end:"bottom top"
        },
        opacity:0,
    })
    
    gsap.from("#page2 .cards",{
        scrollTrigger:{
            trigger:"#page2 .cards",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0.5,
        scale:2,
        y:100,
    })
    
    gsap.from("#page2 #p2-shape",{
        scrollTrigger:{
            trigger:"#page2 #shape2",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0,
        scale:0.3,
        y:"-100",
    })
    
    gsap.from("#page3 .stack-img",{
        scrollTrigger:{
            trigger:"#page3 .stack-img",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        opacity:0,
        scale:0,
        y:"100",
        stagger:0.1,
    })
    
    gsap.from("#page3 #page3-bgimg1",{
        scrollTrigger:{
            trigger:"#page3 #page3-bgimg1",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        x:"-4000",
        
    })
    
    gsap.from("#page3 #page3-bgimg2",{
        scrollTrigger:{
            trigger:"#page3 #page3-bgimg2",
            scroller:"body",
            markers:false,
            scrub:true,
        },
        x:"4000",
        
    })*/

})

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('card').style.backgroundColor="black";   
}








    
