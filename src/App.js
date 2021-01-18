import React from 'react';
import Utama from './components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">REACT</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Beranda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/tentangsaya">Tentang</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/karya">Karya</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Kontak">Kontak</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/list">List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
               {/* <hr />
                <Link to="/">Beranda</Link> |
                <Link to="/tentangsaya">Tentang Saya</Link> |
                <Link to="/karya">Karya</Link> |
                <Link to="/kontak">Kontak</Link>
               <hr />*/}
                <p><Utama/></p>
            </div>
        )
    }
}
export default App;