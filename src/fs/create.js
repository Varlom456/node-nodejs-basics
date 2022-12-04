import * as fs from 'fs'

const create = async () => {
	fs.writeFile('src/fs/files/text.txt', 'I am fresh and young', err => {
		if (err) console.log('FS operation failed')
	})
}

await create()
