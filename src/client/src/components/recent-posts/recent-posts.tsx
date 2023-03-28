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
        fetch('https://dynaware-website.herokuapp.com/api/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
    }

    render() {
        return (
            <div className="recent-posts">
                <h2>Post recenti.</h2>

                {
                    this.state.posts.length === 0 ? (
                        <p>Non ci sono post.</p>
                    ) : (
                        this.state.posts.map((post: any, index) => {
                            return (
                                <Link to={`/post/${post.id}`} key={index}>
                                    <div className="recent-post">
                                        <h3>{post.title}</h3>
                                        <h4>{post.description}</h4> 
                                        <p>{post.date}</p>
                                    </div>
                                </Link>
                            );
                        })
                    )   
                }
            </div>
        );
    }
}