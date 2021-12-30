"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
var helmet_1 = __importDefault(require("helmet"));
var product_crud_1 = require("./controller/product-crud");
var product_rules_1 = require("./rules/product.rules");
var body_validation_middleware_1 = __importDefault(require("./middlewares/body-validation.middleware"));
//console.log(app,'appapapapa');
//   app.use(bodyParser.json())
dotenv.config();
if (!process.env.PORT) {
    console.log("Error to get ports");
    process.exit(1);
}
var PORT = process.env.PORT || 4000;
var app = (0, express_1.default)();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/product/create', (0, product_rules_1.createProductRules)(), body_validation_middleware_1.default, product_crud_1.createProduct);
app.put('/product/update', product_crud_1.updateproduct);
app.delete('/product/delete', product_crud_1.deleteproduct);
app.get('/product/get', product_crud_1.getProductList);
// Send message for default URL
app.get('/', function (req, res) { return res.send('Welcome to NodeJs App using TypeScript'); });
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
