// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

const textarea = document.getElementById('text');
const stats = document.getElementById('stat');

textarea.addEventListener("input", wordCounter, true);

function wordCounter(){
  const wordCount = textarea.value.split(" ").length;
  const charCount = textarea.value.length;
  const counts = `You've written ${wordCount} words and ${charCount} characters.`
  stats.innerHTML = counts;
}