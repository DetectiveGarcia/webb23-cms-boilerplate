//Här är vart slug: "Home" hämtas från storyblok

import { StoryblokCMS } from "@/utils/cms"; 
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage({}) {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();
    // console.log("currentStory", currentStory);
    

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
