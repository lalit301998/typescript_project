"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductRules = void 0;
var express_validator_1 = require("express-validator");
var createProductRules = function () {
    return [
        (0, express_validator_1.body)('id').isNumeric().exists(),
        (0, express_validator_1.body)('productName').exists(),
        (0, express_validator_1.body)('productCode').exists(),
        (0, express_validator_1.body)('proddescription').exists(),
        (0, express_validator_1.body)('prodRating').exists(),
    ];
};
exports.createProductRules = createProductRules;
