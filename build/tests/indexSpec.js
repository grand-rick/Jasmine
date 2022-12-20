"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('Suit to test myFunction', () => {
    it('expect myFunc(5) to equal 25', () => {
        expect((0, index_1.default)(5)).toEqual(25);
    });
    it('expect myFunc(9) to equal 45', () => {
        expect((0, index_1.default)(9)).toEqual(45);
    });
});
