import * as fs from 'fs'


const list = async () => {
    fs.readdir('src/fs/files', (err, data) => {
        data.forEach(file => {
            console.log(file);
        });
    });
};

await list();