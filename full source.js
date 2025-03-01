var words_list = [];
var tags = ["h1","h2", "h3", "a", "p", "li", "th", "td"]; tags.map(tag => document.querySelectorAll(tag)).map(nodes => Array.from(nodes).map(node => {
var words = node.innerText.split(" ");
node.innerHTML = "";
words.map(word => {
var el = makeWordElement(word)
node.appendChild(el)
}
)}));

function  getShuffledArr(arr){
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};

function makeWordElement(text)
{
    var el = document.createElement("span");
    // rewrite the word, with punctuation
    el.innerHTML = text+" ";
    // save the word, without punctuation
    el.letters = text.replace(/[.,()'":!?;\s]/g, "");
    words_list.push(el); 
    return el;
}

words_list = getShuffledArr(words_list);

function imposterify(el)
{
	el.style.color = "red";
	el.style.fontWeight = "bold";
    el.style.cursor = "pointer";
	el.innerHTML = getShuffledArr(el.letters.split("")).join("") + " ";
  el.addEventListener("click", () => alert(`You found the imposter!`))
}

for(var i = 0; i < 10; i++) imposterify(words_list[i]);


