const robos = {
    entradaUsuario: require('./robos/entradaUsuario'),
    texto: require('./robos/texto'),
    pdf: require('./robos/pdf'),
};

async function start() {

    const content = {};

    await robos.entradaUsuario(content);
    await robos.texto(content);
    robos.pdf(content);

}

start();