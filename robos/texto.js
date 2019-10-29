var algorithmia = require("algorithmia");


async function robo(content) {

    await buscarTextoWikipedia(content)

    async function buscarTextoWikipedia(content) {

            const input = {
                "articleName": content.argumentoBusca,
                "lang": 'pt'
            }

            const client = await algorithmia("simnay8M5FJuv/pIQJ44uNb3D4/1");
            const algoritimoWikipedia = await client.algo('web/WikipediaParser/0.1.2');
            const wikipediaResponse = await algoritimoWikipedia.pipe(input)
            
            content.conteudoOriginal = await wikipediaResponse.get().content

       
    }

}

module.exports = robo;