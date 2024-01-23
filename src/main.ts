import './style.css'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>JT Palindrome Checker</h1>
  <h3>Please enter the word to check:</h3>
  <form id="palindrome_check">
   
   <input type="text" id="word" />

   <button type="submit">Submit</button>
   
   </form>
   <h1><span id="result"><span></h1>
`

let mess: string = '';

const form = document.querySelector('#palindrome_check') as HTMLFormElement;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isInputed = document.querySelector('#word') as HTMLInputElement;
  const isPalindrome = isInputed.value;

  console.log(`Word to be checked is: ${isPalindrome}`);

  function Palindrome(isPalindrome: string) {
    let reverseWord = '';
    let word = String(isPalindrome).toUpperCase();

    for (let i = word.length - 1; i >= 0; i--) {
      console.log(i);
      reverseWord += word[i];
      console.log('word is reversed ', reverseWord);
    }

    for (let j = word.length - 1; j >= 0; j--) {
      if (word === '') {
        return;
      } else {
        if (word[j] === reverseWord[j]) {
          mess = 'You found a palindrome - Congratulations';
        } else {
          mess = 'No palindrome this time - Please play again';
        }
      }
      document.querySelector('#result').innerHTML = mess;
    }
  }

  Palindrome(isPalindrome)
});

