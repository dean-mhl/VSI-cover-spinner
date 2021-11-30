# Very Short Introduction Cover Art Spinner

This is a fork of the html5-slot-machine project hosted at https://github.com/johakr/html5-slot-machine. It animates the display of random cover art of titles from Oxford University Press's
Very Short Introduction (VSI) series. It is built using only vanilla HTML, CSS and JavaScript.
No Flash or Frameworks required. Allowing for an amazing low bundle size and blazing fast performance.

Built using the _Web Animations API_.

## Features

- Fully responsive for great UX on mobile, web & fullscreen mode.
- Autoplay functionality, which keeps running even if the game window is in background.

## Installation, Build & Deployment

1. Clone repository
2. Run `npm install`
   - _Development_: run `npm start` and go to `http://localhost:8080`
   - _Production_: run `npm run build` and serve from `/dist`

## Getting and specifying VSI cover art images

1. Create a text document that lists, one per line, the 13-digit ISBNs of whatever VSI titles you want to include. Remove any spaces or punctuation. Make a copy of this document for step 6.
2. Prepend each line with `https://global.oup.com/academic/covers/pop-up/` (e.g., `https://global.oup.com/academic/covers/pop-up/9780198745587`).
3. In an empty folder on a system capable of running wget, run `wget -i [your-text-file.txt] --content-disposition` to download the cover images.
4. Consider running a tool like imagemagick or [RIOT](https://riot-optimizer.com/) to reduce the file size of each image to 70 Kb or less.
5. Copy the images to the project's /src/assets/symbols folder.
6. Make a javascript array out of the ISBNs listed in the copy of the text document created in step 1. A tool like [arrayThis](https://arraythis.com/) makes this easy.
7. Update /src/js/Symbol.js so that `static get symbols()` returns this array. For example, if the array is `[9780190064679, 9780190200589, 9780190213220, 9780190219765]`, the Symbol.js file should be updated like so:
```
  static get symbols() {
    return ["9780190064679", "9780190200589", "9780190213220", "9780190219765"];
  }
````
8. Update /src/js/Slots.js so that its constructor() function uses one of the ISBNs as the last element of its this.currentSymbols array and as every element of the        this.nextSymbols array. For example, if using ISBN 9780190064679, the constructor function would start as follows:
````
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), '9780190064679'],
    ];

    this.nextSymbols = [
      ['9780190064679', '9780190064679', '9780190064679'],
      ['9780190064679', '9780190064679', '9780190064679'],
      ['9780190064679', '9780190064679', '9780190064679'],
      ['9780190064679', '9780190064679', '9780190064679'],
      ['9780190064679', '9780190064679', '9780190064679'],
    ];
````
