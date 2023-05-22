import { BasicGuard } from './basic.guard';

describe('GuardMiddleware', () => {
    it('should be defined', () => {
        expect(new BasicGuard()).toBeDefined();
    });
});
