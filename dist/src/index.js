"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var randomBytes = require('crypto').randomBytes;
var createCipheriv = require('crypto').createCipheriv;
var createDecipheriv = require('crypto').createDecipheriv;
function encrypt(key, input) {
    var keyBuffer = Buffer.from(key);
    var iv = randomBytes(16);
    var cipher = createCipheriv('aes-256-gcm', keyBuffer, iv);
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
    var decipher = createDecipheriv('aes-256-gcm', keyBuffer, iv);
    decipher.setAuthTag(tag);
    var decrypted = decipher.update(text) + decipher.final('utf8');
    return decrypted;
}
exports.decrypt = decrypt;
//# sourceMappingURL=index.js.map