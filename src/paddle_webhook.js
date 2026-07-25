// Minimal Paddle webhook processor for the seat-billing demo.
//
// Grants workspace seats when a transaction completes. Paddle retries webhook
// deliveries, so the same event id can arrive more than once — provisioning
// must be idempotent: one event means one grant, no matter how many times it
// is delivered.

function createProcessor() {
  const seatsByWorkspace = new Map();
  const processedEvents = new Set();

  function handleEvent(event) {
    if (event.type !== 'transaction.completed') {
      return { granted: false, reason: 'ignored' };
    }
    if (processedEvents.has(event.id)) {
      return { granted: false, reason: 'duplicate' };
    }
    processedEvents.add(event.id);

    const workspaceId = event.data.workspaceId;
    const seats = event.data.seats || 1;
    const current = seatsByWorkspace.get(workspaceId) || 0;
    seatsByWorkspace.set(workspaceId, current + seats);
    return { granted: true, seats };
  }

  function seatsFor(workspaceId) {
    return seatsByWorkspace.get(workspaceId) || 0;
  }

  return { handleEvent, seatsFor };
}

module.exports = { createProcessor };
