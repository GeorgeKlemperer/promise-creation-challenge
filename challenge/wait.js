function wait(ms) {
  const promise = new Promise((resolve) => {
    // Fixed syntax for creating a new Promise
    setTimeout(resolve, ms);
  });
  return promise; // You should return the promise so that it can be used elsewhere
}

module.exports = { wait };
