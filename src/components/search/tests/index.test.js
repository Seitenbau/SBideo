import { h, Component } from 'preact';
import Search from '../index.js';
import { Link } from 'preact-router/match';
import { shallow, deep } from 'preact-render-spy';
import testTree from './testdata.json';

describe('Initial Test of the Header', () => {
  test('Header renders 3 nav items', () => {
    const context = shallow(<Search />);
    console.log(context);
    // console.log(search.walkdata(testTree));
    // expect(context.find('h1').text()).toBe('Preact App');
    // expect(context.find(<Link />).length).toBe(3);
  });
});
