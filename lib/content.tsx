import path from 'path'
import fs from 'fs'
import { micromark } from 'micromark'
import matter from 'gray-matter'

interface FileProps {
    path: string
    filename: string
}

const contentDirectory = path.join(process.cwd(), 'content/pages')


//TODO: use Memo here?
/**
 * Collect all markdown files and paths to them
 * @param directoryPath 
 * @param fileList 
 * @returns array of file paths and names
 */
export async function getContentMap(directoryPath = contentDirectory, fileProps:FileProps[]=[], dirPath = ''): Promise<FileProps[]> {
    const files = fs.readdirSync(directoryPath)

    files.forEach((file) => {
        if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
             getContentMap(`${directoryPath}/${file}`, fileProps, dirPath + file + '/')
        } else {
            const extension = path.extname(file);
            if (extension === '.md') {
                fileProps.push({
                    path: '/' + dirPath,
                    filename: path.basename(file, extension)
                })
            }
        }
    })

    return fileProps
}

export async function getContent(pathToFile) {
    const fullPath = path.join(contentDirectory, `${pathToFile}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const {data, content} = matter(fileContents)

    const text = micromark(content, 'utf8', {
        allowDangerousHtml: true
    })

    return {
        mdData: {
            data: data,
            content: text
        }
    }
}
