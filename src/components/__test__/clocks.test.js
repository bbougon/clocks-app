import React from "react";
import "jest-dom/extend-expect";
import Clocks from '../clocks';
import {MemoryRepositories} from "../../infrastructure/repositories/__test__/memory-repositories";
import {Clock} from "../../domain/clock";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Clocks', function () {

    it('should load clocks once component has been mounted', async () => {
        let memoryRepositories = new MemoryRepositories();
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));
        memoryRepositories.clocks().add(new Clock({_date: '1970-01-01T09:00+09:00[Asia/Tokyo]', _zoneId: 'A'}));

        let wrapper = mount(<Clocks repositories={memoryRepositories}/>);
        await wrapper.instance().componentDidMount();

        let clocks = wrapper.instance().state.clocks;
        expect(clocks).toHaveLength(3);
        expect(clocks[0]._date).toBe('01/01/1970 09:00');
    });
});