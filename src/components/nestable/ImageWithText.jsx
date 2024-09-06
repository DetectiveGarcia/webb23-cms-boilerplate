import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from './RichText'; // Importera din RichText-komponent


export default function ImageWithText({ blok }) {
  console.log(blok);
  
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.image.filename} alt={blok.title} />
      <h2>{blok.title}</h2>
      {/* <RichTextDefault  blok={blok.text} /> */}
      <RichTextDefault blok={{ richtext: blok.text }} />
      
    </div>
  );
}
