var details = {
        "products": [{
                "title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
                "description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
                "image": "1.jpeg",
                "quantity":"10"
            },
            {
                "title": "Mi A2 4GB + 64GB | 6GB + 128GB",
                "description": "15.2cm (5.99) large display",
                "image": "2.jpeg",
                "quantity":"20"
            },
            {
                "title": "Apple iphone 32GB",
                "description": "11.4 cm(4.7)display",
                "image": "3.jpeg",
                "quantity":"30"
            },
            {
                "title": "red mi note 6 pro",
                "description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
                "image": "4.jpeg",
                "quantity":"40"
            }
        ]
    }

var i = 0;
var newtit;
var newdis;
var newquant;

function dis() {
    console.log("working");
    document.getElementById("form").style.display="none";
    document.getElementById('mimage').innerHTML = '<img src='+details.products[i].image+' class="img-responsive">'
    document.getElementById('mtitle').innerHTML = '<h3>'+details.products[i].title+'</h3>'
    document.getElementById('mdescription').innerHTML = '<h4><b>DESCRIPTION: </b>'+details.products[i].description+'</h4>'
    document.getElementById('mquantity').innerHTML = '<h4><b>QUANTITY: </b>'+details.products[i].quantity+'<h4>'
    hideButton('previous')
}


function prevpressed(){
    i--;
    if(i < 0){
        i = 0;
        hideButton('previous')
        return;
    }
    showButton('previous')
    showButton('next')
    document.getElementById('mimage').innerHTML = '<img src= '+details.products[i].image+' class="img-responsive">'    
    document.getElementById('mtitle').innerHTML = '<h3>'+details.products[i].title+'</h3>'
    document.getElementById('mdescription').innerHTML = '<h5><b>DESCRIPTION: </b>'+details.products[i].description+'</h5>'
    document.getElementById('mquantity').innerHTML = '<h4> <b>QUANTITY: </b>'+details.products[i].quantity+'<h4>'
    if (i == 0) hideButton('previous')
}


function nextpressed(){
    i++;
    if(i > details.products.length - 1){
        i = details.products.length-1;
        hideButton('next')
        return;
    }
    showButton('next')
    showButton('previous')
    document.getElementById('mimage').innerHTML = '<img src= '+details.products[i].image+' class="img-responsive">'    
    document.getElementById('mtitle').innerHTML = '<h3>'+details.products[i].title+'</h3>'
    document.getElementById('mdescription').innerHTML = '<h5><b>DESCRIPTION: </B>'+details.products[i].description+'</h5>'
    document.getElementById('mquantity').innerHTML = '<h4><b>QUANTITY: </b>'+details.products[i].quantity+'<h4>'
    if(i == details.products.length - 1) hideButton('next')

}
function hideButton(id) {
    console.log(document.getElementById(id).style.visibility)
    document.getElementById(id).style.visibility = 'hidden';
  }
  function showButton(id) {
    console.log(document.getElementById(id).style.visibility)
    document.getElementById(id).style.visibility = 'visible';
  }



  function deleterow() {
      console.log(i);
      delete details.products[i];
      nextpressed();
  }

  function editrow() {
    document.getElementById("form").style.display="block";
  }

  function hide() {
    newtit = document.getElementById("titletext").value;
    newdis = document.getElementById("desctext").value;
    newquant = document.getElementById("noofquantitiy").value;
    console.log(i);
    console.log(newtit);
    console.log(newdis);
    console.log(newquant);
    details.products[i].title = newtit;
    details.products[i].description = newdis;
    details.products[i].quantity = newquant;
    document.getElementById('mtitle').innerHTML = '<h3>'+details.products[i].title+'</h3>'
    document.getElementById('mdescription').innerHTML = '<h5>DESCRIPTION: '+details.products[i].description+'</h5>'
    document.getElementById('mquantity').innerHTML = '<h4> QUANTITY: '+details.products[i].quantity+'<h4>'
    document.getElementById("titletext").value = "";
    document.getElementById("desctext").value = "";
    document.getElementById("noofquantitiy").value = "";
    document.getElementById("form").style.display="none";
  }