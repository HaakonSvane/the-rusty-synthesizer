import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMarkdown from "reveal.js/plugin/math/math.esm.js"
import { drawOscilloscope } from "./oscilloscope";

let deck = new Reveal({
  plugins: [Markdown, RevealMarkdown.MathJax3],
});

deck.initialize();

drawOscilloscope();