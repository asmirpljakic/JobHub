//
//
//
//
//_______________________________425_____________________________
//
//
//
//

// // Jobster - Create New Applictaion

// //OVU APLIKACIJU 'JOBSTER' CEMO KREIRATI OD NULE -
// // 1:Prvo cemo ukucati u terminalu: npm create-react-app@latest jobster
// // 1:Posle kucamo: npm start+

// // 1: VAZNO: Sada cemo IZBRISATI SLEDECE FAJLOVE:
// // App.css
// // App.test.js
// // logo.svg
// // reportWebVitals.js
// // setupTests.js

// // 1: Brisemo/Zakometarisemo: i ovo: import logo from './logo.svg';
// // import logo from './logo.svg';
// // 1: Brisemo/Zakometarisemo: i ovo: import './App.css';
// // import './App.css';

// function App() {
//   return (
//     // 1: Brisemo/Zakometarisemo: i sve iz returna:
//     /*<div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     */

//     //N 1: Pisemo samo: <h1>jobster</h1>  POSLE IDEMO u index.js  da izbrisemo reportWebVitals.
//     <h1>jobster</h1>
//   );
// }

// export default App;

//
//
//
//
//_______________________________426_____________________________
//
//
//
//

// // Jobster - Title and Favicon

// // Idemo u index.html

// // 2: Sada cemo kopirati nas favicon.ico iz foldera 'images' koji se nalazi u folderu: 'assets'

// // 2:(KRAJ!) Sada idemo na link: 'https://favicon.io/' GDE MOZEMO NAPRAVITI NAS FAVICON.ICO koji ZELIMO. (SAMO DA ZNAMO)

// function App() {
//   return <h1>jobster</h1>;
// }

// export default App;

//
//
//
//
//_______________________________427_____________________________
//
//
//
//
//
//

// // Jobster - Title and Favicon

// // Idemo u index.html

// //N 1: Idemo na link 'https://necolas.github.io/normalize.css/' i kucamo posle OVDE: 'npm install normalize.css' i POSLE IDEMO u index.js

// //N 3: Sada cemo kopirati iz naseg foldera 'css' ceo fajl 'index.css' i prebaciti ga u nas 'src' folder i IDEMO TAMO u index.css (GLOBALNI)

// // 5: (KRAJ SEKCIJE!) Ako nas vise zanima mozemo pogledati YouTube link 'https://www.youtube.com/watch?v=UDdyGNlQK5w' gde se pokriva CEO 'normalize.css' i skinuti ovaj repositori: 'https://github.com/john-smilga/default-starter'

// function App() {
//   return <h1>jobster</h1>;
// }

// export default App;

//
//
//
//
//
//
// _______________________________428_____________________________
//
//
//
//
//
//

// // Jobster - Landing Page - Setup

// // 1: Prvo cemo instalirati EXTENSION: 'Markdown Preview Enhanced' od 'Yiyi Wang'

// // 1: Kreiracemo sada folder 'pages' u folderu 'src' i u 'pages' cemo kreirati novi fajl 'Lading.js'

// // Idemo u Lading.js

// // 4: import Lading from "./pages/Lading";
// import Landing from './pages/Landing';

// function App() {
//   // 4: Brisemo:  <h1>jobster</h1> i pisemo:                        return <div></div>
//   return (
//     <div>
//       {/* 4:(KRAJ!) <Landing />  */}
//       <Landing />
//     </div>
//   );
// }

// export default App;

//
//
//
//
//
//
// _______________________________429_____________________________
//
//
//
//
//
//

// Jobster - Landing Page - Structure

// Idemo u Lading.js
import Landing from './pages/Landing';
function App() {
  return (
    <div>
      <Landing />
    </div>
  );
}

export default App;
