import React from "react";
import 'jest-dom/extend-expect';
import {ExecutorService} from "../executor-service";

describe('Executor service', function () {

    let executorService;

    beforeEach(() => {
        jest.useFakeTimers();
        executorService = new ExecutorService();
        executorService.delays(1);
    });

    afterEach(() => {
       executorService.stop();
    });

    it('starts executor', () => {
        let fn = jest.fn();

        executorService.run(fn);

        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1);
        jest.runOnlyPendingTimers();
        expect(fn).toBeCalled();
    });

    it('stops executor', () => {
        executorService.run(() => {});

        executorService.stop();

        expect(clearInterval).toHaveBeenCalledTimes(1);
    });
});