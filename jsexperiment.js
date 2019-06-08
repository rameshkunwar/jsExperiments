console.log('js experiments');
const deleteMe = () => console.trace('bye bye db');

deleteMe();
deleteMe();

const hello = () => console.log('hello');


const orders = [112,  200, 250, 600];

//reduce
const total = orders.reduce((accumulate, current) => accumulate+current);

//map
const withTax = orders.map(v => v * 2.5)

//filter
const highValue = orders.filter(x => x > 200);

console.log(total);

console.log(`Total with tax is ${withTax}`);

console.log(`highest value is: ${highValue}`);


//removing array duplicate
let a = [1, 2, 5, 2, 1, 8];
console.log('original array: '+ a);
a.map(y => {console.log('a.indexOf: '+y +' :'+ a.indexOf(y))});
let uniqueArray=a.filter((item, index) => a.indexOf(item) == index );
console.log('unique array list: '+ uniqueArray);

//class examples
class Polygon{
    constructor(height, width){
        this.area = height * width;
    }
}

console.log(new Polygon(4,3).area);