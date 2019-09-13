//Correr un proceso en node que pase como argumento en ese proceso una variable de entorno.
//Seguir las convenciones de nombres.
//Quiero que el proceso mire la variable de entorno que recibió y me envíe un mensaje. Como condición tiene que haber dos variables de entorno.


//opción de Ro
const env = process.argv[2];

const message = (environment) => {
    if (environment === 'ENV_DEV') console.log ('El entorno es de desarrollo'); 
    else if (environment === 'ENV_PROD') console.log('El entorno es de producción'); 
    else console.log('Variable de entorno desconocida');
}
//message(env);

//opción de Mike
const evalParam = (param, environment) => {
    let aux = environment === 'prod' ? 'en producción' : 'en desarollo'
    switch(param) {
        case 'queso':
            console.log(`es un lácteo ${aux}`)
            break;
        case 'bife':
            console.log(`no es un lácteo ${aux}`)
            break;
            default:
                console.log('¿Qué de qué?');           
    }
}

evalParam(process.argv[2], process.env.NODE_ENV);



