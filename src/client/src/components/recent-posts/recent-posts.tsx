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

                <form action="https://iisvoltapescara.edu.it/">
                    <figure>
                        <input type="image" src="https://i.postimg.cc/1XKdx3Hn/download.png" />
                        <figcaption>Se vuoi sapere di più sull'Istituto Volta di Pescara clicca il logo</figcaption>
                    </figure>
                </form>

                <form action="https://www.scuoladirobotica.it/">
                    <figure>
                        <input type="image" src="https://i.postimg.cc/ZKbNJ5Hb/scuoladirobotica-1.png" />
                        <figcaption>Se vuoi scoprire cos'è Scuola di Robotica clicca il loro logo</figcaption>
                    </figure>
                </form>

                <form action="https://www.instagram.com/naodynaware/">
                    <figure>
                        <input type="image" src="https://i.postimg.cc/T3MNQSX5/download-1.jpg" />
                        <figcaption>Se vuoi visitare la nostra pagina Instagram clicca il logo</figcaption>
                    </figure>
                </form>
                
            </div>
        );
    }
}
