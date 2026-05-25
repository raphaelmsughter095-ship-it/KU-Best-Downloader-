services:
  - type: web
    name: ku-best-downloader
    runtime: python
    buildCommand: |
      pip install yt-dlp
      npm install
    startCommand: node server.js
    envVars:
      - key: ADMIN_PIN
        value: 111222
      - key: NODE_ENV
        value: production
