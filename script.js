function findSoap() {


    let skin = document.getElementById("skin").value;

    let scent = document.getElementById("scent").value;


    let result;


    if (skin === "sensitive") {

        result = "We recommend our gentle oatmeal soap for sensitive skin!";

    } 
    
    else if (skin === "dry") {

        result = "We recommend our moisturizing handmade soap!";

    } 
    
    else if (scent === "floral") {

        result = "We recommend our relaxing lavender floral soap!";

    } 
    
    else if (scent === "fresh") {

        result = "We recommend our refreshing citrus soap!";

    } 
    
    else if (scent === "earthy") {

        result = "We recommend our natural earthy soap!";

    } 
    
    else {

        result = "We recommend trying one of our handmade soaps!";

    }


    document.getElementById("result").innerHTML = result;

}
