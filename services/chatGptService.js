const { OpenAI } = require('openai');
let logger = require('../utils/logger');

class ChatGptService {
  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async ask(prompt) {
    try {
      logger.info(`Calling OpenAI with prompt: ${prompt}`);
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      });

      const message = completion?.choices?.[0]?.message?.content;
      return message || "No response from OpenAI.";
    } catch (error) {
      logger.error(`OpenAI Error: ${error.message}`, { stack: error.stack });
      throw error;
    }
  }

}

module.exports = ChatGptService;
