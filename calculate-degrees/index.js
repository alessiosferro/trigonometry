const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const radians = await new Promise(resolve => {
        rl.question("Enter radians: ", resolve);
    })

    console.log(`${radians} * 360° / 2π = ${Math.round((radians * 360) / (2 * Math.PI))}°`)

    rl.close();
})()

rl.on('close', () => {
    console.log('Thank you for using my calculator! – Alessio Sferro');
    process.exit(0);
});