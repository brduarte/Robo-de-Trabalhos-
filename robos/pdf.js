const pdf = require('pdfkit');
const fs = require('fs');

function robo(content) {

    gerarPdf(content);

    function gerarPdf(content) {

        const doc = new pdf({
            autoFirstPage: false
        });

        doc.pipe(fs.createWriteStream('pdf/' + content.argumentoBusca + '.pdf'));


        const capa = doc.addPage({
            margins: {
                top: 72,
                bottom: 72,
                left: 72,
                right: 72
            },
        });
        capa.font('Times-Roman');
        capa.text('NOME DA INSTITUIÇÃO', {
            align: 'center'
        });
        capa.text('NOME DO CURSO', {
            align: 'center'
        });
        capa.moveDown(3);
        capa.text('NOME DO AUTOR', {
            align: 'center',
        });
        capa.moveDown(4);
        capa.text('TÍTULO DO TRABALHO', {
            align: 'center',
        });
        capa.text('SUBTITULO', {
            align: 'center'
        });


        const conteudo = doc.addPage();
        conteudo.text(content.conteudoOriginal,{
            align: 'justify'
        });


        // Finaliza PDF
        doc.end();

    }

}

module.exports = robo;
