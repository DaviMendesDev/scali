export default abstract class ScaliFile {
    protected abstract path: string;
    abstract getPath(): string;
    abstract setPath(path: string): void;
    abstract getContent(): any;
}