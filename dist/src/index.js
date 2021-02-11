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
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var crypto = __importStar(require("crypto"));
function encrypt(key, input) {
    var keyBuffer = Buffer.from(key);
    var iv = crypto.randomBytes(16);
    var cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, iv);
    var encrypted = Buffer.concat([cipher.update(input, 'utf8'), cipher.final()]);
    var tag = cipher.getAuthTag();
    return Buffer.concat([iv, tag, encrypted]).toString('base64');
}
exports.encrypt = encrypt;
function decrypt(key, input) {
    var keyBuffer = Buffer.from(key);
    var inputBuffer = Buffer.from(input, 'base64');
    var iv = inputBuffer.slice(0, 16);
    var tag = inputBuffer.slice(16, 32);
    var text = inputBuffer.slice(32);
    var decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv);
    decipher.setAuthTag(tag);
    var decrypted = decipher.update(text) + decipher.final('utf8');
    return decrypted;
}
exports.decrypt = decrypt;
//# sourceMappingURL=index.js.map