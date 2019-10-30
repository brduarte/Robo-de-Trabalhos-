const algorithmia = require("algorithmia");
const {apiKey, wikipedia} = require('../config').algorithmia;


async function robo(content) {

    await buscarTextoWikipedia(content);

    async function buscarTextoWikipedia(content) {

        try {

            console.log('Buscando informações para montar a pesquisa...');

            const input = {
                "articleName": content.argumentoBusca,
                "lang": 'pt',
            };

            const client = await algorithmia(apiKey);
            const algoritimoWikipedia = await client.algo(wikipedia);
            const wikipediaResponse = await algoritimoWikipedia.pipe(input);

            const response = await wikipediaResponse.get();

            content.conteudoOriginal = response.content;

        } catch (e) {
            console.log(e)
        }

    }

}

module.exports = robo;