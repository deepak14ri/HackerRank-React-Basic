import React from 'react';
import App from './App';
import {render, fireEvent, cleanup, within, getNodeText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup()
});

const renderApp = () => render(<App />);

test('initial UI is rendered as expected', () => {
    let { getByTestId } = renderApp();

    const countryOptionsDropdown = within(getByTestId('country-options')).getByTestId("dropdown");
    const languageOptionsDropdown = within(getByTestId('language-options')).getByTestId("dropdown");
    const countrySelected = getByTestId('country-selected');
    const languageSelected = getByTestId('language-selected');

    expect(getNodeText(countrySelected).trim()).toEqual('Country Selected:');
    expect(getNodeText(languageSelected).trim()).toEqual('Language Selected:');
    expect(countryOptionsDropdown.children.length).toEqual(10);
    expect(languageOptionsDropdown.children.length).toEqual(5);
});

test('Country dropdown selection works', () => {
    let { getByTestId } = renderApp();

    const countryOptionsDropdown = within(getByTestId('country-options')).getByTestId("dropdown");

    fireEvent.change(countryOptionsDropdown, {
        target: { value: "USA" },
    });

    const countrySelected = getByTestId('country-selected');

    expect(getNodeText(countrySelected).trim()).toEqual('Country Selected: USA');
});

test('Language dropdown selection works', () => {
    let { getByTestId } = renderApp();

    const languageOptionsDropdown = within(getByTestId('language-options')).getByTestId("dropdown");

    fireEvent.change(languageOptionsDropdown, {
        target: { value: "English" },
    });

    const languageSelected = getByTestId('language-selected');

    expect(getNodeText(languageSelected).trim()).toEqual('Language Selected: English');
});

test('Perform series of operations', () => {
    let { getByTestId } = renderApp();

    const countryOptionsDropdown = within(getByTestId('country-options')).getByTestId("dropdown");
    const languageOptionsDropdown = within(getByTestId('language-options')).getByTestId("dropdown");

    fireEvent.change(countryOptionsDropdown, {
        target: { value: "India" },
    });

    fireEvent.change(languageOptionsDropdown, {
        target: { value: "German" },
    });

    let countrySelected = getByTestId('country-selected');
    let languageSelected = getByTestId('language-selected');

    expect(getNodeText(countrySelected).trim()).toEqual('Country Selected: India');
    expect(getNodeText(languageSelected).trim()).toEqual('Language Selected: German');

    fireEvent.change(countryOptionsDropdown, {
        target: { value: "France" },
    });

    fireEvent.change(languageOptionsDropdown, {
        target: { value: "French" },
    });

    countrySelected = getByTestId('country-selected');
    languageSelected = getByTestId('language-selected');

    expect(getNodeText(countrySelected).trim()).toEqual('Country Selected: France');
    expect(getNodeText(languageSelected).trim()).toEqual('Language Selected: French');
});