import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import { drawOscilloscope } from "./oscilloscope";

let deck = new Reveal({
  plugins: [Markdown],
});

deck.initialize();
drawOscilloscope();