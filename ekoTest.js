//SOLUTION TO FIRST QUESTION
var arr = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']

function groupWords(arr){
    var holder = {}

    for(let i=0; i<arr.length; i++){
        
        var sortedLetter= arr[i].split("").sort()

        if(holder[sortedLetter]){
            holder[sortedLetter] = holder[sortedLetter].concat(` - ${arr[i]}`)
        }else{
            holder[sortedLetter] = `${arr[i]}`
        }
    }

    Object.values(holder).forEach((value)=>{
        console.log(value)
    })

}

// TEST RUN FIRST SOLUTION
groupWords(arr)


//SOLUTION TO SECOND QUESTION
var testCaseOne = "foo(bar)"
var testCaseTwo = "(bar)"
var testCaseThree = "foo(bar)blim"
var testCaseFour = "foo(foo(bar))blim"

var reverse = (str) => str.split('').reverse().join('');

var reverseParentheses = (s) => {
    while (s.includes('(')) {
        var l = s.lastIndexOf('(');
        var r = s.indexOf(')', s.lastIndexOf('('));
        s = s.slice(0, l) + reverse(s.slice(l + 1, r)) + (r + 1 === s.length ? s.slice(r, -1) : s.slice(r + 1));
    }
    console.log(s)
};

// TEST RUN SECOND SOLUTION
reverseParentheses(testCaseOne)
reverseParentheses(testCaseTwo)
reverseParentheses(testCaseThree)
reverseParentheses(testCaseFour)