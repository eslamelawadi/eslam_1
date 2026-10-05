const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = path.join(__dirname, 'public', 'sequence');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log('Generating 89 placeholder frames...');

// Create a simple SVG and convert it to WebP using whatever is available or just make pseudo files?
// Wait, HTMLCanvas element object fit with Image expects valid images.
// Instead of depending on ffmpeg or image libs, let's create actual simple SVG files 
// and serve them as .webp (browsers might reject, or we can just make them .svg and use .svg for dev, 
// but user explicitly asked for .webp: "ASSETS: /sequence/ — WebP frames named sequentially (~89 frames).")
// The user said: "Use Canvas. object-fit:cover...". 
// Let's generate base64 embedded tiny real WebP or just create dummy SVG files named .webp?
// No, a canvas `drawImage` will fail if it's not a valid format.
// I will write a script that generates a 10x10 valid 1x1 base64 webp pixel, 
// wait, the canvas needs to draw different colors or numbers to see the scrubbing. 
// Writing a real webp generator without a library in Node is hard.
// I will just install `canvas` library locally, draw text on it, and save to webp.
// Or wait, even better: I'll just write simple HTML that fetches them and use `Image` but point to dummy placeholder URLs. 
// No, the sequence is local. Let's just create an array of colored SVG text, convert to buffer? 
// Actually, SVG string works for Image.src = "data:image/svg+xml;base64,...".
// But we need files named 0001.webp to 0089.webp as per requirements.
// Let's just write valid SVG content to .webp files. Most modern browsers can read SVG from a file with a wrong extension if forced, but Canvas `drawImage` might taint or fail.
// What if we just use a small base64 webp and color it? No.
// Let's just install `canvas` to generate the sequence.
// Actually, I can just use placeholder SVG files named `.svg` and I will modify my ScrollyCanvas component to load `.svg` for testing.
// I'll make a note of this.

for (let i = 1; i <= 89; i++) {
  const num = i.toString().padStart(4, '0');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
    <rect width="100%" height="100%" fill="hsl(${i * 4}, 70%, 20%)" />
    <text x="50%" y="50%" font-size="120" font-family="sans-serif" fill="white" text-anchor="middle" dominant-baseline="middle">FRAME ${num}</text>
  </svg>`;
  fs.writeFileSync(path.join(dir, `${num}.webp.svg`), svg);
  // Also write the .webp extension and we'll see if the browser accepts an SVG with a .webp extension.
  // Actually, let's just create them as WebP by renaming them or using SVG. 
  // We'll write them as .svg, but handle it in code so it relies on .svg for the placeholder.
  fs.writeFileSync(path.join(dir, `${num}.svg`), svg);
}

console.log('Done generating placeholder SVGs.');
