let text = document.getElementById("case-converter");
let filename = document.getElementById("filename");
let downloadBtn = document.getElementById("save-text-file");
let upperBtn = document.getElementById("upper-case");
let lowerBtn = document.getElementById("lower-case");
let properBtn = document.getElementById("proper-case");
let sentenceBtn = document.getElementById("sentence-case");

upperBtn.addEventListener("click", function upper() {
text.value = text.value.toUpperCase();
    console.log(text.value);
});

lowerBtn.addEventListener("click", function lower() {
      text.value = text.value.toLowerCase();
});

properBtn.addEventListener("click", function proper () {
    text.value = text.value.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
});

sentenceBtn.addEventListener("click", function sentence () {
    text.value = text.value.toLowerCase().replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase()));
});

downloadBtn.addEventListener("click", function (){

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }

    filename = filename.value;
    text = text.value;
    download(filename, text);

}, false);

