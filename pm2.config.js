module.exports = {
  apps: [{
    name: 'dove-ui-payment',
    script: 'server.js',
    watch: ['template', 'server.js'],
    watch_delay: 1000,
    ignore_watch: ['node_modules'],
    env_production: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_ENV: 'development'
    },
    log_date_format: 'YYYY-MM-DD HH:mm'
  }]
}