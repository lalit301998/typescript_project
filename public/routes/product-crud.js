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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteproduct = exports.updateproduct = exports.createProduct = exports.getProductList = void 0;
var ProductService = __importStar(require("../product-crud.service"));
var getProductList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ProductService.getAllProducts()];
            case 1:
                productList = _a.sent();
                console.log("in get " + JSON.stringify(productList));
                try {
                    res.status(200).send();
                }
                catch (e) {
                    res.status(404).send(e.message);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getProductList = getProductList;
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, productCode, productName, prodRating, proddescription, id;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, productCode = _a.productCode, productName = _a.productName, prodRating = _a.prodRating, proddescription = _a.proddescription, id = _a.id;
                return [4 /*yield*/, ProductService.createProducts({
                        proddescription: proddescription,
                        prodRating: prodRating,
                        productName: productName,
                        productCode: productCode,
                        id: id,
                    })];
            case 1:
                _b.sent();
                try {
                    res.status(200).send({
                        message: 'Successfully added',
                        IsSuccess: true,
                        result: '',
                    });
                }
                catch (e) {
                    res.status(404).send(e.message);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
var updateproduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                product = req.body;
                return [4 /*yield*/, ProductService.updateProducts(product)];
            case 1:
                _a.sent();
                try {
                    res.status(200).send({
                        message: 'Successfully updated',
                        IsSuccess: true,
                        result: '',
                    });
                }
                catch (e) {
                    res.status(404).send(e.message);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.updateproduct = updateproduct;
var deleteproduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productID;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productID = req.body['id'];
                return [4 /*yield*/, ProductService.deleteProducts(productID)];
            case 1:
                _a.sent();
                try {
                    res.status(200).send({
                        message: 'Successfully deleted',
                        IsSuccess: true,
                        result: '',
                    });
                }
                catch (e) {
                    res.status(404).send(e.message);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.deleteproduct = deleteproduct;
