var tags = document.querySelectorAll('.tag-box')
for (var i = 0, len = tags.length; i < len; i++) {
    var tag = tags[i]
    if(!tag){
        continue;
    }
    var childNodes = tag.childNodes
    for (var x = 0, len2 = childNodes.length; x < len2; x++) {
        var node = childNodes[x]
        if (node&&node.nodeType == 3) {
            tags[i].removeChild(node)
        }
    }
}
