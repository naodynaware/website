import React from 'react';

import { RecentPosts } from '../../components/recent-posts';
import { Header } from '../../components/header';

import '../../styles/ui/home.scss';
import { Team } from '../../components/team';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="other-content">
                    <Team />
                    <RecentPosts />
                </div>
            </div>
        );
    }
}