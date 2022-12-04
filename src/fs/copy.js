import * as fs from 'fs'

const dir = 'src/fs/files'
const dirCopy = 'src/fs/files_copy'


const copy = async () => {
// проверяем наличие папки
    fs.access(dirCopy, (err) => {
        if (err) {
            //    создаем дирикторию для файлов
            fs.mkdir(dirCopy, {recursive: true}, (err) => {
            });
        } else {
            console.log("FS operation failed");
        }
// находим имена файлов в папке files
        fs.readdir(dir, (err, data) => {
            if (err) console.log("FS operation failed");
            data.forEach(file => {
                // добалвяем файл в созданную папку files_copy
                fs.copyFile(`${dir}/${file}`, `${dirCopy}/${file}`, err => {
                    if (err) console.log('FS operation failed')
                })
            });
        });
    });

};

await copy();

