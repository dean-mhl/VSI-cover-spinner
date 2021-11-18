import Slot from "./Slot.js";
import WarpSpeed from "./warpspeed.js";

const config = {
  inverted: false, // true: reels spin from top to bottom; false: reels spin from bottom to top
};

const slot = new Slot(document.getElementById("slot"), config);

const x = new WarpSpeed("canvas",'{"speed":25,"targetSpeed":2,"speedAdjFactor":0.01,"density":0.7,"shape":"square","warpEffect":true,"warpEffectLength":5,"depthFade":false,"starSize":3,"backgroundColor":"#000000","starColor":"#FFFFFF"}'
);


