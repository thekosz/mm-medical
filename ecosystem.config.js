/**
 * PM2 Ecosystem Config for Garden OB/GYN
 * Run: pm2 start ecosystem.config.js
 * Monitor: pm2 monit
 * Logs: pm2 logs garden-obgyn
 */
module.exports = {
  apps: [
    {
      name: 'garden-obgyn',
      script: 'npm',
      args: 'start',
      cwd: '/home/virusz/Desktop/garden-obgyn-clone',
      env: {
        PORT: 3005,
        NODE_ENV: 'production',
      },
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 1000,
    },
  ],
}
