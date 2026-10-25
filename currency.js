var convert=function(event){
    // Validate first
    if (!validateForm()) { //validation always returns true or false so validation false ahnel return  else call fetchcurrencydata fn
        return;
    }
    // If validation passes, call the API
    fetchCurrencyData();
}
    

async function fetchCurrencyData(){
    let usd=document.getElementById("usd").value;
    let currency = document.getElementById("currency").value;
    const url = `https://api.frankfurter.dev/v2/rates?base=USD`

    try{
        apiResponse= await fetch(url);
        //await will wait for the fetch and once done proceed with next step
        if(!apiResponse.ok){
            throw new Error('Http Error:',apiResponse.status);
        }
        //after fetching,parse the apiResponse and print the result
            //parse the apiResponse(converting json to javascript object) and we get an array of objects
            const currencyData= await apiResponse.json();
            //since it is array of objects
            let currencyObject = currencyData.find(item => item.quote === currency);//using find function,find the object in which quote keys value matches with selected currency and store in var currencyobject
            let exchangeRate=currencyObject.rate; //so exchangerate is currencyobject.rate
            let finalAmount = usd * currencyObject.rate;//and we calculate final amount
            console.log("exchange rate="+exchangeRate)
            console.log("final amount="+finalAmount);

            // Show both cards
            document.getElementById("resultCard").style.display = "block";
            document.getElementById("exchangeCard").style.display = "block";

            // Display converted amount
            document.getElementById("resultdisplay").innerHTML = usd + " USD = " + finalAmount.toFixed(2) + " " + currency;

            // Display exchange rate
            document.getElementById("rate").innerHTML ="1 USD = " + currencyObject.rate + " " + currency;



    }catch(e){
        console.error("error!!",e);
    }
}


function validateForm() {
    let usd = document.getElementById("usd").value;

    // Clear previous error message
    error.innerHTML = "";

    // Blank validation
    if (usd.trim() == "") {
        document.getElementById("error").innerHTML = "Please enter an amount.";
        return false;
    }
    
    // Zero validation
    if (Number(usd) == 0) {
        document.getElementById("error").innerHTML = "Amount cannot be zero.";
        return false;
    }

    // Negative number validation
    if (Number(usd) < 0) {
        document.getElementById("error").innerHTML = "Amount cannot be negative.";
        return false;
    }
    return true;

}