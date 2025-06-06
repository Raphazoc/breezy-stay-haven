
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Destination {
  id: string;
  name: string;
  image: string;
  distance: string;
  description?: string;
  slug: string;
}

// COMO ALTERAR IMAGENS DOS DESTINOS:
// Para alterar as imagens dos destinos, substitua as URLs no array 'allDestinations' abaixo
// Cada destino tem uma propriedade 'image' que deve conter uma URL válida de imagem
// Recomenda-se usar imagens de alta qualidade (1000px de largura ou mais) do Unsplash ou similar
const allDestinations: Destination[] = [
  {
    id: "1",
    name: "New York",
    // IMAGEM DE NEW YORK: substitua esta URL por uma nova imagem de Nova York
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000",
    distance: "4.5 hour drive",
    description: "A cidade que nunca dorme, com arranha-céus icônicos e cultura vibrante.",
    slug: "new-york"
  },
  {
    id: "2",
    name: "Los Angeles",
    // IMAGEM DE LOS ANGELES: substitua esta URL por uma nova imagem de Los Angeles
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1000",
    distance: "5 hour drive",
    description: "Cidade dos anjos, lar de Hollywood e praias deslumbrantes.",
    slug: "los-angeles"
  },
  {
    id: "3",
    name: "Miami",
    // IMAGEM DE MIAMI: substitua esta URL por uma nova imagem de Miami
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1000",
    distance: "3 hour drive",
    description: "Praias tropicais, vida noturna agitada e arquitetura art déco.",
    slug: "miami"
  },
  {
    id: "4",
    name: "Chicago",
    // IMAGEM DE CHICAGO: substitua esta URL por uma nova imagem de Chicago
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000",
    distance: "4 hour drive",
    description: "Arquitetura impressionante e culinária de classe mundial.",
    slug: "chicago"
  },
  {
    id: "5",
    name: "San Francisco",
    // IMAGEM DE SAN FRANCISCO: substitua esta URL por uma nova imagem de San Francisco
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    distance: "6 hour drive",
    description: "Colinas famosas, Golden Gate Bridge e cultura tecnológica.",
    slug: "san-francisco"
  },
  {
    id: "6",
    name: "Las Vegas",
    // IMAGEM DE LAS VEGAS: substitua esta URL por uma nova imagem de Las Vegas
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000",
    distance: "4 hour drive",
    description: "Cassinos, shows espetaculares e entretenimento 24 horas.",
    slug: "las-vegas"
  },
  {
    id: "7",
    name: "Seattle",
    // IMAGEM DE SEATTLE: substitua esta URL por uma nova imagem de Seattle
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
    distance: "7 hour drive",
    description: "Café artesanal, música grunge e paisagens naturais deslumbrantes.",
    slug: "seattle"
  },
  {
    id: "8",
    name: "Boston",
    // IMAGEM DE BOSTON: substitua esta URL por uma nova imagem de Boston
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
    distance: "5 hour drive",
    description: "História americana, universidades prestigiosas e charme colonial.",
    slug: "boston"
  },
  {
    id: "9",
    name: "Rio de Janeiro",
    // IMAGEM DO RIO DE JANEIRO: substitua esta URL por uma nova imagem do Rio de Janeiro
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000",
    distance: "2 hour flight",
    description: "Cidade maravilhosa com praias famosas e Cristo Redentor.",
    slug: "rio-de-janeiro"
  },
  {
    id: "10",
    name: "São Paulo",
    // IMAGEM DE SÃO PAULO: substitua esta URL por uma nova imagem de São Paulo
    image: "https://images.unsplash.com/photo-1541372709072-8be11c6a4e0c?q=80&w=1000",
    distance: "1 hour flight",
    description: "Metrópole vibrante com gastronomia diversificada e vida cultural intensa.",
    slug: "sao-paulo"
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Destinos Inspiradores</h1>
              <p className="text-muted-foreground">
                Descubra lugares incríveis para sua próxima viagem
              </p>
            </div>
            
            {/* GRID DE DESTINOS: As imagens são exibidas aqui em cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allDestinations.map((destination) => (
                <Link 
                  key={destination.id} 
                  to={`/destination/${destination.slug}`}
                  className="group"
                >
                  <div className="bg-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="overflow-hidden">
                      {/* IMAGEM DO CARD: Esta é onde a imagem de cada destino é exibida */}
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{destination.distance}</p>
                      {destination.description && (
                        <p className="text-gray-500 text-sm line-clamp-2">{destination.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationsPage;
