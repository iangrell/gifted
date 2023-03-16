import { ValuesController } from "./Controllers/ValuesController.js";
import { GiphyController } from "./Controllers/GiphyController.js";
import { SandboxGiphController } from "./Controllers/SandboxGiphController.js";


class App {
  // valuesController = new ValuesController();
  giphyController = new GiphyController();
  sanboxGiphController = new SandboxGiphController();

}

window["app"] = new App();
