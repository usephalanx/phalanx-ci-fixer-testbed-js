const { createProcessor } = require('../src/paddle_webhook');

describe('paddle webhook seat provisioning', () => {
  test('grants seats once for a completed transaction', () => {
    const p = createProcessor();
    p.handleEvent({
      id: 'evt_1',
      type: 'transaction.completed',
      data: { workspaceId: 'ws_1', seats: 3 },
    });
    expect(p.seatsFor('ws_1')).toBe(3);
  });

  test('is idempotent when Paddle redelivers the same event', () => {
    const p = createProcessor();
    const event = {
      id: 'evt_1',
      type: 'transaction.completed',
      data: { workspaceId: 'ws_1', seats: 3 },
    };
    p.handleEvent(event);
    p.handleEvent(event); // Paddle retry — same event id
    expect(p.seatsFor('ws_1')).toBe(3); // one event = one grant, not 6
  });
});
