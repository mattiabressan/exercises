const data = require('./data.json')

const arr = data.elements

const tree = arr.map(e => arr.filter(el => el.parent_id == e.id).map(ele => e.label + " > " + ele.label))

tree.forEach(element => element.length == 0 ? null : element.forEach(e => console.log(e)));













// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//         if (arr[i].id == arr[j].parent_id) {

//             console.log(arr[i].label + ">" + arr[j].label)
//         }
//     }
// }
