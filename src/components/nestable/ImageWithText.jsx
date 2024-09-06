import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from './RichText'; // Importera din RichText-komponent
import Image from 'next/image';


export default function ImageWithText({ blok }) {
  console.log(blok);
  
  return (
    <div {...storyblokEditable(blok)}>
      <Image src={blok.image.filename} alt={blok.title} />
      <h2>{blok.title}</h2>
      {/* <RichTextDefault  blok={blok.text} /> */}
      <RichTextDefault blok={{ richtext: blok.text }} />
      
    </div>
  );
}
