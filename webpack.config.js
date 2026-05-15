import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",          // Mode dev pour tester
  entry: "./src/index.js",      // Point de depart 
  output: {
    filename: "main.js",        // Nom du bundle 
    path: path.resolve(__dirname, "dist"), // Dossier de sortie
    clean: true,                // Nettoie dist avant chaque build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // squelette HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,       // tous les fichiers .css
        use: ["style-loader", "css-loader"], // loaders à appliquer
      },
    ],
  },
};
