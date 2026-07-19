function findSoap() {

    let skin = document.getElementById("skin").value;
    let scent = document.getElementById("scent").value;

    let result = "";

    if (skin === "sensitive") {
        result = "Try our gentle oatmeal soap!";
    } 
    else if (scent === "floral") {
        result = "Try our relaxing lavender soap!";
    } 
    else if (scent === "fresh") {
        result = "Try our refreshing citrus soap!";
    } 
    else {
        result = "Try one of our handmade natural soaps!";
    }

    document.getElementById("result").innerHTML = result;
}
