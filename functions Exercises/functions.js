/*1.Convert the following named function to an arrow function:
           function printMessage( message ) {
                    console.log( message )
           }*/
const printMessage = (message) => { console.log(message) }

/*2.Convert the following named function to an arrow function:
            function createMultplication (number1, number2) {
                      let result = number1 * number2
                      return result*/
const createMultplication = (number1, number2) => {
    let result = number1 * number2
    return result
}
/*3.Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], 
apply a map to that array and pass as an argument the named 
function shown in the previous exercise. Show by console the
 new array obtained.*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const map = (arreglo, funcion) => {
    let mapeo = arreglo.map(funcion)
}
console.log(map(array, createMultplication))

/*4 . Generate a function that receives an array of beers 
as a parameter and returns a new array with the 10 most 
alcoholic beers.*/
function mostAlcohol(chelitas) {
    let strong = chelitas.sort(chelitas.abv)
    strong = strong.slice(0, 10)
    console.log(strong)
    return strong
}
mostAlcohol(chelitas)

/*5. Generate a function that receives 
an array of beers as a parameter and returns a new 
array with the 10 least bitter beers.*/
function lessBitter(chelitas) {
    let lessBitter = chelitas.sort(chelitas.ibu).reverse()
    lessBitter = lessBitter.slice(0, 10)
    console.log(lessBitter)
    return lessBitter
};
lessBitter(chelitas)

/*6. Generate a function that receives as parameters
 an array of beers and a name of a beer. The function
  should return the complete object that matches the name entered.*/
  function findBeerByName(beers, beerIpa) {
    const foundBeer = beers.find(beer => beer.name === beerIpa);
    return foundBeer || null;
  }
  const resulT = findBeerByName(beerArray, 'Stout');
  console.log(resulT);



/*7.Generate a function that receives as a parameter an array of beers, a value
 and that returns the first object whose ibu property is equal to the entered value,
  in case there is no beer with that ibu that displays a message in the console that says 
  “ There is no beer with an ibu of (value entered).”*/



function findBeerByIbu(beers, ibuValue) {
    const foundBeer = beers.find(beer => beer.ibu === ibuValue);
    if (foundBeer) {
      return foundBeer;
    } else {
      console.log(`There is no beer with an ibu of ${ibuValue}.`);
      return null;
    }
  }  
  const result = findBeerByIbu(beerArray, 40);
  console.log(result);
  

/*8. Generate a function that receives the name of a beer as a parameter 
and returns the position in the array of that beer. If the beer is not found, 
a message must be printed through the console saying “(Name of the beer entered) does not exist.”*/
function findBeer(cervezas, nombres) {
    let mensaje = `$(nombre) does not exist`;
    for (let i = 0; i < cervezas.length; i++) {
        if (cerveza[i].name == nombre) {
            mensaje = "La cerveza se encuentra en la posición ${i+1} del arreglo."
        }
    }
}

function findBeerPositionByName(beers, beerApa) {
    const beerIndex = beers.findIndex(beer => beer.name === beerApa);
    if (beerIndex !== -1) {
      return beerIndex;
    } else {
      console.log(`${beerName} does not exist.`);
      return null;
    }
  }
   const resultado = findBeerPositionByName(beerArray, 'Stout');
  console.log(resultado);  

/*9. Generate a function that receives as a parameter the array of beers and 
an alcohol value. The function must return a new array with the beers that do 
not exceed the alcohol level. Each element of the new array must be an object 
that has the properties name, alcohol (abv) and "bitterness" (ibu)*/
function filterBeersByAlcohol(beers, maxAlcohol) {
    const filteredBeers = beers.filter(beer => beer.abv <= maxAlcohol);
    const simplifiedBeers = filteredBeers.map(beer => ({ name: beer.name, alcohol: beer.abv, bitterness: beer.ibu }));
  
    return simplifiedBeers;
  }  
  const resul = filterBeersByAlcohol(beerArray, 7.0);
  console.log(resul);
  

/*10. Generate a function that receives as parameters an array of beers, a property 
name and a boolean value. It should return a new array with 10 beers ordered by the 
property entered as the second argument, ascending if the third is true or descending if it is false.*/
function sortBeers(beers, propertyDD, ascending) {
    const sortedBeers = [arrayBeers];
  
    sortedBeers.sort((a, b) => {
      const aValue = a[propertyDD];
      const bValue = b[propertyDD];
  
      if (ascending) {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return sortedBeers.slice(0, 10);
  }
   
  const ascendingResult = sortBeers(beerArray, 'ABV', true);
  console.log('Ascending Order:', ascendingResult);
  
  const descendingResult = sortBeers(beerArray, 'ibu', false);
  console.log('Descending Order:', descendingResult);
  


/*11. Generate a function that receives as a parameter an array of beers and an 
id of an HTML element where the table will be printed. The function must render 
(render, draw, paint, fill, etc.) in an html file a table that contains 
the columns "Name", "ABV", "IBU", and one row for each element of the array. 
Each row must have the data requested for each of the beers.*/

const tabla = document.getElementById('cuerpoTabla')
console.log(tabla)

function crearFilas (beers){
    const tr = document.createElement ('tr')
    const tdName = document.createElement ('td')
    const tdIbu = document.createElement ('td')
    const tdAbv = document.createElement ('td')

    tdName.textContent=beers.name
    tdName.classList.add('miClase')
    tdIbu.textContent=beers.ibu
    tdIbu.classList.add('miClase')
    tdAbv.textContent=beers.abv
    tdAbv.classList.add('miClase')

    tr.append(tdName,tdIbu,tdAbv)
    return tr
}
function completarTabla (cervezas, tabla){
    let fragment = document.createDocumentFragment()
    for (const cerveza of cervezas) {
        const tr = crearFilas(cerveza)
        fragment.appendChild(tr)
        tabla.appendChild(fragment)
    }
  }
  completarTabla(beers, tabla)
//