import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

// Esta función genera la URL optimizada
export function urlFor(source) {
  return builder.image(source);
}