/*If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner.
*/
var myFriends = ["Zohaib", "Ayaz", "Rameez", "Junaid", "Faisal", "Kamran"];
// 1st method with loop
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], "!you are invited to my dinner on Sunday "));
}
//2nd method with loop
//myFriends.map((ib))=>{
//console.log(`Mr. ${myFriends [ib]}! you are invited to my dinner on Sunday`);
//}
