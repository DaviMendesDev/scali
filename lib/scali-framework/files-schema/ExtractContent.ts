import ScaliFile from "./ScaliFile";
import fs from 'fs';

export default class ExtractContent {
    static extract(file: ScaliFile): string {
        const content = fs.readFileSync(file.getPath(), 'utf8');

        return content;
    }
}