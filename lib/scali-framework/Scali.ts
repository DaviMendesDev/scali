import Config from "./config/Config";

export module ScaliFramework {

    export class Scali {
        private config?: Config;

        constructor (private args: string[]) {
            this.mount();
        }

        public run() {
            
        }

        public fetch() {
            
        }

        private mount() {
            if (! this.config)
                this.config = new Config();
            
            this.config.mount();
        }
    }
}

export default ScaliFramework.Scali;