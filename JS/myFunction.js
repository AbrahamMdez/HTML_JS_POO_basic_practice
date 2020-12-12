import curse from './maths.js';

//Actua en el id Course que esta en el section.
const element = document.querySelector('section#courses');

//Creamos una funcion flecha, con un atributo course.
const printCourse = course => {
    //Crea un elemento articulo
    const son = document.createElement('article');

    //Aqui decimos introduce todo esto en la constante son
    son.innerHTML = 
    `<img src="${course.getCover()}" alt="imagen portada curso HTML">
    <h3> Name: ${course.getName()} </h3>
    <h5> Maths: ${course.getMath()} </h5>`;

    //Aqui le decimos a la cons element (que esta en una seccion nombrada por el id)
    //que introduzca esos articles llamados son.
    element.appendChild(son);
}

printCourse(html);
printCourse(css);








    //`<img src="${css.getCover()}" alt="imagen portada curso CSS">
    //<h3> Name: ${css.getName()} </h3>
    //<h5> Maths: ${css.getMath()} </h5>`;