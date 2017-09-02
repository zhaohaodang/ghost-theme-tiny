hljs.configure({
    tabReplace: '    ',
    classPrefix: '' 
})
hljs.initHighlightingOnLoad()
var links=document.querySelectorAll('.post a');
for (var i = links.length - 1; i >= 0; i--) {
	links[i].setAttribute('target','_blank')
}