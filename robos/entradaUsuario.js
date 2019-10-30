const inquirer = require('inquirer');


async function entradasDoUsuario(content) {

    const prompt = inquirer.createPromptModule();

    content.argumentoBusca = await inputText('Qual é o tema do trabalho?');

    content.prefixoSelecionado = await inputList('Selecione uma opção para ajudar na busca:',[
        'O que é?',
        'Quem é?',
        'A História de ...'
    ]);

    async function inputText(label) {

        const response = await prompt({
            type: 'input',
            name: 'value',
            message: label
        });

        return response.value;

    }

    async function inputList(label ,options = []) {

        const response = await prompt({
            type: 'list',
            name: 'value',
            message: label,
            choices: options
        });

        return response.value;

    }


}

module.exports = entradasDoUsuario;