export class ExecutorService {

    delays(delay) {
        this._delay = delay;
    }

    run(runner) {
        this._interval = setInterval(() => runner(), this._delay);
    }

    stop() {
        clearInterval(this._interval);
    }
}