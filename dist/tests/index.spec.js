"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var KEY = 'gdPfTP7h1hcs1ySGp0vcFwIZVpWfUSqJ';
describe('aes-encryption', function () {
    it('can encrypt and decrypt a string', function () {
        expect(index_1.decrypt(KEY, index_1.encrypt(KEY, 'FooBar'))).toEqual('FooBar');
        expect(index_1.decrypt(KEY, index_1.encrypt(KEY, '👋 🤚 🖐'))).toEqual('👋 🤚 🖐');
    });
    it('does not produce the same output twice', function () {
        var first = index_1.encrypt(KEY, 'FooBar');
        var second = index_1.encrypt(KEY, 'FooBar');
        expect(first === second).toEqual(false);
        expect(index_1.decrypt(KEY, first)).toEqual('FooBar');
        expect(index_1.decrypt(KEY, second)).toEqual('FooBar');
    });
    it('errors for the wrong encryption key when decrypting', function () {
        var encrypted = index_1.encrypt(KEY, 'FooBar');
        expect(function () {
            return index_1.decrypt('AAPfTP7h1hcs1ySGp0vcFwIZVpWfUSAA', encrypted);
        }).toThrowErrorMatchingSnapshot();
    });
    it('errors when a wrong key format is provided', function () {
        var encrypted = index_1.encrypt(KEY, 'FooBar');
        expect(function () {
            return index_1.encrypt('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'FooBar');
        }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.encrypt('AAAAAAAAAAAAAAAAAA', 'FooBar'); }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.encrypt([1, 2, 3], 'FooBar'); }).toThrowErrorMatchingSnapshot();
        expect(function () {
            return index_1.decrypt('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', encrypted);
        }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.decrypt('AAAAAAAAAAAAAAAAAA', encrypted); }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.encrypt([1, 2, 3], 'FooBar'); }).toThrowErrorMatchingSnapshot();
    });
    it('errors when a wrong input format is provided', function () {
        var encrypted = index_1.encrypt(KEY, 'FooBar');
        expect(function () { return index_1.encrypt(KEY, [1, 2, 3]); }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.decrypt(KEY, 'foo' + encrypted); }).toThrowErrorMatchingSnapshot();
        expect(function () { return index_1.decrypt(KEY, [encrypted]); }).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map