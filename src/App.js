import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAB1-T_I4DAfsfSvDQk87Zs8JHXVFoxIGE",
  authDomain: "oasis-7d0ac.firebaseapp.com",
  projectId: "oasis-7d0ac",
  storageBucket: "oasis-7d0ac.appspot.com",
  messagingSenderId: "17274191385",
  appId: "1:17274191385:web:877981d589e286c16d3488",
  measurementId: "G-YGYDR7ZKBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getSongs(db){
  const songsCol = collection(db, 'Songs');
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map(doc => doc.data());
  console.log(songList);
  return songList;
}

const songs = await getSongs(db);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.rockarchive.com/media/4373/oasis-oa002stdo.jpg?width=800&height=527&mode=stretch&overlay=watermark.png&overlay.size=230,20&overlay.position=0,507"
          alt = "Oasis"
          className = "band-image"
          />
        <p>
          Welcome to Oasis World!
        </p>
        <div className="links">
          <a href ="#band-history" className = "link">Band History</a>/
          <a href="#song-ratings" className="link">Song Ratings</a>
          
        </div>

        <a
          
        >
        
        </a>
      </header>
      <main>
        <section id ="band-history" className="section">
          <h2> Band History</h2>
          <p>
            Oasis was formed in 1991 by Paul Arthurs, Paul McGuigan, Tony McCarroll, and Chris Hutchinson. Liam replaced Chris as lead singer, and changed the band name to Oais(formerly the Rain). Later, Noel joined and became the main songwriter.

          </p>
        </section>
        <section id ="song-ratings" className="section">
          <h2> Song Ratings(/5)</h2>
          <ul>
            {songs.map((song) => (<li>{song.Name} {song.Rating}</li>))}
          </ul>
        </section>
      </main>
    </div>
    
  );
}

export default App;
