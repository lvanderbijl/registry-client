var Cache = require('../../../lib/util/Cache'),
    expect = require('chai').expect;

describe('Cache', function () {

    beforeEach(function () {
        this.cache = new Cache();
    });

    describe('Constructor', function () {

        describe('instantiating cache', function () {

            it('should provide an instance of RegistryClient', function () {
                expect(this.cache instanceof Cache).to.be.ok;
            });

            it('should set properties correctly', function () {
                expect(this.cache).to.have.ownProperty('_cache');
                expect(this.cache).to.have.ownProperty('_options');
            });

            it('should inherit LRU cache methods', function () {
                var self = this,
                    lruMethods = [
                    'max', 'lengthCalculator', 'length', 'itemCount', 'forEach',
                    'keys', 'values', 'reset', 'dump', 'dumpLru', 'set', 'has',
                    'get', 'peek', 'del'
                ];

                lruMethods.forEach(function (method) {
                    expect(self.cache._cache).to.have.ownProperty(method);
                });

            });

        });

        it('should have a get prototype method', function () {
            expect(Cache.prototype).to.have.ownProperty('get');
        });

        it('should have a set prototype method', function () {
            expect(Cache.prototype).to.have.ownProperty('set');
        });

        it('should have a del prototype method', function () {
            expect(Cache.prototype).to.have.ownProperty('del');
        });

        it('should have a clear prototype method', function () {
            expect(Cache.prototype).to.have.ownProperty('clear');
        });

        it('should have a reset prototype method', function () {
            expect(Cache.prototype).to.have.ownProperty('reset');
        });

        it('should have a reset _hasExpired method', function () {
            expect(Cache.prototype).to.have.ownProperty('_hasExpired');
        });

        it('should have a reset _getFile method', function () {
            expect(Cache.prototype).to.have.ownProperty('_getFile');
        });

    });

});
