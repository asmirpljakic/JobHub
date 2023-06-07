//
//
//
//
//_______________________________428_____________________________
//
//
//
//
//
//

// // Jobster - Landing Page - Setup

// // 2: Kucamo skracenicu 'rafce'
// import React from 'react';
// // 3: import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/logo.svg';
// //N 3: import main from '../assets/images/main.svg';  POSLE IDEMO u App.js
// import main from '../assets/images/main.svg';

// const Landing = () => {
//   return (
//     //G 2: Brisemo: <div>Lading</div> i pisemo:                      <h1>Lading page</h1>
//     <h1>Landing page</h1>
//   );
// };

// export default Landing;

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

// // Jobster - Landing Page - Structure

// import React from 'react';
// import logo from '../assets/images/logo.svg';
// import main from '../assets/images/main.svg';

// const Landing = () => {
//   return (
//     // 1: Brisemo: <h1>Landing page</h1> i pisemo:                <main></main>
//     <main>
//       {/* 1: <nav></nav> */}
//       <nav>
//         {/* 1: <img src={logo} alt="jobster logo" className='logo' /> */}
//         <img src={logo} alt='jobster logo' className='logo' />
//       </nav>
//       {/* 1: <div className="container page"></div> */}
//       <div className='container page'>
//         {/* 1: INFO: */}
//         {/* 1: <div className="info"></div> */}
//         <div className='info'>
//           {/* 2: <h1>job <span>tracking</span> app</h1> */}
//           <h1>
//             job <span>tracking</span> app
//           </h1>
//           {/* 2: Ovde mozemo kucati u <p>lorem30<p> ili otici na link'https://hipsum.co/?paras=5&type=hipster-centric&start-with-lorem=1' */}
//           <p>
//             I'm baby copper mug ascot shabby chic freegan, XOXO big mood ethical
//             kale chips butcher letterpress scenester pabst. Mustache palo santo
//             XOXO locavore photo booth ramps, you probably haven't heard of them
//             fixie waistcoat single-origin coffee beard taxidermy same keytar.
//           </p>
//           {/* 2:(KRAJ!) <button className='btn btn-hero'>Login/Register</button> */}
//           <button className='btn btn-hero'>Login/Register</button>
//         </div>
//         {/*G 1: <img src={main} alt='job hunt' className='img main-img' /> */}
//         <img src={main} alt='job hunt' className='img main-img' />
//       </div>
//     </main>
//   );
// };

// export default Landing;

//
//
//
//
//
//
// _______________________________431_____________________________
//
//
//
//
//
//

// // Jobster - Styled Landing Page

// import React from 'react';
// import logo from '../assets/images/logo.svg';
// import main from '../assets/images/main.svg';
// // 1: import styled from 'styled-components';
// import styled from 'styled-components';

// const Landing = () => {
//   return (
//     // 1:
//     <Wrapper>
//       <nav>
//         <img src={logo} alt='jobster logo' className='logo' />
//       </nav>
//       <div className='container page'>
//         {/* INFO: */}

//         <div className='info'>
//           <h1>
//             job <span>tracking</span> app
//           </h1>
//           <p>
//             I'm baby copper mug ascot shabby chic freegan, XOXO big mood ethical
//             kale chips butcher letterpress scenester pabst. Mustache palo santo
//             XOXO locavore photo booth ramps, you probably haven't heard of them
//             fixie waistcoat single-origin coffee beard taxidermy same keytar.
//           </p>
//           <button className='btn btn-hero'>Login/Register</button>
//         </div>
//         <img src={main} alt='job hunt' className='img main-img' />
//       </div>
//     </Wrapper>
//   );
// };

// // 1: const wrapper = styled.main``
// const Wrapper = styled.main`
//   /* 1:  nav { */
//   nav {
//     /* 1: width: var(--fluid-width);  */
//     width: var(--fluid-width);
//     /* 1: max-width: var(--max-width);  */
//     max-width: var(--max-width);
//     /* 1: margin: 0 auto; */
//     margin: 0 auto;
//     /* 1: height: var(--nav-height); */
//     height: var(--nav-height);
//     /* 1: display: flex; */
//     display: flex;
//     /* 1: align-items: center; */
//     align-items: center;
//   }
//   /* 1: .page { */
//   .page {
//     /* 1: min-height: calc(100vh - var(--nav-height)); */
//     min-height: calc(100vh - var(--nav-height));
//     /* 1: display: grid; */
//     display: grid;
//     /* 1: align-items: center; */
//     align-items: center;
//     /* 1: margin-top: 0.2rem; */
//     margin-top: -3rem;
//   }

//   /* 1: h1 { */
//   h1 {
//     /* 1: font-weight: 700; */
//     font-weight: 700;
//     /* 1: span{ */
//     span {
//       color: var(--primary-500);
//     }
//   }
//   /* 1: p { */
//   p {
//     /* 1: color: var(--grey-600); */
//     color: var(--grey-600);
//   }
//   /* 1: .main-img { */
//   .main-img {
//     /* 1: display: none; */
//     display: none;
//   }

//   /* 1: @media (min-width: 992px){} */
//   @media (min-width: 992px) {
//     /* 1: .page {  */
//     .page {
//       /* 1: grid-template-columns: 1fr 1fr; */
//       grid-template-columns: 1fr 1fr;
//       /* 1: column-gap: 3rem; */
//       column-gap: 3rem;
//     }

//     /* 1: .main-img { */
//     .main-img {
//       /* 1: display: block; */
//       display: block;
//     }
//   }
// `;

// export default Landing;

//
//
//
//
//
//
// _______________________________431_____________________________
//
//
//
//
//
//

// Jobster - Styled Landing Page

import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
// 1: Ovo cemo IZBRISATI/ZAKOMENTARISATI:                   import styled from 'styled-components';
// import styled from 'styled-components';

// 3: import Wrapper from '../assets/wrappers/Testing';
// import Wrapper from '../assets/wrappers/Testing';

// 3:(KRAJ!) E sada cemo uvesti iz naseg folder-a 'wrappers':
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        {/* INFO: */}

        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby copper mug ascot shabby chic freegan, XOXO big mood ethical
            kale chips butcher letterpress scenester pabst. Mustache palo santo
            XOXO locavore photo booth ramps, you probably haven't heard of them
            fixie waistcoat single-origin coffee beard taxidermy same keytar.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

// 1: Ovo CEMO ZAKOMETARISATI/IZBRISATI: POSLE IDEMO u Testing.js
// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }

//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }
//   p {
//     color: var(--grey-600);
//   }
//   .main-img {
//     display: none;
//   }

//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }

//     .main-img {
//       display: block;
//     }
//   }
// `;

export default Landing;
