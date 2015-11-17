export default {
  environment: process.env.NODE_ENV || 'development',
  virtualHost: process.env.VIRTUAL_HOST,
  gitServiceUrl: process.env.PREDICTION_SERVICE_URL || 'https://api.github.com',
  pratikiServiceUrl: process.env.PRATIKI_SERVICE_URL || 'http://localhost:8000',
  addressServiceUrl: 'viacep.com.br/ws'
};
