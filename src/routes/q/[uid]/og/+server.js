import { read } from '$app/server';

import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

import GeistRegular from '$lib/fonts/Geist-Regular.otf';
import GeistSemiBold from '$lib/fonts/Geist-SemiBold.otf';
import OG from "./og.svelte";

const geistRegular = read(GeistRegular).arrayBuffer();
const geistSemiBold = read(GeistSemiBold).arrayBuffer();

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params, locals: { supabase } }) => {
  const { uid } = params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("short_code", uid)
    .single();

  const result = OG.render({ title: project.title, caption: project.caption });
  const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

  const svg = await satori(element, {
    fonts: [
      {
        name: 'Geist',
        data: await geistRegular,
        style: 'normal'
      },
      {
        name: 'Geist',
        data: await geistSemiBold,
        style: 'normal',
        weight: 600,
      }
    ],
    height,
    width
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width
    }
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      'content-type': 'image/png'
    }
  });
};