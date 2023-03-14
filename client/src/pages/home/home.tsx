import React from 'react';
import { RecentPosts } from '../../components/recent-posts';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Home</h1>

                <RecentPosts />
            </div>
        );
    }
}