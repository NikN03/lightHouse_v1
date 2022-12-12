module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "preload-lcp-image": "off",
        "unused-javascript": "off",
        "csp-xss": "off",
        "categories:performance": ["error", { minScore: 0.9 }],
      },
    },
  },
};
