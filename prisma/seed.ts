import { db } from '../src/lib/db';

const categoryImageMap: Record<string, string[]> = {
  peluches: ['/products/peluche_1.png', '/products/peluche_2.png', '/products/peluche_3.png'],
  flores: ['/products/flor_1.png', '/products/flor_2.png', '/products/flor_3.png'],
  desayunos: ['/products/desayuno_1.png', '/products/desayuno_2.png', '/products/desayuno_3.png'],
  globos: ['/products/globo_1.png', '/products/globo_2.png', '/products/globo_3.png'],
  cumpleanos: ['/products/cumple_1.png', '/products/cumple_2.png', '/products/cumple_3.png'],
  aniversarios: ['/products/aniversario_1.png', '/products/aniversario_2.png', '/products/aniversario_3.png'],
  personalizados: ['/products/personalizado_1.png', '/products/personalizado_2.png', '/products/personalizado_3.png'],
  sorpresas: ['/products/sorpresa_1.png', '/products/sorpresa_2.png', '/products/sorpresa_3.png'],
};

function getImage(category: string, index: number): string {
  const images = categoryImageMap[category] || categoryImageMap.peluches;
  return images[index % images.length];
}

interface ProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  badge: string;
  rating: number;
  isBestSeller: boolean;
  isOffer: boolean;
  isRecommended: boolean;
  isDigitalExperience: boolean;
  originalPrice?: number;
}

