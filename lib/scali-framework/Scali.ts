import Config from "./config/Config";

export module ScaliFramework {

    export class Scali {
        private config?: Config;

        constructor (private args: string[]) {
            this.mount();
        }

        public run() {
            // TODO: finish the run with args method
        }

        public fetch() {
            // TODO: fetch with the server
        }

        private mount() {
            if (! this.config)
                this.config = new Config();
            
            this.config.mount();
        }
    }
}

export default ScaliFramework.Scali;