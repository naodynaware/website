import * as fs from "fs";
import path from "path";
import { POSTS_PATH } from "../constants";

export async function getPosts() {
    const postsIndexPath = path.resolve(POSTS_PATH, "posts.json");
    const posts = await fs.promises.readFile(postsIndexPath, "utf8").catch((err: any) => {
        throw new Error("Posts index not found");
    });

    return posts;
}