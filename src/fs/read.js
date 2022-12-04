import * as fs from 'fs'

const read = async () => {
	fs.readFile('src/fs/files/fileToRead.txt', 'utf-8', (err, data) => {
		if (data) console.log(data)
		if (err) console.log('FS operation failed')
	})
}

await read()
