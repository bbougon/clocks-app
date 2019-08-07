import React from "react";
import "jest-dom/extend-expect";
import Clocks from '../clocks';
import {MemoryRepositories} from "../../infrastructure/repositories/__test__/memory-repositories";
import {Clock} from "../../domain/clock";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ExecutorService} from "../../infrastructure/executors/executor-service";

Enzyme.configure({adapter: new Adapter()});

let delay;

class FakeExecutorService extends ExecutorService {

    delays(del) {
        delay = del;
    }

    run(runner) {
        runner();
    }
}

describe('Clocks', function () {

    it('should load clocks once component has been mounted', async () => {
        let memoryRepositories = new MemoryRepositories();
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));
        let executorService = new FakeExecutorService();

        let wrapper = mount(<Clocks repositories={memoryRepositories} executorService={executorService}/>);
        await wrapper.instance().componentDidMount();

        expect(delay).toBe(60000);
        let clocks = wrapper.instance().state.clocks;
        expect(clocks).toHaveLength(3);
        expect(clocks[0]._date).toBe('01/01/1970 09:00');
    });
});