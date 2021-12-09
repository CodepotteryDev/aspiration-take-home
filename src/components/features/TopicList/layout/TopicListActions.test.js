import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TopicListActions from "./TopicListActions";

configure({ adapter: new Adapter() });

describe('TopicListActions Tests', () => {

    it('should show actions', () => {
        const wrapper = mount(
            <TopicListActions showListActions={true} onShowMoreItems={() => {}}/>
        );

        expect(wrapper.find('[data-test-id="list-actions-container"]').exists()).toBe(true);
    });

    it('should hide actions', () => {
        const wrapper = mount(
            <TopicListActions showListActions={false} onShowMoreItems={() => {}}/>
        );

        expect(wrapper.find('[data-test-id="list-actions-container"]').exists()).toBe(false);
    });

    it('should fire action', () => {
        const props = { showListActions: true, onShowMoreItems: jest.fn() };
        const wrapper = mount(
            <TopicListActions {...props}/>
        );

        wrapper.find('[data-test-id="reset-button"]').simulate('click');

        expect(props.onShowMoreItems).toBeCalled();
    });
});