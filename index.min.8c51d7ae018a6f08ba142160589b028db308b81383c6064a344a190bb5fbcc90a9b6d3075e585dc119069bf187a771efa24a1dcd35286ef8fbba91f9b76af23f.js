var suggestions, userinput;
AOS.init({
    duration: 700
}),
suggestions = document.getElementById('suggestions'),
userinput = document.getElementById('userinput'),
document.addEventListener('keydown', inputFocus);
function inputFocus(a) {
    a.keyCode === 191 && (a.preventDefault(),
    userinput.focus()),
    a.keyCode === 27 && (userinput.blur(),
    suggestions.classList.add('d-none'))
}
document.addEventListener('keydown', suggestionFocus);
function suggestionFocus(b) {
    const d = suggestions.querySelectorAll('a')
      , e = [...d]
      , a = e.indexOf(document.activeElement);
    let c = 0;
    b.keyCode === 38 ? (b.preventDefault(),
    c = a > 0 ? a - 1 : 0,
    d[c].focus()) : b.keyCode === 40 && (b.preventDefault(),
    c = a + 1 < e.length ? a + 1 : a,
    d[c].focus())
}