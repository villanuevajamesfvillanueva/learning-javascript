function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = "";
    result += "The ${arguments.myNoun} {myNoun} {myVerb} to the store.";
    
    return result;
}

console.log(wordBlanks("dog", "big", "run", "quickly"));


const concatValue = 'John,David,Mike';
var friendNames= `${concatValue}`;
var studentNameWithFriends=` ${concatValue}| 'Carol' | 24 ` ;
console.log(friendNames);
console.log(studentNameWithFriends);