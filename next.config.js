
module.exports = {
  reactStrictMode: true,
  trailingSlash: true, // Allow links without .html extension
  async rewrites() {
    return [
      {
        source: '/index/',
        destination: '/',
      },
    ]
  }
}
