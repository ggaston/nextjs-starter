module.exports = {
  ci: {
    collect: {
      staticDistDir: "out",
      numberOfRuns: 2
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
