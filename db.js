const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getDetailsById(msgId) {
  return messages.find((msg) => msg.id === msgId);
}

module.exports = { messages, getDetailsById };
