robos = {
    entradaUsuario: require('./robos/entradaUsuario'),
    texto: require('./robos/texto'),
    pdf: require('./robos/pdf')
}

async function start() {

    const content = {};

    robos.entradaUsuario(content);
    await robos.texto(content);
    robos.pdf(content);

    console.log(content)
}

start();