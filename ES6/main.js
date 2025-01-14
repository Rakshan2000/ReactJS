function getName(name){
    return name;
}

let a = true;
let b = false;

console.log(a && getName("Rakshan C K"));

let c = false;
let d = false;

console.log(c || getName("Rohan C K"));

//Template Literals

let name1 = "Johan";
let name2 = "Doe";

console.log(name1+" "+name2, `${name1} ${name2}`);


//Ternary Operators
let showRecipeOne = true;

function getRecipeOneName(recipeName){
    return recipeName;
}

function getRecipeTwoName(recipeName) {
    return recipeName;
}

if(showRecipeOne){
    console.log(getRecipeOneName("Pizza"));
}
else{
    console.log(getRecipeTwoName("coke"));
}

//condition ? statement 1 : statement 2 ;



!showRecipeOne ? console.log(getRecipeOneName("Pizza")) : console.log(getRecipeTwoName("coke")) ;

const id = 1;
const productName = "Product Apple Watch"
const rating = 5;

const product = {
    id,
    productName,
    rating,
};

console.log(product);

//destructuring

const product2 = {

    description : 'Product 2 Description',
    price : '300',
    id,
    productName,
    rating
}

const getProductTwoDescription = product2.description;
console.log(getProductTwoDescription);

const {description,price} = product2;
console.log(description,price);


const array = [1, 2, 3, 4];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue,getArraySecondValue);

//destructuring
const [
    arrayFirstElement,
    arraySecondElement,
    arrayThridElement,
    arrayFourthElement
] = array;


console.log(
    arrayFirstElement,
    arraySecondElement,
    arrayThridElement,
    arrayFourthElement
);

//Default Parameters, spread and rest operators

function mulOfTwoNumbers1(num1, num2){
    console.log(num1,num2);
    return num1 * num2;
}

console.log(mulOfTwoNumbers1(10,20));

function mulOfTwoNumbers2(num1, num2 = 2){
    console.log(num1,num2);
    return num1 * num2;
}

console.log(mulOfTwoNumbers2(10));


const array2 = [2, 3, 4];
const array3 = [5, 6, 7];

console.log(...array2);
console.log([...array2]);

console.log([999, ...array2, 90, ...array3, 1000]);

function getInfo1(a, b, c, d, e){

    console.log(a, b, c, d, e); 

    return 'Rakshan C K'
}

function getInfo2(a,...c){
    console.log(a,c);
    return a + c[1]
}


console.log(getInfo1(1,2,3,4,5));
console.log(getInfo2(1,2,3,4,5));


//map, filter, find, some, every, includes, indexOf, findIndex

const personsArray = [

    {
        name : 'Person 1',
        age : 30,
        country : 'USA'   
    },
    {
        name : 'Person 2',
        age : 40,
        country : 'RUSSIA'   
    },
    {
        name : 'Person 3',
        age : 50,
        country : 'INDIA'   
    }
];

let getAllNames = personsArray.map((singlePerson, index) => {
    console.log(singlePerson,index)
    return `${singlePerson.name} age is ${singlePerson.age}`;
} );

console.log(getAllNames);

let getPersonFromUSA = personsArray.find((singlePerson, index) => {
    return singlePerson.country === 'USA';
})

console.log(getPersonFromUSA);

let getAllPersonsFromUSA = personsArray.filter((singlePerson,index) => {
    return singlePerson.country === "USA";
});

console.log(getAllPersonsFromUSA);

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson)=>{
    return singlePerson.age > 40;
});

console.log(checkSomeArrayMethodWithExample);


let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) =>{ 
    return singlePerson.age > 60;}
)

console.log(checkEveryArrayMethodWithExample);

const fruitsArray = ['apple','Orange','grapes']

console.log(fruitsArray.includes('Raksha'),fruitsArray.indexOf('grapes'));;

let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex((singlePerson)=>{
    return singlePerson.country = 'RUSSIA'
});

console.log(getIndexOfPersonWhoIsFromRussia);



function rendorProducts(getProducts){
    const getListOfProductsElements = document.querySelector(".list-of-products" );
    getListOfProductsElements.innerHTML = getProducts.map((singleProductItem) =>
        `<p>${singleProductItem.title}</p>`
    ).join('');
}

async function fetchListOfProducts(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products',{
            method : 'GET'
        });

        const result = await apiResponse.json();

        console.log(result);

        if(result?.products?.length > 0) rendorProducts(result?.products)
    }
    catch(e){
        console.log('error',e);
    }
}

fetchListOfProducts();