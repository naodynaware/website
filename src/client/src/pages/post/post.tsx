import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { PostHeader } from '../../components/post-header';

import '../../styles/ui/post.scss';

export function Post() {
    const { id } = useParams();
    const [post, setPost] = useState<null | string>(null);

    useEffect(() => {
        fetch(`https://dynaware-website.herokuapp.com/api/posts/${id}`).then((content) => {
            return content.json()
        }).then((content: any) => {
            setPost(content.post)
        })
    })
    
    return (
        <>
        <PostHeader/>
        <div className="post">
            { post ? (
                <div>
                    <ReactMarkdown children={post} />
                </div>
            )
            : (
                <div>
                    <h1>Loading...</h1>
                    </div> 
            )}
        </div>
        </>
    )
}