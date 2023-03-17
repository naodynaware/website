import React from 'react';

import { RecentPosts } from '../../components/recent-posts';
import { Header } from '../../components/header';

import '../../styles/ui/home.scss';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="other-content">
                    <RecentPosts />
                </div>
            </div>
        );
    }
}