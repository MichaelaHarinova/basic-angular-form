import { Friend } from './friend';

describe('Friend', () => {
  it('should create an instance', () => {
    expect(new Friend( '', '', '', 0, '')).toBeTruthy();
  });
});