const rawProducts: ProductData[] = [
  // PELUCHES (20)
  { name: 'Oso Gigante Premium', description: 'Oso de peluche de 80cm, ultra suave y abrazable', price: 89000, category: 'peluches', badge: 'Popular', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Conejito Rosa Deluxe', description: 'Conejo de peluche premium color rosa con lazo dorado', price: 65000, category: 'peluches', badge: 'Nuevo', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Unicornio Mágico', description: 'Peluche unicornio con crin brillante y cuerno dorado', price: 72000, category: 'peluches', badge: 'Mágico', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Osito Mini Colección', description: 'Set de 3 ositos mini perfectos para decorar', price: 35000, category: 'peluches', badge: 'Set', rating: 4.7, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 45000 },
  { name: 'Panda Abrazo Grande', description: 'Panda de peluche de 60cm con detalles bordados', price: 78000, category: 'peluches', badge: '', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Gatito Bebé Suave', description: 'Peluche gatito con textura sedosa de 30cm', price: 42000, category: 'peluches', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Perrito Golden Peluche', description: 'Perro golden retriever de peluche de 50cm', price: 58000, category: 'peluches', badge: 'Favorito', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Flamingo Rosa Gigante', description: 'Flamingo de peluche de 90cm, decorativo y divertido', price: 95000, category: 'peluches', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Conejito Pascua Premium', description: 'Conejo con cesta de huevos decorativos incluidos', price: 55000, category: 'peluches', badge: '', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 68000 },
  { name: 'Dinosaurio Tierno', description: 'Dinosaurio de peluche verde con gorrito', price: 48000, category: 'peluches', badge: 'Divertido', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Oso Polar Suave', description: 'Oso polar de peluche blanco de 45cm', price: 62000, category: 'peluches', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Mapache Abrazable', description: 'Mapache de peluche con cola rayada de 40cm', price: 45000, category: 'peluches', badge: '', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Jirafa Amiga Alta', description: 'Jirafa de peluche de 70cm con manchas bordadas', price: 68000, category: 'peluches', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Koala Eucalipto', description: 'Koala de peluche gris con ramita de eucalipto', price: 52000, category: 'peluches', badge: 'Tierno', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Elefante Bebé Gris', description: 'Elefante de peluche mini de 25cm con orejas grandes', price: 38000, category: 'peluches', badge: '', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 48000 },
  { name: 'Tigre Rayas Suave', description: 'Tigre de peluche naranja con rayas negras de 50cm', price: 55000, category: 'peluches', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Pingüino Emperador', description: 'Pingüino de peluche con bufanda roja incluida', price: 49000, category: 'peluches', badge: 'Único', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caballito de Mar', description: 'Caballito de mar de peluche en tonos pastel de 35cm', price: 41000, category: 'peluches', badge: '', rating: 4.3, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Zorro Ártico Blanco', description: 'Zorro de peluche blanco con cola esponjosa de 45cm', price: 56000, category: 'peluches', badge: '', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Cordero Dreamy', description: 'Cordero de peluche nube súper suave de 40cm', price: 47000, category: 'peluches', badge: 'Suave', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // FLORES (20)
  { name: 'Bouquet Premium Rosas Rojas', description: '25 rosas rojas colombianas con follaje verde premium', price: 145000, category: 'flores', badge: 'Premium', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Ramo Girasoles Felices', description: '12 girasoles frescos con flores silvestres', price: 95000, category: 'flores', badge: 'Alegre', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Floral Elegance', description: 'Caja de madera con arreglo de rosas y lirios', price: 165000, category: 'flores', badge: 'Exclusivo', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Tulipanes Holandeses', description: '15 tulipanes importados en tonos vibrantes', price: 125000, category: 'flores', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Ramo Peonías Rosadas', description: '8 peonías rosadas con eucalipto decorativo', price: 155000, category: 'flores', badge: 'Romántico', rating: 5.0, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Arreglo Tropical Paraíso', description: 'Birds of paradise, heliconias y follaje tropical', price: 110000, category: 'flores', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Canasta Primaveral', description: 'Canasta rústica con flores de temporada variadas', price: 85000, category: 'flores', badge: '', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 105000 },
  { name: 'Rosas Blancas Pureza', description: '20 rosas blancas con baby breath y verde', price: 130000, category: 'flores', badge: 'Elegante', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Bouquet Lavanda Relax', description: 'Ramo de lavanda fresca con aroma relajante', price: 75000, category: 'flores', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Coração de Rosas', description: 'Arreglo en forma de corazón con 30 rosas rojas', price: 195000, category: 'flores', badge: 'Especial', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Orquídeas Phalaenopsis', description: 'Planta de orquídea blanca en maceta cerámica', price: 135000, category: 'flores', badge: 'Sofisticado', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Ramo Margaritas Campo', description: 'Ramo de margaritas blancas y amarillas', price: 55000, category: 'flores', badge: '', rating: 4.4, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 70000 },
  { name: 'Florero Cristal Rosas', description: 'Florero de cristal con 15 rosas mixtas', price: 120000, category: 'flores', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Bouquet Claveles Colombianos', description: '25 claveles colombianos en colores vivos', price: 80000, category: 'flores', badge: 'Nacional', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Arreglo Fiesta Floral', description: 'Arreglo festivo con globos y flores combinadas', price: 115000, category: 'flores', badge: 'Festivo', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Ramo Lisianthus Elegante', description: '12 lisianthus con follaje premium', price: 98000, category: 'flores', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Bouquet Rosas Rosadas', description: '20 rosas rosadas con verde ornamental', price: 125000, category: 'flores', badge: '', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Arreglo Mesa Centro', description: 'Arreglo floral elegante para mesa de centro', price: 140000, category: 'flores', badge: '', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Ramo Anturios Rojos', description: '10 anturios rojos con follaje tropical', price: 105000, category: 'flores', badge: '', rating: 4.7, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 130000 },
  { name: 'Jardín Mini Creativo', description: 'Mini jardín en frasco de cristal con suculentas', price: 65000, category: 'flores', badge: 'Creativo', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // DESAYUNOS (20)
  { name: 'Desayuno Princesa Deluxe', description: 'Bandeja completa con frutas, jugo, pan artesanal y flores', price: 125000, category: 'desayunos', badge: 'Premium', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Sorpresa Romántico', description: 'Bandeja con corazón de frutas, chocolate caliente y rosas', price: 98000, category: 'desayunos', badge: 'Romántico', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Ejecutivo Premium', description: 'Café premium, croissants, frutas y mermeladas artesanales', price: 85000, category: 'desayunos', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Cumpleaños Feliz', description: 'Pancakes decorados, jugo natural y velitas incluidas', price: 92000, category: 'desayunos', badge: 'Cumpleaños', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Brunch Dominical Especial', description: 'Huevos benedictinos, waffles, frutas y mimosa', price: 110000, category: 'desayunos', badge: 'Brunch', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Saludable Fresh', description: 'Bowl de açaí, smoothie verde, granola y frutas', price: 72000, category: 'desayunos', badge: 'Healthy', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Infantil Divertido', description: 'Cereales decorados, jugo, frutas y sorpresa incluida', price: 58000, category: 'desayunos', badge: 'Kids', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 72000 },
  { name: 'Desayuno Colombiano Tradicional', description: 'Tamal, chocolate, queso, pan y jugo de mora', price: 68000, category: 'desayunos', badge: 'Típico', rating: 4.7, isBestSeller: true, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Dulce Tentación', description: 'Croissants de chocolate, frutas y café especial', price: 78000, category: 'desayunos', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Mamá Especial', description: 'Bandeja elegante con flores, café gourmet y dulces', price: 135000, category: 'desayunos', badge: 'Mamá', rating: 5.0, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Pareja Amor', description: 'Bandeja para dos con champán, frutas y repostería', price: 155000, category: 'desayunos', badge: 'Pareja', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Café Gourmet', description: 'Selección de cafés especiales con pastas artesanales', price: 82000, category: 'desayunos', badge: 'Café', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Frutas Tropical', description: 'Surtido de frutas tropicales con yogur y granola', price: 65000, category: 'desayunos', badge: '', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 80000 },
  { name: 'Desayuno Panadería Artesanal', description: 'Surtido de panes artesanales con mermeladas caseras', price: 70000, category: 'desayunos', badge: 'Artesanal', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Aniversario Gold', description: 'Bandeja dorada con champán, fresas y repostería fina', price: 185000, category: 'desayunos', badge: 'Gold', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Vegano Green', description: 'Opciones 100% veganas con smoothie bowl y tostadas', price: 75000, category: 'desayunos', badge: 'Vegano', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Oficina Energía', description: 'Café, sándwiches, frutas para compartir en oficina', price: 95000, category: 'desayunos', badge: 'Oficina', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Mimosa Brunch', description: 'Jugo de naranja, waffles, tocino y huevos rancheros', price: 88000, category: 'desayunos', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Desayuno Navidad Mágico', description: 'Bandeja temática con chocolate caliente y galletas', price: 105000, category: 'desayunos', badge: 'Navidad', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Desayuno Personalizado Crea', description: 'Elige tus productos favoritos para tu bandeja ideal', price: 80000, category: 'desayunos', badge: 'Personaliza', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },

  // GLOBOS (20)
  { name: 'Bouquet Globos Cumpleaños', description: '10 globos de cumpleaños con helio y lazos', price: 55000, category: 'globos', badge: 'Cumple', rating: 4.7, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Arco Globos Espectacular', description: 'Arco decorativo de 2m con globos de colores', price: 185000, category: 'globos', badge: 'Impacto', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globo Número Gigante', description: 'Globo número de 90cm con colores a elegir', price: 35000, category: 'globos', badge: '', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Columna Globos Elegante', description: 'Columna decorativa de 1.5m para eventos', price: 120000, category: 'globos', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globos Rosados Princesa', description: 'Set de 15 globos rosados con confeti interior', price: 65000, category: 'globos', badge: 'Princesa', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Bouquet Mini Globos', description: '6 mini globos con mensajes de amor', price: 28000, category: 'globos', badge: '', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 38000 },
  { name: 'Globos Foil Corazón', description: '3 globos foil en forma de corazón rojo', price: 42000, category: 'globos', badge: 'Amor', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globos Estrella Foil', description: '5 globos foil en forma de estrella dorada', price: 48000, category: 'globos', badge: 'Brillante', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Set Globos Baby Shower', description: 'Decoración completa para baby shower con 20 globos', price: 95000, category: 'globos', badge: 'Baby', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globos Metálicos Premium', description: '8 globos metálicos surtidos con acabado espejo', price: 52000, category: 'globos', badge: 'Premium', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globo Caja Sorpresa', description: 'Caja que al abrirla liberan 10 globos con helio', price: 78000, category: 'globos', badge: 'Sorpresa', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globos Transparentes Confeti', description: '6 globos transparentes con confeti de colores', price: 45000, category: 'globos', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Bouquet Arcoíris', description: '12 globos en todos los colores del arcoíris', price: 58000, category: 'globos', badge: 'Color', rating: 4.7, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 72000 },
  { name: 'Globos Letras Frase', description: 'Globos foil formando la frase que elijas', price: 85000, category: 'globos', badge: 'Personaliza', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globos Negocios Corporate', description: 'Set de globos elegantes para eventos corporativos', price: 75000, category: 'globos', badge: 'Corporate', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globo Gigante 90cm', description: 'Globo gigante de 90cm con mensaje personalizado', price: 45000, category: 'globos', badge: '', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globos Unicornio Mágico', description: 'Set de 8 globos temática unicornio con colores pastel', price: 62000, category: 'globos', badge: 'Unicornio', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Globos Boda Elegante', description: 'Decoración de globos blanca y dorada para bodas', price: 150000, category: 'globos', badge: 'Boda', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globos Animalitos', description: '6 globos foil en forma de animales tiernos', price: 50000, category: 'globos', badge: 'Tiernos', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Pack Decoración Completa', description: 'Arco + columna + bouquet para decoración total', price: 250000, category: 'globos', badge: 'Completo', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // CUMPLEAÑOS (20)
  { name: 'Sorpresa Feliz Cumpleaños Gold', description: 'Caja dorada con regalo, globos, flores y tarjeta', price: 165000, category: 'cumpleanos', badge: 'Gold', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Kit Fiesta Completo', description: 'Decoración, platos, vasos, servilletas y gorritos', price: 85000, category: 'cumpleanos', badge: 'Fiesta', rating: 4.7, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Cumpleaños Sorpresa', description: 'Caja misteriosa con 5 regalos sorpresa temáticos', price: 120000, category: 'cumpleanos', badge: 'Sorpresa', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Pastel Decorado Premium', description: 'Pastel artesanal para 10 personas con decoración personalizada', price: 95000, category: 'cumpleanos', badge: 'Delicioso', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Corona Cumpleañera', description: 'Corona brillante con velas para la cumpleañera', price: 35000, category: 'cumpleanos', badge: 'Reina', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Torta Cupcakes Festiva', description: '12 cupcakes decorados con temática de cumpleaños', price: 78000, category: 'cumpleanos', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Piñata Divertida', description: 'Piñata temática llena de dulces y sorpresas', price: 45000, category: 'cumpleanos', badge: 'Fiesta', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 58000 },
  { name: 'Gorra Feliz Cumpleaños', description: 'Gorra bordada con diseño de cumpleaños', price: 28000, category: 'cumpleanos', badge: '', rating: 4.3, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Set Velas Año Nuevo', description: 'Velas numéricas brillantes para la torta', price: 18000, category: 'cumpleanos', badge: '', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Bolsa Regalo Premium', description: 'Bolsa de regalo con moño, tarjeta y papel seda', price: 25000, category: 'cumpleanos', badge: '', rating: 4.2, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Combo Cumple Infantil', description: 'Pastel + globos + decoración + piñata para niños', price: 145000, category: 'cumpleanos', badge: 'Kids', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Banda Cumpleañero LED', description: 'Banda luminosa con mensaje de feliz cumpleaños', price: 22000, category: 'cumpleanos', badge: 'LED', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Caja Dulces Retro', description: 'Caja nostalgic con dulces colombianos clásicos', price: 55000, category: 'cumpleanos', badge: 'Dulces', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Decoración Sala Fiesta', description: 'Set completo de decoración para sala de fiesta', price: 110000, category: 'cumpleanos', badge: '', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Cumple Sorpresa Medianoche', description: 'Entrega sorpresa a medianoche con serenata', price: 175000, category: 'cumpleanos', badge: 'Medianoche', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Tarta Helada Tropical', description: 'Tarta helada de frutas tropicales para 8 personas', price: 88000, category: 'cumpleanos', badge: 'Helada', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Combo Amigas Brunch', description: 'Brunch para 4 con champán y decoración rosa', price: 195000, category: 'cumpleanos', badge: 'Brunch', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Chocolates Artesanales', description: '16 chocolates artesanales en caja de lujo', price: 68000, category: 'cumpleanos', badge: 'Choco', rating: 4.8, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 85000 },
  { name: 'Serenata Vallenata', description: 'Serenata con grupo musical + regalo + flores', price: 280000, category: 'cumpleanos', badge: 'Serenata', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Experiencia Spa Cumple', description: 'Kit spa con sales, velas y productos premium', price: 115000, category: 'cumpleanos', badge: 'Spa', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // ANIVERSARIOS (20)
  { name: 'Caja Amor Eterno', description: 'Caja de lujo con vino, chocolates y carta de amor', price: 155000, category: 'aniversarios', badge: 'Amor', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Cena Romántica Para Dos', description: 'Arreglo de mesa con velas, flores y chocolates', price: 125000, category: 'aniversarios', badge: 'Romántico', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Set Vino y Quesos', description: 'Vino premium con tabla de quesos y frutos secos', price: 98000, category: 'aniversarios', badge: 'Vino', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Romance en la Noche', description: 'Arreglo con velas aromáticas, pétalos y champán', price: 85000, category: 'aniversarios', badge: 'Noche', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Carta Amor Eterna', description: 'Carta caligrafiada a mano en pergamino con marco', price: 45000, category: 'aniversarios', badge: 'Carta', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Álbum Recuerdos Premium', description: 'Álbum de cuero para fotos con páginas decoradas', price: 68000, category: 'aniversarios', badge: 'Recuerdos', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Pétalos Decoración Cama', description: 'Pétalos de rosa para decoración con velas', price: 38000, category: 'aniversarios', badge: '', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Combo Aniversario Rosa', description: 'Rosas + chocolates + vino + tarjeta', price: 175000, category: 'aniversarios', badge: 'Completo', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Marco Foto Corazón', description: 'Marco dorado con diseño de corazón para foto de pareja', price: 52000, category: 'aniversarios', badge: '', rating: 4.4, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 65000 },
  { name: 'Experiencia En Pareja', description: 'Vale para experiencia: spa, cena o aventura', price: 220000, category: 'aniversarios', badge: 'Experiencia', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Candle Light Dinner', description: 'Kit completo para cena a luz de velas en casa', price: 105000, category: 'aniversarios', badge: 'Candelabro', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Collar Doble Corazón', description: 'Collar con dijes de corazón para los dos', price: 75000, category: 'aniversarios', badge: 'Joya', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Box Pareja Netflix', description: 'Snacks, cobija, vino para noche de películas', price: 92000, category: 'aniversarios', badge: 'Movie', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Fragancias Para Dos', description: 'Set de perfumes miniatura para él y ella', price: 88000, category: 'aniversarios', badge: 'Fragancia', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Ritual Pareja Spa', description: 'Kit spa para dos con aceites y sales', price: 115000, category: 'aniversarios', badge: 'Spa Duo', rating: 4.8, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Juego Pareja Divertido', description: 'Juego de mesa romántico para parejas', price: 42000, category: 'aniversarios', badge: 'Juego', rating: 4.4, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 55000 },
  { name: 'Carta Mapa Estrellas', description: 'Mapa de las estrellas del día que se conocieron', price: 65000, category: 'aniversarios', badge: 'Estrellas', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Chocolate Artesanal Corazón', description: 'Chocolate belga en forma de corazón grande', price: 48000, category: 'aniversarios', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Promesas Cápsula Tiempo', description: 'Cápsula del tiempo para escribir promesas de amor', price: 35000, category: 'aniversarios', badge: 'Cápsula', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Aniversario Silver Luxe', description: 'Experiencia de lujo con limo, cena y regalo', price: 450000, category: 'aniversarios', badge: 'Luxe', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // PERSONALIZADOS (20)
  { name: 'Taza Personalizada Foto', description: 'Taza cerámica con tu foto y mensaje personalizado', price: 35000, category: 'personalizados', badge: 'Personal', rating: 4.7, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Almohada Foto Corazón', description: 'Almohada con impresión de tu foto favorita', price: 48000, category: 'personalizados', badge: 'Único', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Carta Caligrafiada Arte', description: 'Carta escrita a mano por calígrafo profesional', price: 25000, category: 'personalizados', badge: 'Arte', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Mágica Personalizada', description: 'Caja de madera grabada con nombre y mensaje', price: 55000, category: 'personalizados', badge: '', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Lámpara Nombre Brillante', description: 'Lámpara LED con nombre cortado en acrílico', price: 62000, category: 'personalizados', badge: 'Brillante', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Cojín Letras Iniciales', description: 'Cojín bordado con las iniciales de la pareja', price: 38000, category: 'personalizados', badge: '', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Funda Celular Personalizada', description: 'Funda con diseño único y foto personal', price: 32000, category: 'personalizados', badge: 'Tech', rating: 4.4, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 42000 },
  { name: 'Cuadro Foto Canvas', description: 'Impresión en canvas de alta calidad en marco', price: 72000, category: 'personalizados', badge: 'Arte', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Agenda Personalizada', description: 'Agenda 2025 con nombre en portada de cuero', price: 42000, category: 'personalizados', badge: '', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Llavero Foto Mini', description: 'Llavero acrílico con foto en alta definición', price: 18000, category: 'personalizados', badge: 'Mini', rating: 4.3, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Caja Te Recuerdo', description: 'Caja con frascos de recuerdos personalizables', price: 65000, category: 'personalizados', badge: 'Recuerdos', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Camiseta Mensaje Único', description: 'Camiseta con tu diseño o frase personalizada', price: 45000, category: 'personalizados', badge: '', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Calendario Fotos 12 Meses', description: 'Calendario con 12 fotos y fechas especiales', price: 55000, category: 'personalizados', badge: 'Calendario', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Imán Refri Foto Set', description: 'Set de 6 imanes con fotos para nevera', price: 22000, category: 'personalizados', badge: '', rating: 4.2, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Rompecabezas Foto', description: 'Rompecabezas de 500 piezas con tu foto', price: 38000, category: 'personalizados', badge: 'Puzzle', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Botella Térmica Grabada', description: 'Botella térmica con nombre grabado en láser', price: 52000, category: 'personalizados', badge: 'Natural', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 65000 },
  { name: 'Caja Madera Mensaje', description: 'Caja de pino con mensaje grabado artesanalmente', price: 42000, category: 'personalizados', badge: 'Natural', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Mousepad Foto', description: 'Mousepad premium con impresión de tu foto', price: 28000, category: 'personalizados', badge: '', rating: 4.3, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Bolígrafo Grabado Luxe', description: 'Bolígrafo de lujo con nombre grabado', price: 35000, category: 'personalizados', badge: 'Luxe', rating: 4.5, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Set Regalo Empresarial', description: 'Set con agenda, bolígrafo y taza personalizados', price: 88000, category: 'personalizados', badge: 'Corporate', rating: 4.7, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },

  // SORPRESAS (20)
  { name: 'Sorpresa Box Misteriosa', description: 'Caja misteriosa con 5 regalos seleccionados', price: 95000, category: 'sorpresas', badge: 'Misterio', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Canción Personalizada', description: 'Canción original compuesta e interpretada para ti', price: 120000, category: 'sorpresas', badge: 'Musical', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: true },
  { name: 'Experiencia QR Mágica', description: 'Página web personalizada accede con código QR', price: 45000, category: 'sorpresas', badge: 'Digital', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: true },
  { name: 'Video Sorpresa Emocional', description: 'Video editado con fotos y mensajes de seres queridos', price: 85000, category: 'sorpresas', badge: 'Video', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: true },
  { name: 'Carta Interactiva Digital', description: 'Carta digital con animaciones y música personalizada', price: 35000, category: 'sorpresas', badge: 'Digital', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: true },
  { name: 'Scavenger Hunt Regalo', description: 'Búsqueda del tesoro con pistas que llevan al regalo', price: 75000, category: 'sorpresas', badge: 'Aventura', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Sorpresa Medianoche', description: 'Entrega sorpresa a las 12am con velas y música', price: 110000, category: 'sorpresas', badge: '12AM', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Flash Mob Sorpresa', description: 'Coreografía sorpresa con bailarines profesionales', price: 350000, category: 'sorpresas', badge: 'Flash Mob', rating: 5.0, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Raspa Gana', description: 'Caja con tarjetas raspa para revelar premios', price: 48000, category: 'sorpresas', badge: 'Raspa', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 62000 },
  { name: 'Sorpresa Detrás Puerta', description: 'Decoración y regalo detrás de la puerta al abrir', price: 68000, category: 'sorpresas', badge: 'Sorpresa', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Carta Botella Mensaje', description: 'Mensaje dentro de botella con diseño vintage', price: 32000, category: 'sorpresas', badge: 'Botella', rating: 4.4, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Globo Caja Explosión', description: 'Caja que explota en confeti y regalos al abrirla', price: 82000, category: 'sorpresas', badge: 'Explosión', rating: 4.8, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Sorpresa Espejo Mágico', description: 'Espejo que revela mensaje oculto al acercarse', price: 58000, category: 'sorpresas', badge: 'Mágico', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Carta Scratch Secreta', description: 'Carta con área scratch que revela tu mensaje', price: 22000, category: 'sorpresas', badge: '', rating: 4.3, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Roma Sorpresa Foto', description: 'Collage de fotos que forma un corazón gigante', price: 55000, category: 'sorpresas', badge: 'Fotos', rating: 4.7, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Sorpresa Parranda', description: 'Grupo de parranderos con música y alegría', price: 180000, category: 'sorpresas', badge: 'Parranda', rating: 4.9, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
  { name: 'Caja Tiempo Cápsula', description: 'Cápsula del tiempo con mensajes para el futuro', price: 65000, category: 'sorpresas', badge: 'Tiempo', rating: 4.6, isBestSeller: false, isOffer: false, isRecommended: false, isDigitalExperience: false },
  { name: 'Sorpresa Película Personal', description: 'Mini película protagonizada por la persona sorpresa', price: 150000, category: 'sorpresas', badge: 'Cine', rating: 4.9, isBestSeller: false, isOffer: false, isRecommended: true, isDigitalExperience: true },
  { name: 'Regalo Invisible Box', description: 'Caja vacía que revela el regalo de forma mágica', price: 42000, category: 'sorpresas', badge: 'Magia', rating: 4.5, isBestSeller: false, isOffer: true, isRecommended: false, isDigitalExperience: false, originalPrice: 55000 },
  { name: 'Mega Sorpresa Ultimate', description: 'Combo ultimate: globos + flores + regalo + serenata', price: 320000, category: 'sorpresas', badge: 'Ultimate', rating: 5.0, isBestSeller: true, isOffer: false, isRecommended: true, isDigitalExperience: false },
];

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing products
  await db.product.deleteMany({});

  // Create all products with proper image mapping
  for (let i = 0; i < rawProducts.length; i++) {
    const product = rawProducts[i];
    const image = getImage(product.category, i);

    await db.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        badge: product.badge || null,
        rating: product.rating,
        image: image,
        isBestSeller: product.isBestSeller,
        isOffer: product.isOffer,
        isRecommended: product.isRecommended,
        isDigitalExperience: product.isDigitalExperience,
        originalPrice: product.originalPrice || null,
      },
    });
  }

  const count = await db.product.count();
  console.log(`✅ Seeded ${count} products successfully!`);

  // Print category counts
  for (const [slug, images] of Object.entries(categoryImageMap)) {
    const catCount = await db.product.count({ where: { category: slug } });
    console.log(`  ${slug}: ${catCount} products → ${images.join(', ')}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
