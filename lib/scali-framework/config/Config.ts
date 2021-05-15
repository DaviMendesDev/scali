import ScaliConfigurationFile from "../files-schema/ScaliConfigurationFile";

export default class Config {
    private configFile: ScaliConfigurationFile = new ScaliConfigurationFile();

    public mount() {
        const configContent = this.configFile.getContent();

        configContent;
    }

    private mountThisContent(content: any) {

    }

    public getConfigurationFile(): ScaliConfigurationFile {
        return this.configFile;
    }
}