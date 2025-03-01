
# Snippets to copy-paste in the web console


## Gravity
```
var script = document.createElement("script"); script.src="https://gravityscript.github.io/grav.js"; document.body.appendChild(script);void(0);
```


## Erasure poetry
```
var tags=["h1","h2","h3","a","p","li","th","td"];function makeWordElement(e){var t=document.createElement("span");return t.innerHTML=e.split("").map((e=>/[.,()'":!?;\s]/.test(e)?e:"█")).join("")+" ",t.letters=e.replace(/[.,()'":!?;\s]/g,""),t.style.cursor="pointer",t.addEventListener("click",(()=>t.innerHTML=t.letters+" ")),t}tags.map((e=>document.querySelectorAll(e))).map((e=>Array.from(e).map((e=>{var t=e.innerText.split(" ");e.innerHTML="",t.map((t=>{var r=makeWordElement(t);e.appendChild(r)}))}))));
```

## Impostors
```
var words_list=[];var tags=["h1","h2","h3","a","p","li","th","td"];tags.map(tag=>document.querySelectorAll(tag)).map(nodes=>Array.from(nodes).map(node=>{var words=node.innerText.split(" ");node.innerHTML="";words.map(word=>{var el=makeWordElement(word)
node.appendChild(el)})}));function getShuffledArr(arr){const newArr=arr.slice()
for(let i=newArr.length-1;i>0;i--){const rand=Math.floor(Math.random()*(i+1));[newArr[i],newArr[rand]]=[newArr[rand],newArr[i]]}
return newArr};function makeWordElement(text){var el=document.createElement("span");el.innerHTML=text+" ";el.letters=text.replace(/[.,()'":!?;\s]/g,"");words_list.push(el);return el}
words_list=getShuffledArr(words_list);function imposterify(el){el.style.color="red";el.style.fontWeight="bold";el.style.cursor="pointer";el.innerHTML=getShuffledArr(el.letters.split("")).join("")+" ";el.addEventListener("click",()=>alert(`You found the imposter!`))}
for(var i=0;i<10;i++)imposterify(words_list[i]);
```



____


# Make your own!

This template was made to play around with Wikipedia pages. It will segment the text in an article into singular words, wrapped around a `<span></span>` tag. Edit the `makeWordElement()` function to add events or custom styling to each word.

``` [javascript]
var tags = ["h1","h2", "h3", "a", "p", "li", "th", "td"]; tags.map(tag => document.querySelectorAll(tag)).map(nodes => Array.from(nodes).map(node => {
var words = node.innerText.split(" ");
node.innerHTML = "";
words.map(word => {
var el = makeWordElement(word)
node.appendChild(el)
}
)}));

function makeWordElement(text)
{
    var el = document.createElement("span");
    // rewrite the word, with punctuation
    el.innerHTML = text+" ";
    // save the word, without punctuation
    el.letters = text.replace(/[.,()'":!?;\s]/g, "");
    // highlight each word during dev
    el.style.border = "solid 1px red";
    // example on how to add a click event
    el.addEventListener("click", () => alert(`You clicked on: '${el.letters}'`))
    return el;
}
```
