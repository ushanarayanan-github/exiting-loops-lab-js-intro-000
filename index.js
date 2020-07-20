function breakOut(array, changeValue, stopValue) {
for (let i=0;i<array.length;i++) {
 if (array[i] !== stopValue) {
   array[i] = changeValue
 }
 else {
   break;
 }
}
return array
}

function keepGoing(array, changeValue, stopValue) {
for (let i=0;i<array.length;i++) {
 if (array[i] !== stopValue) {
   continue;
 }
 array[i] = changeValue
}
return array
}
