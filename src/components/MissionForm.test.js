import React from 'react';
import { render } from '@testing-library/react';
import MissionForm from './MissionForm'

test("Mission renders properly", () => {
    const mockGetData = jest.fn();

    const { getByText, queryByText } = render(
        <MissionForm getData={mockGetData} isFetchingData={false} />
    );

    getByText(/get data/i);

    expect(queryByText(/we are fetching data/i)).toBeNull();
});


test("MissionForm trans state", () => {
    const mockGetData = jest.fn();
    const { getByText, queryByText, rerender } = render(
        <MissionForm getData={mockGetData} isFetchingData={false} />
    );

    getByText(/get data/i);
    expect(queryByText(/we are fetching data/i)).toBeNull();

    rerender(
        <MissionForm getData={mockGetData} isFetchingData={true} />
    );

    getByText(/we are fetching data/i);
    
    expect(queryByText(/get data/i)).toBeNull();
})