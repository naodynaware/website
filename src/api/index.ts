import path from "path";
import * as fs from "fs";

import { 
    getPost,
    getPosts 
} from "./posts";

const express = require('express');
const API = express.Router();

API.get('/posts', async (req: any, res: any) => {
    const posts = await getPosts().catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
    });

    res.send(posts);
});

API.get('/posts/:postName', async (req: any, res: any) => {
    const postName = req.params.postName;
    
    const post = await getPost(postName).catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
    });

    console.log(postName);
    console.log(post);

    res.send(post);
});

export default API;