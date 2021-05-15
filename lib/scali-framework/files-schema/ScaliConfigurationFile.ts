import ExtractContent from "./ExtractContent";
import ScaliFile from "./ScaliFile";

export type ObjectMap = {
    [key: string]: string | ObjectMap
}

export default class ScaliConfigurationFile extends ScaliFile {
    protected path: string = this.getRootPath() + '/scali-config.json';
    private content?: ObjectMap;

    public getPath(): string {
        return this.path;
    }

    public setPath(newPath: string): void {
        this.path = newPath;
    }

    public getMainFilePath(): string {
        return process.env.INIT_CWD!;
    }

    public getRootPath(): string {
        return this.getCallingPath();
    }

    public getCallingPath(): string {
        return process.cwd();
    }

    public getContent(): ObjectMap {
        if (! this.content)
            this.setContent();
        
        return this.content!;
    }

    private setContent(): void {
        this.content = ExtractContent.extract(this);
    }
}