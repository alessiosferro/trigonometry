const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const degrees = await new Promise((resolve) => {
        rl.question('Enter the degrees: ', resolve);
    })

    console.log(`${degrees}° / 360° * 2π = `, `${(degrees / 360 * 2 * Math.PI).toFixed(4)} rad`);

    rl.close(degrees);
})();

rl.on('close', () => {
    console.log('Thank you for using my calculator – Alessio Sferro')
    process.exit(0);
})