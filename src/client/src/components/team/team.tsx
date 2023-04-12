import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ui/team.scss';

export class Team extends React.Component {
    render() {
        return (
            <div className="team">
                <div className="body">
                    <h2>Il team.</h2>
                    <p>
                        Siamo una delle due squadre dell'IIS A. Volta che parteciperanno alla NAO Challenge 2023.
                    </p>
                    <p>
                        Il nostro obiettivo è quello di utilizzare NAO per insegnare alle persone ad utilizzare l'energia
                        consapevolmente. Se vuoi saperne di più, abbiamo un articolo in cui spiegamo il nostro progetto nel dettaglio.
                    </p>
                </div>

                <div className="pictures">
                    <img src="./assets/team.jpg" alt="Team" />
                </div>

                <div className="buttons">
                    <Link to="/post/noi-siamo-dynaware">
                        <button>
                            Mostrami di più
                        </button>
                    </Link> 
                </div>
            </div>
        )
    }
}