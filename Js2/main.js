const dots = document.querySelectorAll(".dot-container button");

licznik = 1

const element = document.getElementById('slides')
function next(){
    licznik++
    if (licznik > 6) licznik = 1
    dot(licznik)
    indicator(licznik)
    //overcomplicated code który zrobiłem wcześniej :((
    // let currentTranslateX = getComputedStyle(element).transform.split(",")[4];
    // document.documentElement.style.setProperty('--my-start-width', currentTranslateX+"px");
    // var translate = currentTranslateX -600
    // document.documentElement.style.setProperty('--my-end-width', translate+"px");
    // if (translate < -3000){
    //     document.documentElement.style.setProperty('--my-end-width', "0px");
    //     translate = 0;
    // }
    // element.classList.remove('slides1')
    // void element.offsetWidth;
    // element.classList.add('slides1');
    // element.style.transform = "translateX("+translate+"px)";
}
function prev(){

    licznik--
    if (licznik < 1) licznik = 6
    dot(licznik)

    //overcomplicated code który zrobiłem wcześniej :((
    // let currentTranslateX = getComputedStyle(element).transform.split(",")[4];
    // document.documentElement.style.setProperty('--my-start-width', currentTranslateX+"px");
    // var translate = currentTranslateX - 600 + 1200
    // document.documentElement.style.setProperty('--my-end-width', translate+"px");
    // if (translate > 0){
    //     document.documentElement.style.setProperty('--my-end-width', "-3000px");
    //     translate = -3000;
    // }
    // element.classList.remove('slides1')
    // void element.offsetWidth;
    // element.classList.add('slides1');
    // element.style.transform = "translateX("+translate+"px)";
}
function dot(x){
    switch (x){
        case 1:
            slide(0)
            licznik = 1
            indicator(licznik)
        break
        case 2:
            slide(-600)
            licznik = 2
            indicator(licznik)
        break
        case 3:
            slide(-1200)
            licznik = 3
            indicator(licznik)
        break
        case 4:
            slide(-1800)
            licznik = 4
            indicator(licznik)
        break
        case 5:
            slide(-2400)
            licznik = 5
            indicator(licznik)
        break
        case 6:
            slide(-3000)
            licznik = 6
            indicator(licznik)
        break
    }
        

}
function slide(end){
    let currentTranslateX = getComputedStyle(element).transform.split(",")[4];
    document.documentElement.style.setProperty('--my-end-width', end+"px");
    element.style.transform = "translateX("+end+"px)";
    document.documentElement.style.setProperty('--my-start-width', currentTranslateX+"px");
    element.classList.remove('slides1')
    void element.offsetWidth;
    element.classList.add('slides1');
}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "rgb(207, 0, 207)";
}