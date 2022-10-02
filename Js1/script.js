var counter = 3
function calculate() {
    var a = parseInt(document.querySelector("#field-1-1").value)
    var b = parseInt(document.querySelector("#field-2-1").value)
    var c = parseInt(document.querySelector("#field-3-1").value)
    var d = parseInt(document.querySelector("#field-4-1").value)
    var sum = a + b + c + d 
    var min = Math.min(a,b,c,d) 
    var max = Math.max(a,b,c,d)
    var avg = sum / 4
    document.querySelector("#output").innerHTML = "Suma: " + sum + "<br>" +"Najmniejsza wartość:" + min + "<br>" + "Największa wartość: " + max + "<br>" + "Średnia" + avg
    
}
function calculate2() {
    var a = parseInt(document.querySelector("#field-1-2").value)
    var b = parseInt(document.querySelector("#field-2-2").value)
    var c = parseInt(document.querySelector("#field-3-2").value)
    var d = parseInt(document.querySelector("#field-4-2").value)
    var sum = a + b + c + d 
    var min = Math.min(a,b,c,d) 
    var max = Math.max(a,b,c,d)
    var avg = sum / 4
    document.querySelector("#output2").innerHTML = "Suma: " + sum + "<br>" +"Najmniejsza wartość:" + min + "<br>" + "Największa wartość: " + max + "<br>" + "Średnia" + avg
    
}


function addField(){
    counter++
    const content = document.querySelector("#normal").innerHTML
    document.querySelector("#normal").innerHTML = content + "<input type='text' id='field-3-"+counter+"' onchange='calculate2()'><br>"

}
function calculate3(){
    const fields = document.querySelectorAll("div:nth-child(1)").value
    console.log(fields)
}