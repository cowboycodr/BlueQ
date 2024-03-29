
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

import { read } from '$app/server';
import { render } from '$lib/server/og';
import GeistRegular from '$lib/fonts/Geist-Regular.otf';
import GeistSemiBold from '$lib/fonts/Geist-SemiBold.otf';
import OG from "./og.svelte";

const geistRegular = read(GeistRegular).arrayBuffer();
const geistSemiBold = read(GeistSemiBold).arrayBuffer();

export const GET = async ({ params, locals: { supabase } }) => {
  const { uid } = params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("short_code", uid)
    .single();

  const og = await render(OG, {
    props: {
      title: project.title,
      caption: project.caption
    },
    fonts: {
      regular: geistRegular,
      semi_bold: geistSemiBold
    },
  });

  return new Response(og.asPng(), {
    headers: {
      'content-type': 'image/png'
    }
  })
};