import ImageAbout from '../assets/image-about.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {

    return (
        <>
            <Header />
            <div className=" bg-primaryDark gap-20 flex flex-col items-center p-6">
                <img
                    src={ImageAbout}
                    alt="Imagem principal da Home"
                    className="w-[90vw] h-[90vh] object-cover rounded-xl"
                />
                <h1 className="text-4xl font-bold mt-20 mb-6 text-center text-secondaryLight">Sobre Nós</h1>
                <div className="bg-secondaryDark p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-primaryLight">Nossa Missão</h2>
                    <p className="text-lg text-white mb-6">
                        Nossa missão é conectar pessoas aos seus lares dos sonhos, oferecendo uma experiência imobiliária transparente, confiável e personalizada. Acreditamos que cada cliente merece um atendimento excepcional e soluções que atendam às suas necessidades únicas.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-primaryLight">Nossa Visão</h2>
                    <p className="text-lg text-white mb-6">
                        Ser a imobiliária de referência no mercado, reconhecida pela excelência em serviços, inovação e compromisso com a satisfação do cliente. Buscamos constantemente aprimorar nossos processos e expandir nosso portfólio para oferecer as melhores opções de imóveis.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-primaryLight">Nossos Valores</h2>
                    <ul className="list-disc list-inside text-lg text-white space-y-2">
                        <li><strong>Integridade:</strong> Agimos com honestidade e transparência em todas as nossas interações.</li>
                        <li><strong>Excelência:</strong> Buscamos a perfeição em cada detalhe do nosso serviço.</li>
                        <li><strong>Inovação:</strong> Estamos sempre em busca de novas tecnologias e métodos para melhorar a experiência do cliente.</li>
                        <li><strong>Compromisso:</strong> Estamos dedicados a ajudar nossos clientes a encontrar o imóvel ideal.</li>
                        <li><strong>Respeito:</strong> Valorizamos a diversidade e tratamos todos com dignidade e consideração.</li>
                    </ul>
                </div>
                <div className="bg-secondaryDark p-6 rounded-lg shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4 text-primaryLight">Nossa Equipe</h2>
                    <p className="text-lg text-white mb-6">
                        Nossa equipe é composta por profissionais experientes e dedicados, apaixonados pelo que fazem. Cada membro da nossa equipe traz uma combinação única de habilidades e conhecimentos, garantindo que possamos oferecer um serviço completo e de alta qualidade.
                    </p>
                    <p className="text-lg text-white">
                        Estamos aqui para ajudar você em cada etapa do processo imobiliário, desde a busca inicial até o fechamento do negócio. Conte conosco para tornar sua jornada imobiliária simples e bem-sucedida.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;