import 'jest-preset-angular/setup-jest';
import './__mocks__/globalMocks';

Object.defineProperty(global, 'Promise', {
  writable: false,
  value: global.Promise,
});
