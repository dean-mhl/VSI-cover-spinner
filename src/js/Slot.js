import Reel from "./Reel.js";
import Symbol from "./Symbol.js";
import WarpSpeed from "./warpspeed.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), '9780199532155'],
    ];

    this.nextSymbols = [
      ['9780199532155', '9780199532155', '9780199532155'],
      ['9780199532155', '9780199532155', '9780199532155'],
      ['9780199532155', '9780199532155', '9780199532155'],
      ['9780199532155', '9780199532155', '9780199532155'],
      ['9780199532155', '9780199532155', '9780199532155'],
    ];


    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    // this.autoPlayCheckbox = document.getElementById("autoplay");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }
  }

  spin() {
    this.onSpinStart();

    const x = new WarpSpeed("canvas",'{"speed":27,"targetSpeed":2,"speedAdjFactor":0.01,"density":0.7,"shape":"square","warpEffect":true,"warpEffectLength":5,"depthFade":false,"starSize":3,"backgroundColor":"#000000","starColor":"#FFFFFF"}'
);


    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ];

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd());
  }

  onSpinStart() {
    this.spinButton.disabled = true;

    console.log("SPIN START");
  }

  onSpinEnd() {
    this.spinButton.disabled = false;

  var imgs = document.querySelectorAll("div.icons img");
  imgs.forEach(function(el) {
    var url = el.src;
    console.log(url);
    var file = url.match(/([^\/]+)(?=\.\w+$)/)[0];
    var wrapper = document.createElement('a');
    wrapper.title = "learn more about this title";
    wrapper.href = "https://mvlc.ent.sirsi.net/client/en_US/andover/search/results?te=ILS&qu=ISBN=" + file;
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });


    console.log("SPIN END");
/*
    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
*/

  }
}
