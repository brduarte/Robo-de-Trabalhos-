readline = require('readline-sync');

function entradasDoUsuario(content) {
    
    content.argumentoBusca = inputText();
    content.prefixoSelecionado = inputPrefix();

    function inputText() {
        return readline.question('Digite um termo do Wikipedia: ');
    }

    function inputPrefix(content) {
        const prefixs = ['Quem e', 'O que e', 'A historia de'];
        const prefixSelecionado = readline.keyInSelect(prefixs);
        const textoPrefix = prefixs[prefixSelecionado];
        return textoPrefix;
    }

}

module.exports = entradasDoUsuario;