import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ListBreadcrumbs from "./ListBreadcrumbs";

configure({ adapter: new Adapter() });

describe('ListBreadcrumbs Tests', () => {
    const breadCrumbs = ['item 1', 'item 2', 'item 3'];

    it('should render breadcrumbs with number of items', () => {
       const breadCrumbs = ['item 1', 'item 2', 'item 3'];
       const wrapper = mount(
         <ListBreadcrumbs breadcrumbs={breadCrumbs} onBreadcrumbSelection={() => {}}/>
       );

        expect(wrapper.find('[data-test-id="breadcrumb-tracker"] li')).toHaveLength(3);
    });

    it('should fire action', () => {
        const props = { onBreadcrumbSelection: jest.fn() };
        const wrapper = mount(
            <ListBreadcrumbs {...props} breadcrumbs={breadCrumbs}/>
        );

        wrapper.find('[data-test-id="breadcrumb-tracker-button-1"]').simulate('click');

        expect(props.onBreadcrumbSelection).toBeCalled();
    });
});