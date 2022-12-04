const parseEnv = () => {
    for (let env of Object.entries(process.env)) {
        if (env[0].includes('RSS_')) {
            console.log(`${env[0]} = ${env[1]}`);
        }
    }
};

parseEnv();