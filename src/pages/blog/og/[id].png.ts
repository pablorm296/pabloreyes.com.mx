import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";
import { createSvgFromTitleAndDescription, createPngFromSvg } from "@/lib/og-image";

export async function getStaticPaths() {
    const posts = await getCollection("blog");
    return posts.map(post => ({
        params: {
            id: post.id,
        }
    }));
}

export const GET: APIRoute = async ({ params }) => {

    if (!params.id) {
        return new Response("Must provide a post ID", { status: 404 });
    }

    const post = await getEntry("blog", params.id);

    if (!post) {
        return new Response("Post not found", { status: 404 });
    }

    const { title, description } = post?.data;

    const svg = await createSvgFromTitleAndDescription(title, description);
    const png = await createPngFromSvg(svg);

    return new Response(png, {
        headers: {
            "Content-Type": "image/png",
        },
    })
};
