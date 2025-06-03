module.exports = {
  name: "AutoBoldDesu",
  description: "Automatically bolds messages and adds 'desu' to the end",
  version: "1.0.0",

  start() {
    console.log("AutoBoldDesu plugin loaded.");
  },

  onSendMessage(message) {
    if (!message || typeof message !== 'string') return message;
    const trimmed = message.trim();
    const alreadyFormatted = trimmed.startsWith("**") && trimmed.endsWith("**");
    let formatted = alreadyFormatted ? trimmed : `**${trimmed}**`;
    if (!formatted.toLowerCase().endsWith("desu")) {
      formatted += " desu";
    }
    return formatted;
  }
};
