//scroll
 window.onscroll = function() {scrollFunction()};
 
         function scrollFunction() {
             // 100 = The point you would like to fade the nav in.
 
             //console.log(document.documentElement.scrollTop);
             try{
             if ((document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100)) {                
                 var element = document.getElementById("transitionEl");
                 element.classList.add("show");
                
 
             } else {
                 var element = document.getElementById("transitionEl");
                 element.classList.remove("show");                
             };
         }catch(e){}
         };
 

//brojac start//
    countersAnimation();

    function countersAnimation() {
        var elements = document.querySelectorAll("#brojaci .block-25 .block-100");
        console.log(elements.length);

        for (var i = 0; i < elements.length; i++) {
            playCounters(elements[i], elements[i].innerHTML);
        }

        function playCounters(element, counterEnd) {
            var counter = 0;

            var interval = setInterval(function () {

                if (counter == counterEnd) {
                    clearInterval(interval);
                } else {
                    counter++;
                    element.innerHTML = counter;
                }

            }, 1)

        }

    }
//brojac end//
 //mapa
 myMap();
 function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

//showSelection(".web");
//buton click
function showSelection(selector){   
    //console.log(selector);
    if (selector == '.all'){
        console.log('.all');
        selector = '.portfolio-box';
    }

    var elements = document.querySelectorAll(selector);
    //console.log(elements.length);

    var allElements = document.querySelectorAll('.portfolio-box');
    //console.log(allElements.length);
    for (var i = 0; i < allElements.length; i++) {
        hideElement(allElements[i]);
    }    

    for (var i = 0; i < elements.length; i++) {
        showElement(elements[i]);
    }

    function hideElement(selElement){
        selElement.style.display = 'none';
    }

    function showElement(selElement){       
        selElement.style.display = 'block';
    }

} 

