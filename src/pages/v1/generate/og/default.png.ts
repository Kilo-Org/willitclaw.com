import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori from 'satori';
import { html as toReactElement } from 'satori-html';

const fontFile = await fetch(
  'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
);

const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 630;
const width = 1200;

export const GET: APIRoute = async () => {
  const html = toReactElement(`
  <div style="background-color: #1a1a2e; display: flex; flex-direction: column; height: 100%; width: 100%; position: relative;">
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%; padding: 3rem;">
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #16213e; border: 4px solid #e94560; border-radius: 1.5rem; padding: 3rem 4rem; filter: drop-shadow(8px 8px 0 rgba(233, 69, 96, 0.4));">
        <p style="font-size: 100px; margin: 0; padding: 0; line-height: 1;">🦀</p>
        <p style="font-size: 72px; color: #e94560; margin: 0; padding: 0; margin-top: 0.5rem; letter-spacing: -0.02em; line-height: 1.1;">willitclaw.com</p>
        <p style="font-size: 32px; color: #a8a8b3; margin: 0; padding: 0; margin-top: 1rem; line-height: 1.2;">Will it claw? Only one way to find out.</p>
      </div>
      <div style="display: flex; gap: 1rem; margin-top: 2rem; align-items: center;">
        <p style="font-size: 20px; color: #4a4a5a; margin: 0;">🦀</p>
        <p style="font-size: 20px; color: #4a4a5a; margin: 0;">🦀</p>
        <p style="font-size: 20px; color: #4a4a5a; margin: 0;">🦀</p>
        <p style="font-size: 20px; color: #4a4a5a; margin: 0;">🦀</p>
        <p style="font-size: 20px; color: #4a4a5a; margin: 0;">🦀</p>
      </div>
    </div>
  </div>
  `);

  const svg = await satori(html, {
    fonts: [
      {
        name: 'Inter Latin',
        data: fontData,
        style: 'normal',
      },
    ],

    height,
    width,
  });

  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: 'width',
      value: width,
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
    },
  });
};
