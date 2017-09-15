var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/(Daniel)/gi, 'Drangle');
            var replacedText = text.replace(/(Bingo)/gi, 'Bringo');
            var replacedText = text.replace(/(Sushi)/gi, 'Shushi');
            var replacedText = text.replace(/(Skateboard)/gi, 'Skrateboard');
            var replacedText = text.replace(/(Airplane)/gi, 'Jumbo Jret');
            var replacedText = text.replace(/(Casino)/gi, 'Crasino');
            var replacedText = text.replace(/(Orangutan)/gi, 'Dangatang');
            var replacedText = text.replace(/(Kayak)/gi, 'Krayak');
            var replacedText = text.replace(/(Davis)/gi, 'Dungus');
            var replacedText = text.replace(/(Penis)/gi, 'Prennis');
            var replacedText = text.replace(/(Prisoners)/gi, 'Brad Boy Prunks');
            var replacedText = text.replace(/(Altar Boy)/gi, 'Church Boy');
            var replacedText = text.replace(/(God)/gi, 'Gord');
            var replacedText = text.replace(/(Jesus)/gi, 'Jingus');
            var replacedText = text.replace(/(Zoo)/gi, 'Zew');
            var replacedText = text.replace(/(Mercury)/gi, 'Mercerus');
            var replacedText = text.replace(/(Pluto)/gi, 'Plunto');
            var replacedText = text.replace(/(Earth)/gi, 'Water Planet');
            var replacedText = text.replace(/(Neptune)/gi, 'Doris');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                   
            }
        }
    }
}
