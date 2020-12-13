import curse from './maths.js';
import teachers from './teachers.js';
import pupils from './pupils.js';

//Actua en el id Course que esta en el section.
const element = document.querySelector('section#courses');
const form = document.querySelector('form#form-course');
const user1= new pupils ('Abraham', 'Menendez', 'amg@gm.es', true, 'html');
const user2 = new pupils ('Adrian', 'Gonzalez', 'adf@gg.com', true, 'css');
const teacher1 = new teachers ('Raquel', 'Romero', 'rr@su.es', true, 'git');
const html = new curse('HTML desde cero', 'img/html.jpg', 7);

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

//Aqui decimos que en el formulario(constante ya creada), escuche al evento submit y hacemos una funcion.
//en el parametro 'e', nos referimos al evento de pulsar send en el boton.
form.addEventListener('submit', e => {
    //prevent defaul lo que hace es detener la activacion de enviar el formulario,
    //sin perjudicar al resto de funciones.
    e.preventDefault();
    //target se refiere a donde recae el evento 'e'.
    const target = e.target;
    const newCourse = new curse (target.cover.value, target.cover.value, target.maths.value);
    printCourse(newCourse);
    form.reset();
});

newCourse.setInscriptions([user1, user2]);











    //`<img src="${css.getCover()}" alt="imagen portada curso CSS">
    //<h3> Name: ${css.getName()} </h3>
    //<h5> Maths: ${css.getMath()} </h5>`;