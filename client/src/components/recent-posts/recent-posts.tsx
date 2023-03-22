import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ui/recent-post.scss';

interface RecentPostsState {
    readonly posts: any[];
}

export class RecentPosts extends React.Component<{}, RecentPostsState> {
    constructor() {
        super({});

        this.state = {
            posts: []
        };
    }

    componentDidMount(): void {
        fetch('http://localhost:3001/api/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
    }

    render() {
        return (
            <div className="recent-posts">
                <h2>Recent Posts</h2>

                {
                    this.state.posts.map((post: any, index) => {
                        return (
                            <Link to={`/post/${post.id}`} key={index}>
                                <div className="recent-post">
                                    <h3>{post.title}</h3>
                                    <h4>{post.description}</h4> 
                                    <p>{post.content}</p>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}