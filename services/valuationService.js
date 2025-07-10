const fs = require('fs');
const path = require('path');
const ChatGptService = require('./chatGptService');
const logger = require('../utils/logger');


class ValuationService {
  constructor() {
    this.chatGptService = new ChatGptService();
  }

  async generateValuation(input) {
    const prompt = `Estimate the property value for a ${input.bedrooms}-bedroom, ${input.bathrooms}-bathroom ${input.property_type} home in ${input.suburb}, with erf size of ${input.erf_size_sqm} sqm. Give a price estimate and reasoning.`;

    const gptResponse = await this.chatGptService.ask(prompt);

    const response = {
      valuation_estimate: "R2,450,000 (example)",
      reasoning: gptResponse
    };

    const logData = `INPUT: ${JSON.stringify(input)}\nRESPONSE: ${JSON.stringify(response)}\n`;
    logger.info(logData);

    return response;
  }

  async getAreaData(suburb = "Unknown") {
    const prompt = `Provide a short market summary of the suburb "${suburb}" in terms of property prices, trends, and popular property types. Keep it concise.`;
    try {
      const aiResponse = await this.chatGptService.ask(prompt);
      logger.info(aiResponse);
      const response = {
        suburb,
        summary: aiResponse
      };
      return response;
    } catch (error) {
      logger.warn(`Failed to get AI area data for "${suburb}": ${error.message}`);
       throw error;
    }
  }
}

module.exports = ValuationService;
