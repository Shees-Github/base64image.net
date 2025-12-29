# BASE64IMAGE

Free, privacy-focused Base64 image tools for developers and designers.

## 🚀 Deployment

This is a static website served via nginx in a Docker container.

### Prerequisites
- Docker
- Coolify or any Docker hosting platform

### Local Development

Open `public/index.html` in your browser to view the site locally.

### Building

```bash
docker build -t base64image .
docker run -p 8080:80 base64image
```

Visit http://localhost:8080

### Project Structure

```
/
├── public/              # Website files (HTML, CSS, JS)
│   ├── index.html
│   ├── assets/
│   └── [tool pages]
├── Dockerfile           # Docker build configuration
├── nginx.conf           # Nginx server configuration
└── .dockerignore        # Docker build exclusions
```

### Deployment Notes

- **Build Pack**: Dockerfile
- **Port**: 80
- **SSL**: Enabled (via Coolify/hosting platform)

## 📝 License

All website files are served locally in the browser. No data is collected or transmitted.

## 🔒 Privacy

All tools run 100% client-side. Your images and data never leave your device.
