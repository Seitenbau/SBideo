import { h } from 'preact';
import { Home } from '../index.js';
import { shallow } from 'preact-render-spy';

describe('Test of the Homepage', () => {
  test('Homepage renders the folders component', () => {
    const context = shallow(
      <Home data={{ items: [] }} retrieveData={() => {}} />
    );
    expect(context.find('Folder').length).toBe(1);
  });
});
