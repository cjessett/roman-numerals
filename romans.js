
// We did some stuff for you! This is basic logic for affecting the DOM.
// It short circuits the page's HTML form and fires off a handbuilt JS function.
window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('click',printConvertedValue,false)
}

// This is the function that actually adds the output to the DOM. Don't change
// this!
var printConvertedValue = function(event) {
  event.preventDefault()
  var number = this.number.value
  var outputDiv = document.querySelector('.output')
  outputDiv.innerText = numeralConverter(number)
}


// numeralConverter takes a string that looks like a number as an input, e.g. '111'.
// numeralConverter should output a string of characters corresponds to a Roman Numeral, e.g. 'XXVI'
var numeralConverter = function(numString) {

  var result = "";
  var keys = Object.keys(nums);
  var i = keys.length - 1;

  while(i >= 0) {
    var int = keys[i]
    while(numString >= parseInt(int)) {
      numString -= int;
      result += nums[int];
    }
    i--;
  }
  return result
};

// your helper functions go here!
nums = { 1000:'M', 900:'CM', 500:'D', 400:'CD', 100:'C', 90:'XC', 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4:'IV', 1:'I' }

