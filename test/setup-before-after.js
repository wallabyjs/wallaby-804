/* eslint-env jest */
// Replace console.error during tests to raise an exception, causing the tests to fail.

function mockError(err) {
    throw new Error(err);
}

/* eslint-disable no-console */
const realError = console.error;

beforeEach(() => {
    console.error = mockError;
});

afterEach(() => {
    console.error = realError;
});
/* eslint-enable no-console */