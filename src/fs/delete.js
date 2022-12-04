import * as fs from 'fs'

const remove = async () => {
	fs.unlink('src/fs/files/fileToRemove.txt', err => {
		if (err) console.log('FS operation failed')
	})
}

await remove()
