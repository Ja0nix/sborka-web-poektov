//howler
import "./howler.js";

let sound = new Howl({
    src: ['sound.mp3']
  });

export function playSound() { sound.play(); };
