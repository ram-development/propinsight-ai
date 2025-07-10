const ValuationService = require('../services/valuationService');
const logger = require('../utils/logger');

class ValuationController {
  constructor() {
    this.valuationService = new ValuationService();

    this.generateValuation = this.generateValuation.bind(this);
    this.getAreaData = this.getAreaData.bind(this);
  }

  async generateValuation(req, res, next) {
    try {
      const response = await this.valuationService.generateValuation(req.body);
      res.json(response);
    } catch (error) {
      logger.error(`Valuation error: ${error.message}`);
      next(error); 
    }
  }

  async getAreaData(req, res, next) {
   try {
      const suburb = req.query.suburb || "Unknown";
      const response = await this.valuationService.getAreaData(suburb);
      res.json(response);
    } catch (error) {
      logger.error(`Area data error: ${error.message}`);
      next(error);
    }
  }
}

module.exports = new ValuationController();
