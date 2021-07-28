import {doTemplate} from './util';

it('templates', () => {
  expect(doTemplate('test {a}', {a: 'works'})).toEqual('test works');
});
