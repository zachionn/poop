// plugin.js
module.exports = {
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