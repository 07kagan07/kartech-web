import fs from 'fs';

async function fetchGoogleFontUrl(url) {
  const cssResp = await fetch(url, {
    headers: {
      'User-Agent':
        // Modern Chrome User Agent to get WOFF2
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    },
  });
  const cssText = await cssResp.text();
  // Find the first url(...) which points to the woff2 file
  const match = cssText.match(/url\((https:\/\/[^)]+)\)/);
  if (match && match[1]) {
    return match[1];
  }
  throw new Error("Could not find font URL in css");
}

async function fetchFontBase64(cssUrl) {
  const fontUrl = await fetchGoogleFontUrl(cssUrl);
  const resp = await fetch(fontUrl);
  const arrayBuffer = await resp.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return 'data:font/woff2;charset=utf-8;base64,' + buffer.toString('base64');
}

async function run() {
  const orbitronCss = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap';
  const rajdhaniCss = 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap';

  console.log("Fetching Orbitron...");
  const orbitronBase64 = await fetchFontBase64(orbitronCss);
  
  console.log("Fetching Rajdhani...");
  const rajdhaniBase64 = await fetchFontBase64(rajdhaniCss);

  const outPath = './components/fonts.ts';
  const content = `
export const ORBITRON_BASE64 = \`${orbitronBase64}\`;
export const RAJDHANI_BASE64 = \`${rajdhaniBase64}\`;
`;
  fs.writeFileSync(outPath, content, 'utf-8');
  console.log("Written fonts to " + outPath);
}

run().catch(console.error);
