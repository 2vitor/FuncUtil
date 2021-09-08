// By Leonardo Machado and lint by atshushi
function verifydm(user) {
  return user.send('').catch((error) => error.message !== 'Cannot send messages to this user');
}

// Usage
(async () => {
  await verifydm('a'); // If it is true then the person's private is turned on. If it is false, it is turned off
})();
