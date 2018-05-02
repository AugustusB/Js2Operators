(function(ns1, ns2){
    ns2.OpsCls = function OpsCls (){
        // Private methods
        var addFloats = function addFloats(findElem){
            $(findElem).append('<div><h3>Addition</h3></div>');
            $(findElem).append('<div> 5.1 + 3.3 = ' + (5.1 + 3.3) + '</div>');
            $(findElem).append('<div> (5.1 + 3.3).toFixed(2)  = ' + (5.1 + 3.3).toFixed(2) + '</div>');
        },
        numberAddUndef = function numberAddUndef(findElem){
            $(findElem).append('<div> 200 + undefined = ' + (200 + undefined) + '</div>');
        },

        stringAddUndef = function stringAddUndef(findElem){
            $(findElem).append('<div> string + undefined = product' + undefined + '</div>');
        }
        
        stringAddNull = function stringAddNull(findElem) {
            $(findElem).append('<div> string + Null = product' + null + '</div>');
        },

        numberAddNull = function numberAddNull(findElem) {
            $(findElem).append('<div> 200 + Null = ' + (200 + null) + '</div>');
        },

        numberAddNaN = function numberAddNaN(findElem) {
            $(findElem).append('<div> 200 + NaN = ' + (200 + NaN) + '</div>');
        },
        
        subFloats = function subFloats(findElem){
            $(findElem).append('<div><h3>Subtraction</h3></div>');
            $(findElem).append('<div> 5.1 - 3.3 = ' + (5.1 - 3.3) + '</div>');
            $(findElem).append('<div> (5.1 - 3.3).toFixed(2)  = ' + (5.1 - 3.3).toFixed(2) + '</div>');
        },
        stringNumSubStringNum = function numberAddUndef(findElem){
            $(findElem).append('<div> \"300\" - \"200\" = ' + ("300" - "200") + '</div>');
        }, 
        stringNumSubStringNum2 = function numberAddUndef2(findElem){
            $(findElem).append('<div> \"prod300\" - \"pint200\" = ' + ("prod300" - "pint200") + '</div>');
        },
        numberSubUndef = function numberSubUndef(findElem){
            $(findElem).append('<div> 300 - undefined = ' + (200 - undefined) + '</div>');
        },

        numberSubNull = function numberSubNull(findElem){
            $(findElem).append('<div> 300 - null = ' + (300 - null) + '</div>');
        },

        numberSubNaN = function numberSubNaN(findElem){
            $(findElem).append('<div> 300 - NaN = ' + (300 - NaN) + '</div>');
        },

        numberSubSpace = function numberSubSpace(findElem){
            $(findElem).append('<div> 300 - \" \" = ' + (300 - " ") + '</div>');
        }
        MultDivMod = function MultDivMod(findElem){
            $(findElem).append('<div><h3>Multiplication, Division and Modulus</h3></div>');
            $(findElem).append('<div> 9 * 3 = ' + (9 * 3) + '</div>');
            $(findElem).append('<div> 1.1 * 1.1 = ' + (1.1 * 1.1) + '</div>');
            $(findElem).append('<div> (1.1 * 1.1).toFixed(2) = ' + (1.1 * 1.1).toFixed(2) + '</div>');
        };
        

        // Public methods
        return{
            addFloats: addFloats,
            numberAddUndef: numberAddUndef,
            stringAddUndef: stringAddUndef,
            stringAddNull:stringAddNull,
            numberAddNull:numberAddNull,
            numberAddNaN:numberAddNaN,
            subFloats:subFloats,
            stringNumSubStringNum:stringNumSubStringNum,
            stringNumSubStringNum2:stringNumSubStringNum2,
            numberSubUndef:numberSubUndef,
            numberSubNull: numberSubNull,
            valueOf : function (){return 200;},
            numberSubNaN: numberSubNaN,
            numberSubSpace: numberSubSpace,
            MultDivMod: MultDivMod
        };

        // Public Properties
    };

})(window.Gus = window.Gus || {}, window.Gus.JsOperators = window.Gus.JsOperators || {});