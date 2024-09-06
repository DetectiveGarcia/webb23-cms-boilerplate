import { StoryblokCMS } from "@/utils/cms";
import { storyblokEditable } from "@storyblok/react";

export default function NotFound({ blok }) {

    
    // console.log("blok", blok);
    
    

    return(
        <h1 {...storyblokEditable(blok)} >{blok?.text}</h1>
    )
    
}