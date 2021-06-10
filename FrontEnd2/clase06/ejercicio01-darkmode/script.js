
function darkMode() {
    document.querySelector("body").classList.toggle("dark");
}


// [buenas prácticas]
// - el nombre de la funcion debería ser darkMode(), es decir camel Case  --OK

// [desafío]
// - faltó poner en modo dark el titulo --OK
// - hay una forma de aplicar el modo oscuro obteniendo un solo elemento -ok

// [tip]
// agrega la siguiente linea en las propiedades de css del body
// transition: all 300ms linear;
// prueba de nuevo cambiar a modo escuro 😉
// ojo: no es buena practica agregar la propiedad transition al body, pero para tener en cuenta.... --OK

const contenedor= document.querySelector(".contenedor");

function crearNoticia(urlImagen,titulo,contenido) {
    const template = `
<div class="item">
    <img src="${urlImagen}">
    <h2>${titulo}</h2>
    <p>${contenido}</p>
</div>`;
    contenedor.innerHTML+=template;
}


const noticias= [
    {
        titulo: 'El tigre',
        urlImagen: "imagenes/tiger.jpg",
        cuerpoNoticias: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño',
    },
    {
        titulo:'El Leon',
        urlImagen: "imagenes/leon.jpg",
        cuerpoNoticias: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
    },
    {
        titulo:'El jaguar',
        urlImagen: "imagenes/jaguar.jpg",
        cuerpoNoticias: 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo)',
    },
    {
        titulo:'El guepardo',
        urlImagen: "imagenes/chita.jpg",
        cuerpoNoticias: 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.',
    }     
];


for (const value of noticias) {
    crearNoticia(value.urlImagen,value.titulo,value.cuerpoNoticias)
};

