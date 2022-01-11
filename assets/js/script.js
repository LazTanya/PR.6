let indexx = 0;

let good_index = 0;

function Slide(index, title, background, link ) {
    this.title = title;
    this.background = background;
    this.link = link;
    this.id = "slide-" + index;
}

const Slider = {
    current: 0,
    slides: [],
    initSlider: function(slides){
        let index = 0;
        for (let slide of slides){
            this.slides.push(new Slide(index, slide.title, slide.background, slide.link));
            index++;
        }
        this.buildSlider();
    },
//     buildSlider: function() {
//         let sliderHTML = "";
//         for(let slide of this.slides) {
// //зверніть увагу на можливість використання ``,яка дозволяє додавати в string змінні ${}
//             sliderHTML +=
//                 `<div id='${slide.id}' class='singleSlide'
//            style='background-image:url(${slide.background});'>
//            <div class='slideOverlay'>
//            <h2>${slide.title}</h2>
//            <a class='link' href='${slide.link}' target='_blank'>Open</a></div></div>`;
//         }
//
//         document.getElementById("slider").innerHTML = sliderHTML;
//         document.getElementById("slide-" + this.current).style.left = 0;
//     },

    buildSlider: function() {
        let sliderHTML = "";

        for(let slide of this.slides) {

//зверніть увагу на можливість використання ``,яка дозволяє додавати в string змінні ${}
            sliderHTML +=
                `<div id='${slide.id}' class='singleSlide'
           style='background-image:url(${slide.background});'>
           <div class='slideOverlay'>
           <h2>${slide.title}</h2>
           <a class='link' href='${slide.link}' target='_blank'>Open</a></div></div>`;

            let btn = document.createElement('button');
            btn.className = 'buttons1';
            btn.id = 'button-' + slide.id;
            btn.innerHTML = "Slide " + good_index;
            
            var myDiv = document.getElementById("rrr");

            document.getElementById("slider").appendChild(btn);
            console.log("Classname: " + btn.className);
            console.log("ID: " + btn.id);
            console.log("Inner HTML: " + btn.innerHTML);
            console.log(typeof (myDiv));
            console.log("aaaaa: " + slide.id.slice(-1));
            btn.addEventListener("click", ()=> {
                    console.log("good index" + good_index)
                    console.log("index" + index)
                    console.log("next " + this.next)
                    console.log("this.current" + this.current)
                    console.log("slice " + slide.id.slice(-1))
                    console.log(indexx !== slide.id.slice(-1))
                    console.log("start");
                    let index2 = slide.id.slice(-1);
                    console.log(indexx + "|" + index2)
                    console.log(typeof (indexx) + typeof (index2))

                    while (indexx != index2) {
                        this.nextSlide();
                    }
                }
            );
            myDiv.appendChild(btn);
            good_index++;
        }

        document.getElementById("slider").innerHTML = sliderHTML;
        document.getElementById("slide-" + this.current).style.left = 0;
    },
    prevSlide: function() {
        console.log(indexx);
        let next;
        if (this.current === 0 ) {
            indexx = this.slides.length - 1;
            next = this.slides.length - 1;
        } else {
            indexx--;
            next = this.current - 1;
        }
        document.getElementById("slide-" + next).style.left = "-100%";
        document.getElementById("slide-" + this.current).style.left = 0;

        document.getElementById("slide-" + next).setAttribute("class", "singleSlide slideInLeft");
        document.getElementById("slide-" + this.current).setAttribute("class", "singleSlide slideOutRight");

        this.current = next;
    },
    nextSlide: function(){
        console.log(indexx);
        let next;
        if (this.current === (this.slides.length - 1) ) {
            indexx = 0;
            next = 0;
        } else {
            indexx++;
            next = this.current + 1;
        }

        document.getElementById("slide-" + next).style.left = "100%";
        document.getElementById("slide-" + this.current).style.left = 0;

        document.getElementById("slide-" + next).setAttribute("class", "singleSlide slideInRight");
        document.getElementById("slide-" + this.current).setAttribute("class", "singleSlide slideOutLeft");
        this.current = next;
    }
}

