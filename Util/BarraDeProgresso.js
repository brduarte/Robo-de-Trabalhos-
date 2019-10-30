const cliProgress = require('cli-progress');

function barraProgresso() {

    const barra = new cliProgress.SingleBar({
        // format: 'CLI Progress |' + _colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });

    barra.start(20,0,{
        speed: "N/A"
    });

    barra.increment();
    barra.update(20);


    barra.stop();

}

module.exports = barraProgresso;