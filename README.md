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

## Getting VSI cover art images

1. Create a text document that lists, one per line, 10-digit ISBNs of whatever VSI titles you want to include. Remove any spaces or punctuation.
2. Prepend each line with `https://global.oup.com/academic/covers/pop-up/` (e.g., https://global.oup.com/academic/covers/pop-up/9780199687350).
3. In an empty folder on a system capable of running wget, run `wget -i [your-text-file.txt] --content-disposition`.
4. Consider running a tool like imagemagick or [RIOT](https://riot-optimizer.com/) to reduce the file size of each image to 70 Kb or less.
5. Copy the images to the project's /src/assets/symbols folder.
