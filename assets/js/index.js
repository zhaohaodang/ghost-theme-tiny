var tags = document.querySelectorAll('.tag-box')
// console.log(tags[0].childNodes)
for (var i = 0, len = tags.length; i < len; i++) {
    var childNodes = tags[i].childNodes
    for (var x = 0, len2 = childNodes.length; x < len2; x++) {
        var node = childNodes[x]
        if (node&&node.nodeType == 3) {
            tags[i].removeChild(node)
        }
    }
}
// tags[0].removeChild(tags[0].childNodes[0])

console.log(tags[0].childNodes)