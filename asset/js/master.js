// const myDate = ['binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox','binabox',]
// let num = 0
// test()

// function test() {
//     let x1 = setInterval(_hand, 200)
//     let x2
//     let i = 1
//     let temp = myDate[num]

//     function _hand() {
//         if (i <= temp.length) {
//             document.getElementById('txt').innerHTML = temp.substring(0, i)
//             i++
//         } else {
//             clearInterval(x1)
//             setTimeout(() => {
//                 x2 = setInterval(() => {
//                     if (i > 0) {
//                         document.getElementById('txt').innerHTML = temp.substring(0, i)
//                         i--
//                     } else {
//                         document.getElementById('txt').innerHTML = ''
//                         clearInterval(x2)
//                         num++
//                         if (num < 34) {
//                             setTimeout(() => {
//                                 test()
//                             }, 2000);
//                         }
//                     }
//                 }, 100);
//             }, 1000);
//         }
//         console.table(i)
//     }
// }
