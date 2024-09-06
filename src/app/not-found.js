import { StoryblokCMS } from "@/utils/cms"; 
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function NotFoundPage({}) {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["notfound"] });
    if (!currentStory) throw new Error();
    // console.log("currentStory", currentStory);
    

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}
export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
