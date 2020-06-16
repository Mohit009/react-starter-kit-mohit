const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");

module.exports = ({ config }) => {
  config.module.rules.exclude = /node_modules/;
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: path.resolve(__dirname, "../tsconfig.json"),
          reportFiles: ["src/**/*.{ts,tsx}"],
          transpileOnly: true
        }
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader", "sass-loader"]
  });
  config.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"]
  });
  config.module.rules.exclude = [/node_modules/];
  config.resolve.extensions.push(".ts");
  config.resolve.extensions.push(".tsx");
  config.resolve.extensions.push(".scss");
  config.resolve.extensions.push(".css");
  return config;
};
