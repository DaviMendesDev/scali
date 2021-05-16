import ScaliConfigurationFile from "../files-schema/ScaliConfigurationFile";
import fs from 'fs';

export default class Config {
    private configFile: ScaliConfigurationFile = new ScaliConfigurationFile();

    public mount() {
        this.configFile.mountAttributes();
    }

    public getConfigurationFile(): ScaliConfigurationFile {
        return this.configFile;
    }

    public attributes(attrName: string) {
        return this.configFile.attributes(attrName);
    }
}