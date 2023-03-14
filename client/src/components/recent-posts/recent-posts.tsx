import React from 'react';

interface RecentPostsProps {

}

interface RecentPostsState {
    readonly posts: any[];
}

export class RecentPosts extends React.Component<RecentPostsProps, RecentPostsState> {
    constructor(props: RecentPostsProps) {
        super(props);

        this.state = {
            posts: [{
                title: 'Loading...',
            }]
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
                    this.state.posts.map((post: any, index) => (
                        <div key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.name}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}