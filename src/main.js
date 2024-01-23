"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
document.querySelector('#app').innerHTML = "\n  <div>\n  <h1>JT Palindrome Checker</h1>\n  <h3>Please enter the word to check:</h3>\n  <form id=\"palindrome_check\">\n   \n   <input type=\"text\" id=\"word\" />\n\n   <button type=\"submit\">Submit</button>\n   \n   </form>\n   <h1><span id=\"result\"><span></h1>\n";
var mess = '';
var form = document.querySelector('#palindrome_check');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var isInputed = document.querySelector('#word');
    var isPalindrome = isInputed.value;
    console.log("Word to be checked is: ".concat(isPalindrome));
    function Palindrome(isPalindrome) {
        var reverseWord = '';
        var word = String(isPalindrome).toUpperCase();
        for (var i = word.length - 1; i >= 0; i--) {
            console.log(i);
            reverseWord += word[i];
            console.log('word is reversed ', reverseWord);
        }
        for (var j = word.length - 1; j >= 0; j--) {
            if (word === '') {
                return;
            }
            else {
                if (word[j] === reverseWord[j]) {
                    mess = 'You found a palindrome - Congratulations';
                }
                else {
                    mess = 'No palindrome this time - Please play again';
                }
            }
            document.querySelector('#result').innerHTML = mess;
        }
    }
    Palindrome(isPalindrome);
});
