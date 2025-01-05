Welcome to the repository for my personal website! 🚀 This project showcases my work, blog posts, and insights, all in one place. It's built with [Astro](https://astro.build/), a modern framework for creating fast, optimized, content-rich websites.

# Features

- Blog section for sharing posts and tutorials
- About page to highlight my journey and expertise
- Brutalist design for a content-centered experience and a super lightweight website 
- Built with Astro for excellent performance and scalability

# Development

## Getting Started

To run this project locally:

1. Clone the repository:
   
```bash
git clone https://github.com/pablorm296/pabloreyes.com.mx.git
```

2. Install the required dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Deploying using Docker

This website is deployed using Docker for simplicity and reliability. The repository includes a Dockerfile located in the root directory that:

1. Builds the Astro website to generate static files.
2. Uses NGINX to serve the static files.

The NGINX configuration is located at `./server/nginx.conf`.

# Roadmap

- [ ] **Multilingual support (ES/EN):** As a native Spanish speaker, I pragmatically chose to release the first version of my website in English to reach a broader audience. However, I’d love to share content, especially coding tutorials and guides, in Spanish. While Astro makes this implementation straightforward, creating bilingual content will be a labor-intensive process.
- [ ] **Serve the website from a solar-powered computer:** I'm fascinated by [the idea of a low-tech, solar-powered website](https://solar.lowtechmagazine.com/about/the-solar-website/) proposed by LOW←TECH MAGAZINE. In the future, I want to serve this website from a solar-powered computer at home. It would be exciting to know that my digital footprint is at least partially carbon-free.
- [ ] **Play around with an NGINX honeypot:** Why should I trust you if you're requesting `/wp-admin/` or `.env` files to my server :wink:.
- [ ] **Dithered images**: Again drawing inspiration from LOW←TECH MAGAZINE, I want to feature images processed with a dithering algorithm to reduce their size while maintaining a unique aesthetic. Although I’d love to integrate this into Astro’s build process eventually, I’ll likely start by manually dithering each image.
- [ ] **Dark mode:** Because who doesn't love dark mode?
- [ ] **RSS feed:** For those who still use RSS readers.