
import config from "./config/config.json";
console.log(config.name);

import models from "./models/index.js";
const user = new models.User();
const product = new models.Product();
