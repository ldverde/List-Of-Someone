module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      ['module:react-native-dotenv', {
        "moduleName": "@env",
        "path": ".env",
        "allowlist": ["API_KEY,API_URL"],
      }]
    ],
    presets: ['babel-preset-expo']
  };
};
