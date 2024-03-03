const x = `oh Im A VARIaBLE`
var age = 20
let money = function (x, age) {
 return x +` `+ age
}
document.querySelector('.plus').addEventListener('click', function() {
    console.log(money(x, age));
});

console.log(`This is ME!`)
//
