import { storyblokEditable } from "@storyblok/react";

export default function Link({ blok }) {

    // console.log(blok);
    

  return (
    // <a href={blok.linkUrl.cached_url} {...storyblokEditable(blok)}>
    //   {blok.linkName}
    // </a>
    <pre>{JSON.stringify(blok, null, 2)}</pre>
  );
}
