import { useEffect, useState } from "react";
import axios from 'axios';
import PropertyList from "../components/PropertyList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Properties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function BringProperties() {
            try {
                const response = await axios.get('http://localhost:4000/manager/properties');
                setProperties(Array.isArray(response.data.properties) ? response.data.properties : []);

            } catch (erro) {
                console.error('Erro ao buscar propriedades', erro)
            }
        }
        BringProperties();
    }, []);



    return (
        <>
            <Header />
            <div className="min-h-screen bg-secondaryDark p-6">
                <h1 className="text-primaryLight text-3xl font-bold mb-8">Imóveis disponíveis</h1>
                <PropertyList properties={properties} />
            </div>
            <Footer />
        </>
    )
}
export default Properties;