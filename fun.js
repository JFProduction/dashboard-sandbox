/*
    Given a string of open and closed brackets output "Balanced"
    if the brackets are balanced or "Unbalanced" otherwise.
    A string is balanced if it consists entirely of pairs of
    opening/closing brackets (in that order), none of which mis-nest.
*/

var brackets = '(())())';

// (       )  prev == (
//  (     )   prev == (
//   )  (     prev == (
//    (       prev == )

var splits = brackets.split("");
console.log(recursive(splits, splits[0], splits.length - 1, 0, "Unbalanced"));
console.log(type2(brackets));

function recursive(splits, prev, j, i, balanced) {
    if (i > j)
        return balanced;

    if (splits[i] == '(' && splits[j] == ')') {
        balanced = "Balanced";
        return recursive(splits, splits[i], --j, ++i, balanced);
    }
    else if (prev == '(' && splits[i] == ')') {
        // this means splits[i] == ')'
        // so splits[j] needs to == '('
        if (splits[j] == '(')
            balanced = "Balanced";
        else
            balanced = "Unbalanced";
        return recursive(splits, splits[i], --j, ++i, balanced);
    }
    else {
        balanced = "Unbalanced";
        return balanced;
    }

    return balanced;
}


function type2(brackets) {
   var s = 0;
   for (var i = 0; i < brackets.length; i++) {
       s += (brackets[i] == '(') ? 1 : -1;
       if (s < 0)
           return "Unbalanced";
   }
   return s == 0 ? "Balanced" : "Unbalanced";
}
