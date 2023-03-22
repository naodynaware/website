import path from "path";
import * as fs from "fs";
import {
    POSTS_PATH
} from "../constants";

export async function getPost(postName: string): Promise<any> {
    const postPath = path.resolve(POSTS_PATH, `${postName}.md`);
    const post = await fs.promises.readFile(postPath, "utf8").catch((err: any) => {
        throw new Error(`Post ${postName} not found`);
    });

    const postToSend = {
        post: post,
    }

    return postToSend;
}