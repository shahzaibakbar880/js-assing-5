//Output Function
function outPut(output){
    document.getElementById("output").innerHTML = output
}
//Orginal String Function
function orgString(orgString){
    document.getElementById("org-string").innerHTML = orgString
}

// Clear Function 
function Textclear(){
document.getElementById("input-text").value = ''
}
//Clear Output 
function clearOutput(){
    document.getElementById("output").innerHTML = ''
}
 // Tostify JS
//  Toastify({
//     text: "Welcome",
//     duration: 3000,
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: false,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "left", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },
//     onClick: function(){} // Callback after click
//   }).showToast();


const round = () => {
    let roundvalue = document.getElementById("input-text").value;
    if ( roundvalue == '') {
        Toastify({
            text: "Please enter a number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                
              background: " linear-gradient( )",
            }
          }).showToast();
    //  alert("Please enter a number")
        return;
    }
    let orignalvalue =  Math.round(roundvalue)
        outPut (orignalvalue)
        orgString(roundvalue)
}
// function round(){
//    let roundvalue=  document.getElementById("input-text")
//    let orignalvalue =  Math.round(roundvalue)
//    outPut (orignalvalue)
//    orgString(roundvalue)
// }
const ceil = ()=>{
    let ceilvalue = document.getElementById("input-text" ).value
    if ( ceilvalue == '') {
        Toastify({
            text: "Please enter a number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                background: " linear-gradient( )",
            }
          }).showToast();

        // alert("Please enter a number")
                return;
            }
    let orignalceil = Math.ceil(ceilvalue)
    outPut (orignalceil)
    orgString(ceilvalue)
}
const floor = () => {
    let floorvalue = document.getElementById("input-text").value
    if ( floorvalue == '') {
        Toastify({
            text: "Please enter a number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                background: " linear-gradient( )",
            }
          }).showToast();
          return;
       // alert("Please enter a number")
            }
    let orignalFloor = Math.floor (floorvalue)
    outPut (orignalFloor)
    orgString(floorvalue)

}
function generate(){
 let randomValue = Math.random()
    outPut (randomValue)
    orgString(randomValue)
}
function Throw(){
    let dicValue = Math.random();
    let orginalValue = dicValue;
    let orignalDicValue = Math.floor(orginalValue *6 ) +1
     outPut (orignalDicValue);
    orgString(orignalDicValue);
}
function Password(){
    generatePassword()
    outPut (generatePassword() + " \n is a strong Password")
   
}

function generatePassword(){
    let paswrd = "987hsio[/,qnlg;h95%#evs7t78r37zRYREegdyjgo]jg";
    let stringValue = "6"
     for( i= 1; i<=8; i++){
        let char = Math.floor(Math.random()*stringValue.length+1);
        paswrd += stringValue.charAt(char)
     }
     return paswrd;
}
const convertString =() =>{
    let stringValue = document.getElementById("input-text").value
    if ( stringValue == '') {
        Toastify({
            text: "Please enter your number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                background: " linear-gradient( )",
            }
          }).showToast();
                return;
            }
   let orignalString =  String(stringValue)
    outPut (orignalString  + " is a string",typeof(orignalString));
    orgString(stringValue + " is a value");
    console.log(stringValue + " is a value",typeof(orignalString))
}
//Controlling Length
const controlLenth = () => {
    let userValue1 = prompt("please Enter a value")
    if ( userValue1 == '') {
        Toastify({
            text: "Please enter your number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                background: " linear-gradient( )",
            }
          }).showToast();
                return;
            }
            orgString(userValue1)
            outPut( "Lenght of"+ " "+ `${userValue1}`+ " is" + " " + userValue1.length )
}

// GST Fucntion
const GST= () => {
    let gstnumber = document.getElementById("input-text").value
    if ( gstnumber == '') {
        Toastify({
            text: "Please enter your  number",
            className: "info",
            position: "center", // `left`, `center` or `right`
            style: {
                background: " linear-gradient( )",
            }
          }).showToast();
                return;
            }
            let orignalnumber = gstnumber;
// document.getElementById("input-text").value = ''
alert("Please enter GST on value")
let gstValue = prompt("Enter value %")
// if ( gstValue == '') {
//     Toastify({
//         text: "Please enter a GST on number",
//         className: "info",
//         position: "center", // `left`, `center` or `right`
//         style: {
//             background: " linear-gradient(205deg, hsl(240deg 100% 20%) 0%,  hsl(285gijggk2deg 100% 24%) 22%,  hsl(284deg 100% 27%) 33%,  hsl(306deg 100% 31%) 42%,hsl(327deg 100% 35%) 50%, hsl(349deg 100% 39%) 58%,hsl(11deg 100% 43%) 67%, hsl(33deg 100% 46%) 78%,    hsl(55deg 100% 50%) 100% )",
//         }
//       }).showToast();
//             return;
//         }
   let orignalGSTvalue = gstValue
let calGST = Math.floor (orignalnumber * (gstValue /100))
orgString("User Value = " + orignalnumber + " "+ "GST = " + orignalGSTvalue +"%" )
   outPut ( calGST +"" +" is GST")
// (reeta * gst / 100) + reeta;
}