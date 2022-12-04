import * as fs from 'fs'

const rename = async () => {
	fs.rename(
		'src/fs/files/wrongFilename.txt',
		'src/fs/files/properFilename.txt',
		err => {
			if (err) console.log('FS operation failed')
		}
	)
}

await rename()
