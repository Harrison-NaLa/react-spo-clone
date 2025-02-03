import {useEffect} from 'react';
import './App.css';
import Main from './features/main/main/main.tsx';
import Header from './features/main/header/header.tsx';

function App() {
    useEffect(() => {
        getFetchData().then();
    });

    async function getFetchData() {
        const data = await fetch('https://d1uolqnvceabeb.cloudfront.net/website-main-page-trips.json')
            .then((res) => res.json());
        console.log(data);
        //console.log(data.body);
    }

    return (
        <main className='main_container'>
            <Header/>
            <Main></Main>
        </main>
    );
}

export default App;
