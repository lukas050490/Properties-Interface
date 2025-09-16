// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import ImageHome1 from "../assets/image-home1.png";
// import ImageHome2 from "../assets/image-home2.png";
// import ImagePet from "../assets/image-pet.png";
// import Footer from "../components/Footer";

// function Home() {
//   const navigate = useNavigate();

//   const handleExploreProperties = () => {
//     navigate('/properties');
//   };


//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-primaryDark overflow-x-hidden"
//       >

//         <img
//           src={ImageHome1}
//           alt="Imagem principal da Home"
//           className="w-full h-3/5"
//         />
//         <div className="flex items-center justify-center gap-10 bg-secondaryDark p-8 shadow-lg">
//           <img
//             src={ImageHome2}
//             alt="Imagem de um imóvel"
//             className="w-2/5 h-2/5 rounded-2xl"
//           />
//           <div className="flex flex-col gap-4 text-gray-800 max-w-md">
//             <h2 className="text-3xl font-bold  text-secondaryLight">Imóveis dos seus sonhos, do seu jeito</h2>
//             <p className="text-lg text-white">Aqui você encontra o imóvel ideal para você, seja grande, pequeno, seja uma casa, um apartamento,
//               em um lugar afastado ou no centro da cidade, temos diversas opções para você escolher.
//             </p>
//             <button className="px-6 py-3 bg-primaryMid text-white rounded-xl shadow hover:bg-primaryLight transition"
//               onClick={handleExploreProperties}
//             >Conheça nossos imóveis</button>
//           </div>
//         </div>
//         <div className="flex items-center justify-center gap-10 bg-secondaryDark p-8  shadow-lg">
//           <div className="flex flex-col gap-4 text-gray-800 max-w-md">
//             <h2 className="text-3xl font-bold text-secondaryLight">Lazer Total para seu Pet, seja ele qual for</h2>
//             <p className="text-lg text-white">Seu pet merece o melhor, e aqui ele encontra. Temos diversas opções de lazer para seu pet, seja um
//               cachorro, gato, pássaro ou qualquer outro animal de estimação.
//             </p>
//             <button className="px-6 py-3 bg-primaryMid text-white rounded-xl shadow hover:bg-primaryLight transition"
//               onClick={handleExploreProperties}
//             >Conheça nossos imóveis</button>
//           </div>
//           <img
//             src={ImagePet}
//             alt="Imagem do Pet"
//             className="w-2/5 h-2/5 rounded-2xl"
//           />
//         </div>

//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;


import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ImageHome1 from "../assets/image-home1.png";
import ImageHome2 from "../assets/image-home2.png";
import ImagePet from "../assets/image-pet.png";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleExploreProperties = () => {
    navigate('/properties');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-primaryDark overflow-x-hidden max-w-screen">
        {/* Imagem principal */}
        <img
          src={ImageHome1}
          alt="Imagem principal da Home"
          className="w-full h-3/5 object-cover"
        />

        {/* Bloco 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-secondaryDark p-8 shadow-lg">
          <img
            src={ImageHome2}
            alt="Imagem de um imóvel"
            className="max-w-full md:w-2/5 h-auto rounded-2xl"
          />
          <div className="flex flex-col gap-4 text-gray-800 max-w-md">
            <h2 className="text-3xl font-bold text-secondaryLight">
              Imóveis dos seus sonhos, do seu jeito
            </h2>
            <p className="text-lg text-white">
              Aqui você encontra o imóvel ideal para você, seja grande, pequeno,
              seja uma casa, um apartamento, em um lugar afastado ou no centro
              da cidade, temos diversas opções para você escolher.
            </p>
            <button
              className="px-6 py-3 bg-primaryMid text-white rounded-xl shadow hover:bg-primaryLight transition"
              onClick={handleExploreProperties}
            >
              Conheça nossos imóveis
            </button>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-secondaryDark p-8 shadow-lg">
          <div className="flex flex-col gap-4 text-gray-800 max-w-md">
            <h2 className="text-3xl font-bold text-secondaryLight">
              Lazer Total para seu Pet, seja ele qual for
            </h2>
            <p className="text-lg text-white">
              Seu pet merece o melhor, e aqui ele encontra. Temos diversas
              opções de lazer para seu pet, seja um cachorro, gato, pássaro ou
              qualquer outro animal de estimação.
            </p>
            <button
              className="px-6 py-3 bg-primaryMid text-white rounded-xl shadow hover:bg-primaryLight transition"
              onClick={handleExploreProperties}
            >
              Conheça nossos imóveis
            </button>
          </div>
          <img
            src={ImagePet}
            alt="Imagem do Pet"
            className="max-w-full md:w-2/5 h-auto rounded-2xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
