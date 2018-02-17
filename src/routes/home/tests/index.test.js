import { h } from 'preact';
import Home from '../index.js';
import { shallow } from 'preact-render-spy';

describe('Test of the Homepage', () => {
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise(resolve => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return { Id: '123' };
          }
        });
      });
      return p;
    });
  });

  test('Homepage renders the 3 main components', () => {
    const context = shallow(<Home />);
    expect(context.find('Search').length).toBe(1);
    expect(context.find('Folder').length).toBe(1);
    expect(context.find('VideoContainer').length).toBe(1);
  });
});
