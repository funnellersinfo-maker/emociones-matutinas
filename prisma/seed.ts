import { db } from '../src/lib/db';

type P = [string, string, string, number, number?, string?, number?, boolean?, boolean?, boolean?];
interface CC { c: {n:string;h:string}[]; s: {n:string;d:number}[]; f: string[]; b: {n:string;d:number;desc:string}[]; p: P[] }

const C: Record<string, CC> = {
peluches:{c:[{n:'Rosa',h:'#f9a8d4'},{n:'Blanco',h:'#fef2f2'},{n:'Beige',h:'#e8c9a0'},{n:'Gris',h:'#d1d5db'},{n:'Lavanda',h:'#c4b5fd'}],s:[{n:'Pequeño 30cm',d:-25000},{n:'Mediano 50cm',d:0},{n:'Grande 80cm',d:30000},{n:'Gigante 120cm',d:75000}],f:['Confeccionado a mano','Microfibra hipoalergénica','Entrega con dedicatoria','Envoltura regalo incluida'],b:[{n:'Tarjeta dedicatoria artesanal',d:5000,desc:'Tarjeta hecha a mano con tu mensaje'},{n:'Caja de chocolates belgas',d:25000,desc:'12 chocolates artesanales'},{n:'Globo metálico personalizado',d:12000,desc:'Globo foil con mensaje'}],p:[
['Oso Gigante Premium','Oso de peluche de 80cm, ultra suave','Majestuoso oso de microfibra premium con relleno que mantiene la forma perfecta. Ideal para sorprender en cumpleaños o aniversarios.',89000,null,'Popular',4.9,true,null,true],
['Conejo de Pelo Largo','Conejito suave con orejas largas','Adorable conejito de pelo sedoso. Materiales certificados safe para todas las edades.',55000,null,'Nuevo',4.7,null,null,true],
['Unicornio Arcoíris','Unicornio mágico con crín colorida','Unicornio con crín de colores y cuerno brillante. Relleno extra suave.',67000,null,'Favorito',4.8,true,null,true],
['Oso de Rosas Rojo','Oso hecho con rosas artificiales','Oso formado por cientos de rosas en rojo intenso. Pieza decorativa que nunca se marchita.',129000,null,'Exclusivo',5.0,true,null,true],
['Peluche Corazón Gigante','Corazón rojo con mensaje bordado','Enorme corazón con "Te Amo" bordado en dorado. El regalo romántico por excelencia.',72000,null,'Romántico',4.9,null,null,true],
['Gato Bigotes Suave','Gatito con bigotes y cola movible','Gatito con bigotes de hilo y cola articulada. Pelaje gris ultra suave.',45000,null,4.6],
['Perro Salchicha Divertido','Perrito salchicha con cuerpo alargado','Cuerpo alargado y patitas cortas. Expresión tierna y textura extra suave.',42000,55000,'Divertido',4.5,null,true],
['Peluche Estrella Brillante','Estrella con luces LED integradas','Estrella mágica que ilumina las noches. Lámpara de noche con temporizador.',58000,null,'Luminoso',4.8,null,null,true],
['Oso Polar Ártico','Oso polar blanco extra peludo','Pelaje blanco denso. Ojos negros y nariz bordada.',78000,null,4.7],
['Dinosaurio T-Rex Tierno','T-Rex verde con gorrito','T-Rex con gorrito tejido. Perfecto para pequeños paleontólogos.',52000,65000,'Cool',4.6,null,true],
['Panda Abrazo Grande','Panda gigante blanco y negro','Suavidad de nubes. Brazos para el abrazo más cálido.',95000,null,'Clásico',4.9,true,null,true],
['Zorro Bosque Mágico','Zorrito naranja con cola esponjosa','Zorrito con cola extra esponjosa. Inspirado en cuentos de hadas.',49000,null,4.5],
['Peluche Nube Suave','Nube blanca con cara kawaii','Nube kawaii con carita sonriente. La más suave de la colección.',38000,null,'Kawaii',4.7,null,null,true],
['Elefante Fortuna','Elefantito gris con sombrero dorado','Elefante de la suerte. La trompa hacia arriba atrae buena fortuna.',47000,null,'Suerte',4.6],
['Oso Bufanda Roja','Oso clásico con bufanda tejida','Oso con bufanda tejida roja. Pelaje marrón suave como la miel.',63000,null,4.8,null,null,true],
['Conejito Pascua','Conejo con canasta de huevos','Conejo de Pascua con canasta de huevitos. Orejas posables.',51000,null,'Temporada',4.5],
['Peluche Llama Andina','Llama con poncho tejido colombiano','Llama con poncho artesanal colombiano. Pelaje esponjoso.',69000,null,'Colombiano',4.8,null,null,true],
['Pulpo Abrazos 8 Brazos','Pulpo con 8 tentáculos abrazables','8 tentáculos para abrazos. Colores vibrantes y textura suave.',54000,null,'Original',4.7],
['Peluche Cuidador Emocional','Peluche terapéutico con peso y lavanda','Peso calibrado de abrazo profundo y bolsa de lavanda. Recomendado por terapeutas.',82000,null,'Bienestar',4.9,true,null,true],
['Mapache Travieso','Mapache con antifaz y cola rayada','Mapache con cola esponjosa. Expresión traviesa.',53000,68000,null,4.6,null,true]]},

flores:{c:[{n:'Rojo',h:'#ef4444'},{n:'Rosa',h:'#f9a8d4'},{n:'Blanco',h:'#fef2f2'},{n:'Amarillo',h:'#fbbf24'},{n:'Lavanda',h:'#c4b5fd'}],s:[{n:'Bucle 6 rosas',d:-20000},{n:'Ramo 12 rosas',d:0},{n:'Ramo 24 rosas',d:35000},{n:'Ramo 50 rosas',d:80000}],f:['Flores frescas del día','Envoltura elegante','Tarjeta dedicatoria incluida','Entrega cuidadosa'],b:[{n:'Agregar chocolates Godiva',d:35000,desc:'Caja de 8 chocolates'},{n:'Incluir botella de vino',d:45000,desc:'Vino espumoso'},{n:'Agregar peluche pequeño',d:22000,desc:'Osito acompañante'}],p:[
['Ramo Rosas Rojas Premium','12 rosas ecuatorianas con follaje','Ramo de 12 rosas ecuatorianas de apertura perfecta. Follaje verde y papel kraft.',95000,null,'Clásico',4.9,true,null,true],
['Caja Rosas y Chocolates','Caja de madera con rosas y chocolates','Caja de madera con rosas y chocolates artesanales colombianos.',135000,null,'Premium',5.0,true,null,true],
['Ramo Girasoles Alegría','Girasoles frescos con margaritas','Ramo lleno de luz con girasoles de tallo largo. Energía positiva.',78000,null,'Alegre',4.7,null,null,true],
['Arreglo Tropical Exótico','Aves del paraíso y heliconias','Arreglo exótico con aves del paraíso y follaje tropical colombiano.',112000,null,'Exótico',4.8],
['Ramo Tulipanes Holanda','Tulipanes importados colores mixtos','Tulipanes de Holanda. Se abren gradualmente por días.',125000,null,'Importado',4.9,null,null,true],
['Cesta Flores y Frutas','Cesta con flores y frutas tropicales','Cesta artesanal con flores y frutas: mango, papaya, fresas.',99000,null,'Completo',4.7],
['Ramo Peonías Delicadas','Peonías rosas y blancas','Peonías como nubes de pétalos. Disponibilidad limitada.',155000,null,'Lujo',5.0,true,null,true],
['Corona Floral Elegante','Corona de flores para evento','Corona elegante con flores de temporada.',145000,null,'Evento',4.6],
['Ramo Lavanda Relax','Lavanda fresca aroma relajante','Lavanda con aroma relajante. Seca manteniendo fragancia semanas.',58000,72000,'Relajante',4.5,null,true],
['Caja Sombrero Florecida','Caja sombrero con arreglo floral','Caja sombrero con rosas y claveles. Recuerdo decorativo.',118000,null,'Elegante',4.8,null,null,true],
['Ramo Margaritas Campo','Margaritas blancas centro amarillo','Ramo campestre de margaritas frescas.',45000,58000,'Campestre',4.4,null,true],
['Arreglo Orquídeas Colombianas','Orquídeas auténticas colombianas','Orquídeas colombianas, la flor nacional.',168000,null,'Nacional',5.0,true,null,true],
['Ramo Rosas Arcoíris','Rosas en todos los colores','Rosas en cada color del arcoíris. Técnica holandesa.',105000,null,'Colorido',4.7,null,null,true],
['Centro Mesa Floral','Centro de mesa con velas y flores','Flores con velas aromáticas. Escenario romántico garantizado.',88000,null,'Cena',4.6],
['Ramo Lirios Blancos Paz','Lirios blancos perfume intenso','Lirios de perfume embriagador. Revelan su belleza interior.',85000,null,'Paz',4.7],
['Bouquet Novia Soñado','Ramo de novia rosas y paso a paso','Ramo de novia: rosas blancas con perlitas. Personalizable.',185000,null,'Novia',5.0,null,null,true],
['Ramo Claveles Rojos','Claveles rojos grandes y frescos','Claveles que duran hasta dos semanas.',55000,69000,'Duradero',4.5,null,true],
['Caja Cristal Rosas Eternas','Caja cristal con rosas preservadas','Rosas eternas que duran hasta 3 años. Pieza de lujo.',195000,null,'Eterno',5.0,true,null,true],
['Ramo Astromelias Mix','Astromelias colores vibrantes','Astromelias colombianas en múltiples colores.',38000,48000,'Económico',4.3,null,true],
['Arreglo Bonsái Floral','Mini bonsái decorado con flores','Bonsái con flores frescas. Fusión japonesa-colombiana.',138000,null,'Oriental',4.8]]},

desayunos:{c:[{n:'Clásico',h:'#d4a574'},{n:'Rosa',h:'#f9a8d4'},{n:'Verde',h:'#86efac'},{n:'Azul',h:'#93c5fd'}],s:[{n:'Individual',d:0},{n:'Pareja',d:25000},{n:'Familiar',d:45000}],f:['Ingredientes frescos del día','Preparado artesanalmente','Dedicatoria en bandeja','Entrega puntual 7am-9am'],b:[{n:'Agregar botella de vino',d:40000,desc:'Vino espumoso'},{n:'Incluir ramo de flores',d:35000,desc:'Ramo pequeño de rosas'},{n:'Agregar peluche pequeño',d:18000,desc:'Osito acompañante'}],p:[
['Desayuno Sorpresa Completo','Frutas, arepa, huevos y jugo','Bandeja con frutas tropicales, arepa con queso, huevos, jugo, café y pan dulce.',75000,null,'Popular',4.9,true,null,true],
['Desayuno Campestre Parrilla','Carnes a la parrilla y arepas','Chicharrón, carnes asadas, arepas, huevos pericos, chocolate. En canasta de madera.',95000,null,'Abundante',4.8,null,null,true],
['Desayuno Frutas Tropicales','Frutas con yogur y granola','Mango, papaya, fresas, kiwi con yogur griego, granola y miel.',68000,null,'Saludable',4.7,null,null,true],
['Desayuno Romántico Pareja','Para dos con champagne y flores','Huevos benedictinos, croissants, champagne. Pétalos y vela.',135000,null,'Romántico',5.0,true,null,true],
['Desayuno Pancakes Especiales','Torre de pancakes con frutas y miel','Pancakes con frutas, miel maple, crema batida. Jugo y café.',72000,null,'Dulce',4.8],
['Desayuno Colombiano Tradicional','Tamal, chocolate, queso, almojábana','Tamal tolimense, chocolate santafereño, almojábana, huevos.',58000,72000,'Tradicional',4.6,null,true],
['Desayuno Vip Ejecutivo','Gourmet con salmón y bagel','Bagel con salmón, queso crema, café especial y jugo verde.',115000,null,'VIP',4.9,null,null,true],
['Desayuno Infantil Divertido','Temático con formas divertidas','Pancakes de animales, frutas en estrellas, jugo de colores.',52000,null,'Niños',4.7],
['Desayuno Waffles Belgas','Waffles con nutella y fresas','Waffles belgas con Nutella, fresas, helado. Capuchino y jugo.',78000,null,'Belga',4.8,null,null,true],
['Desayuno Detox Verde','Smoothies y bowls saludables','Smoothie verde, açaí bowl, tostada integral con palta. Té matcha.',65000,null,'Detox',4.5],
['Desayuno Tarta Cumpleaños','Con mini tarta de cumpleaños','Mini tarta con velitas, croissants, frutas, café y jugo.',88000,null,'Cumpleaños',4.9,null,null,true],
['Desayuno Café Especial','Cata de cafés de especialidad','3 cafés colombianos, galletas, arepa de choclo. Bolsa café regalo.',92000,null,'Café',4.8,null,null,true],
['Desayuno Cesta Premium','Cesta gourmet productos colombianos','Cesta: quesos, embutidos, mermeladas, café, chocolate, pan artesanal.',148000,null,'Gourmet',5.0,true,null,true],
['Desayuno Arepas Gourmet','Arepas con diferentes rellenos','Cuatro arepas: pollo, carnes, queso, vegetariana. Ají y guacamole.',62000,78000,'Arepero',4.6,null,true],
['Desayuno Croissants París','Croissants con mermeladas artesanales','Croissants, pain au chocolat, mermeladas, café au lait.',82000,null,'Francés',4.7],
['Desayuno Enamorados Cama','Bandeja corazón para servir en cama','Bandeja corazón con huevos, tostadas, frutas. Pétalos y vela.',105000,null,'Amor',4.9,null,null,true],
['Desayuno Bowl Power','Bowls energéticos con superfoods','Açaí bowl, bowl de quinoa con aguacate. Smoothie y té matcha.',70000,null,'Power',4.6],
['Desayuno Mimosa Brunch','Brunch con mimosas y postre','Huevos benedictinos, tablado quesos, mimosas, mini cheesecake.',125000,null,'Brunch',4.8,null,null,true],
['Desayuno Chocolate Caliente','Chocolate santafereño con todo','Chocolate espeso con queso, pan, buñuelos, huevos pericos.',55000,68000,'Cálido',4.5,null,true],
['Desayuno Sorpresa Nocturno','Entregado al amanecer con serenata','Desayuno a las 5am con serenata. Incluye flores y tarjeta.',165000,null,'Amanecer',5.0,true,null,true]]},

globos:{c:[{n:'Rojo',h:'#ef4444'},{n:'Rosa',h:'#f9a8d4'},{n:'Dorado',h:'#d4a574'},{n:'Azul',h:'#60a5fa'},{n:'Multicolor',h:'#fbbf24'}],s:[{n:'Bucle 5 globos',d:0},{n:'Ramo 10 globos',d:20000},{n:'Arco 20 globos',d:50000}],f:['Globos de helio premium','Arreglo personalizado','Lazo decorativo incluido','Entrega sin reventar'],b:[{n:'Agregar peluche pequeño',d:18000,desc:'Osito colgante'},{n:'Incluir caja de chocolates',d:25000,desc:'8 chocolates'},{n:'Agregar tarjeta sonora',d:8000,desc:'Tarjeta con mensaje grabado'}],p:[
['Bouquet Globos Feliz Cumple','Ramo globos diseño de cumpleaños','Globos de helio con diseños de cumpleaños, estrellas y confeti.',45000,null,'Fiesta',4.7,true,null,true],
['Arco Globos Romántico','Arco globos rojos y rosas con luces','Arco con luces LED. Instalación incluida en Bogotá.',185000,null,'Romántico',4.9,null,null,true],
['Globo Caja Explosión','Caja con globos que saltan al abrir','Caja que libera globos y confeti. Regalo escondido. Sorpresa viral.',95000,null,'Viral',5.0,true,null,true],
['Número Gigante Metálico','Globo número de foil metálico','Globo gigante foil número 0-9. Helio premium 2 semanas.',35000,null,'Número',4.8,true],
['Columna Globos Elegante','Columna decorativa 1.8m evento','Columna de 1.8m con base estabilizadora.',125000,null,'Evento',4.7],
['Globos Letras Nombre','Globos foil formando nombre','Globos foil de 40cm con helio premium.',65000,null,'Personalizado',4.8,null,null,true],
['Bouquet Globos Baby Shower','Globos tonos pastel baby shower','Diseños de mamadera y zapatito. Globo "Welcome Baby".',55000,null,'Baby',4.6],
['Globo Sorpresa Interior','Globo gigante con regalo y confeti','Globo transparente 90cm. Regalo al reventar.',85000,null,'Misterio',4.9,null,null,true],
['Globos Unicornio Mágico','Set globos tema unicornio','Globo foil unicornio 80cm, globos rosa, violeta y estrellas.',72000,null,'Mágico',4.7],
['Globos Navidad Festivos','Globos temáticos navideños','Renos, copos de nieve, Santa. Rojo, verde y dorado.',68000,85000,'Navidad',4.5,null,true],
['Globos Graduación Éxito','Globos con birrete de graduación','Globo foil birrete, números del año, colores institucionales.',58000,null,'Graduación',4.6],
['Bouquet Globos Arcoíris','Ramo de globos en todos los colores','10 globos de látex premium en cada color.',42000,55000,'Colorido',4.5,null,true],
['Globos Pedida Matrimonio','Set romántico letras ¿Te casas?','Letras foil "¿Te Casas Conmigo?" con globos rojo y dorado.',155000,null,'Pedida',5.0,true,null,true],
['Globos Disney Princesas','Globos con personajes Disney','Princesas Disney en foil de alta calidad.',78000,null,'Disney',4.7],
['Globos Spiderman Héroe','Globos temáticos Spiderman','Globo foil gigante Spiderman, globos rojo y azul.',65000,null,'Héroe',4.6],
['Globos Bodas Elegantes','Set globos elegantes para boda','Globos blanco y dorado, lazos de organza. "Mr & Mrs".',165000,null,'Boda',4.9,null,null,true],
['Globos Minions Fiesta','Globos con tema Minions','Globos foil Minions, globos amarillo y azul.',62000,78000,'Minions',4.5,null,true],
['Globos Rosas Eternas','Globos foil forma de rosa','Globos rosa gigante en rojo, rosa y dorado.',48000,null,'Rosa',4.7],
['Globos Empresariales Corp','Globos con logo corporativo','Globos impresos con logo y colores corporativos.',85000,null,'Corp',4.4],
['Globos Cumple Quinceañera','Set especial para quinceañera','Globos rosa y dorado, número "15" gigante, corona foil.',98000,null,'Quince',4.8,null,null,true]]},

cumpleanos:{c:[{n:'Multicolor',h:'#fbbf24'},{n:'Rosa',h:'#f9a8d4'},{n:'Azul',h:'#60a5fa'},{n:'Dorado',h:'#d4a574'}],s:[{n:'Básico',d:0},{n:'Premium',d:30000},{n:'Deluxe',d:60000}],f:['Personalizado para ti','Empaque fiesta incluido','Tarjeta de cumpleaños','Entrega el día indicado'],b:[{n:'Agregar torta pequeña',d:35000,desc:'Torta individual con velitas'},{n:'Incluir serenata',d:45000,desc:'Serenata de 3 canciones'},{n:'Agregar corona cumpleaños',d:8000,desc:'Corona brillante'}],p:[
['Combo Cumpleaños Completo','Globos, flores, torta y serenata','Ramo de flores, 10 globos, mini torta y tarjeta.',165000,null,'Completo',5.0,true,null,true],
['Caja Sorpresa Cumpleañera','Caja con regalos sorpresa temáticos','Caja misteriosa: confeti, regalo, dulces y carta sorpresa.',95000,null,'Sorpresa',4.8,true,null,true],
['Cumple Sorpresa Medianoche','Sorpresa a media noche con velas','A media noche con velas, torta, globos y canción.',145000,null,'Medianoche',5.0,true,null,true],
['Kit Fiesta Cumpleaños','Decoración completa para fiesta','Guirnalda, 20 globos, mantel, servilletas y centros de mesa.',85000,null,'Fiesta',4.6],
['Torta Personalizada Entrega','Torta decorada con entrega y velitas','Torta artesanal decorada. Sabores: chocolate, vainilla, red velvet.',78000,null,'Torta',4.8,null,null,true],
['Piñata Cumpleaños Grande','Piñata rellena de dulces y sorpresas','Piñata artesanal rellena de dulces colombianos. Palo incluido.',65000,82000,'Piñata',4.5,null,true],
['Corona y Cetro Cumpleañero','Corona brillante y cetro','Corona con diamantes fantasía y cetro. Incluye capa.',32000,null,'Rey',4.4],
['Cupcakes Torre Cumpleaños','Torre de cupcakes decorados','12 cupcakes: red velvet, chocolate, vainilla. Display incluido.',72000,null,'Cupcakes',4.7,null,null,true],
['Banner Foto Cumpleaños','Banner con fotos del cumpleañero','Banner de tela con 10 fotos desde bebé hasta hoy.',55000,null,'Memorias',4.6],
['Regalo Cumpleañero Ejecutivo','Regalo elegante para profesional','Portafolio cuero, pluma fuente, café especial y tarjeta.',185000,null,'Ejecutivo',4.8,null,null,true],
['Combo Cumple Niños Divertido','Combo completo fiesta infantil','Globos, piñata, decoración, cupcakes, corona y regalito.',120000,null,'Niños',4.7,null,null,true],
['Tarjeta Regalo Experiencia','Tarjeta regalo para elegir experiencia','Elegir: spa, cena, aventura o taller. Válida 6 meses.',150000,null,'Experiencia',4.9,null,null,true],
['Bono Spa Cumpleaños','Bono para día de spa y relajación','Masaje, facial, hidratación y zonas húmedas.',195000,null,'Spa',5.0,true,null,true],
['Caja Whisky Premium Cumple','Whisky con copas y caja','Whisky premium en caja de madera con 2 copas de cristal.',250000,null,'Whisky',4.9],
['Torta Número Gigante','Torta forma de número decorada','Torta en forma del número. Buttercream y flores comestibles.',135000,null,'Número',4.8],
['Cumpleaños Sorpresa Oficina','Sorpresa para celebrar en la oficina','Mini torta, globo, tarjeta grupal y decoración de escritorio.',68000,85000,'Oficina',4.5,null,true],
['Regalo Cumple 15 Elegante','Set especial para quinceañera','Corona brillante, pulsera cristales, ramo mini y tarjeta.',115000,null,'Quince',4.8,null,null,true],
['Cena Cumpleaños Dos','Cena romántica de cumpleaños para dos','Menú degustación, copa bienvenida y mini torta.',220000,null,'Cena',4.9,null,null,true],
['Cumple Sorpresa Mascota','Combo cumpleaños para mascotas','Croquetas gourmet, juguete, galletas caninas y bandana.',45000,58000,'Mascota',4.4,null,true],
['Video Mensajes Cumpleaños','Video con mensajes de seres queridos','Video editado con mensajes de familia. Música y fotos.',88000,null,'Emotivo',4.9,null,null,true]]},

aniversarios:{c:[{n:'Rojo',h:'#ef4444'},{n:'Rosa',h:'#f9a8d4'},{n:'Dorado',h:'#d4a574'},{n:'Blanco',h:'#fef2f2'}],s:[{n:'Básico',d:0},{n:'Premium',d:35000},{n:'Deluxe',d:70000}],f:['Hecho con amor','Empaque romántico','Dedicatoria romántica','Entrega sorpresa'],b:[{n:'Agregar ramo de rosas',d:45000,desc:'Ramo de 12 rosas rojas'},{n:'Incluir cena para dos',d:85000,desc:'Cena en restaurante aliado'},{n:'Agregar botella champagne',d:55000,desc:'Champagne para brindar'}],p:[
['Aniversario Silver Luxe','Set premium con detalles plateados','Caja de plata con collar, rosas blancas, champagne y carta de amor.',195000,null,'Luxe',5.0,true,null,true],
['Caja Amor Eterno','Caja romántica con regalos para la pareja','Caja madera grabada "Amor Eterno": velas, chocolates, foto marco y carta.',125000,null,'Eterno',4.9,true,null,true],
['Cena Romántica Para Dos','Cena con velas en restaurante aliado','Menú degustación, copa bienvenida, velas y pétalos. Reserva incluida.',220000,null,'Cena',5.0,true,null,true],
['Combo Aniversario Rosa','Ramo de rosas, peluche y chocolates','12 rosas rojas, oso mediano y chocolates artesanales.',135000,null,'Clásico',4.8,null,null,true],
['Set Vino y Quesos','Botella de vino con tablero de quesos','Vino reserva con tablado de quesos, frutos secos y mermelada.',155000,null,'Vino',4.8,null,null,true],
['Experiencia En Pareja','Día de spa o aventura para dos','Bono: spa, clase cocina, paseo barco o sesión fotográfica.',180000,null,'Experiencia',4.9,null,null,true],
['Carta Mapa Estrellas','Mapa estrellas del día que se conocieron','Mapa astral con constelación exacta de fecha y lugar especial.',85000,null,'Estrellas',4.7,null,null,true],
['Serenata Vallenata','Serenata de 3 canciones con músicos','Serenata con músicos profesionales. 3 canciones elegidas.',175000,null,'Serenata',4.9],
['Álbum Recuerdos Premium','Álbum de cuero con fotos de la pareja','Álbum de cuero artesanal 30 páginas. Kit de pegado incluido.',95000,null,'Memorias',4.6],
['Anillo Compromiso Set','Anillo de compromiso con presentación','Anillo en caja terciopelo con presentación: pétalos, velas y música.',350000,null,'Compromiso',5.0,true,null,true],
['Finde Escapada Romántica','Escapada de fin de semana para dos','Alojamiento rural, cena, desayuno y actividad especial.',380000,null,'Escapada',5.0,null,null,true],
['Pulsera Nombres Enamorados','Pulseras con nombres de la pareja','Dos pulseras plata 925 con nombres grabados. Estuche incluido.',115000,null,'Pulsera',4.7],
['Caja Sentimientos Cartas','Caja con 365 cartas de amor','365 cartas "Un motivo por el que te amo" para cada día.',75000,null,'365 Días',4.8,null,null,true],
['Renovación Votos Set','Set para renovación de votos','Velas unitivas, lazos, certificado decorativo y pétalos.',98000,null,'Votos',4.7],
['Collar Corazones Dos','Collar con dos corazones entrelazados','Plata con dos corazones grabables. Estuche premium.',135000,null,'Collar',4.8,null,null,true],
['Noche Estrellada Terraza','Cena privada en terraza con velas','Cena privada con velas, pétalos, música y menú especial.',260000,null,'Terraza',5.0,null,null,true],
['Set Aromaterapia Pareja','Kit aromaterapia para parejas','Velas, aceites, sales de baño y difusor.',68000,85000,'Relax',4.5,null,true],
['Foto Libro Nuestra Historia','Libro de fotos con la historia de pareja','40 páginas de fotos y textos. Diseño gráfico incluido.',110000,null,'Historia',4.8,null,null,true],
['Baile Sorpresa Aniversario','Clase de baile privada para dos','Clase de salsa, bachata o tango con instructor. Vino incluido.',95000,null,'Baile',4.7,null,null,true],
['Caja Te Recuerdo','Caja con recuerdos personalizados','Caja con recuerdos: entradas, tickets, foto favorita y carta.',85000,null,'Recuerdo',4.6]]},

personalizados:{c:[{n:'Natural',h:'#d4a574'},{n:'Rosa',h:'#f9a8d4'},{n:'Negro',h:'#374151'},{n:'Blanco',h:'#fef2f2'}],s:[{n:'Único',d:0}],f:['100% personalizado','Diseño exclusivo','Producción artesanal','Entrega especial'],b:[{n:'Agregar marco de fotos',d:15000,desc:'Marco de madera premium'},{n:'Incluir dedicatoria láser',d:8000,desc:'Grabado láser personalizado'},{n:'Agregar estuche regalo',d:12000,desc:'Estuche de presentación'}],p:[
['Taza Personalizada Foto','Taza con foto y mensaje personalizado','Taza cerámica premium con impresión de alta calidad. Microondas y lavavajillas.',42000,null,'Personal',4.7,true,null,true],
['Almohada Foto Corazón','Almohada corazón con foto','Almohada de terciopelo con foto en alta resolución. Relleno premium.',55000,null,'Corazón',4.8,null,null,true],
['Lámpara Nombre Brillante','Lámpara LED con nombre grabado','Lámpara LED de madera con nombre grabado láser. Luz regulable.',68000,null,'Brillante',4.8,null,null,true],
['Carta Mapa Estrellas','Mapa estelar personalizado','Mapa astral de fecha y lugar especial. Impresión fine art en marco.',85000,null,'Estelar',4.9,true,null,true],
['Cojín Frase Personalizada','Cojín con frase personalizada','Terciopelo con frase bordada en hilo dorado. Relleno suave.',38000,null,'Frase',4.6],
['Cuadro Foto Lienzo','Lienzo con foto en alta resolución','Lienzo 40x60cm con foto en resolución gallery. Bastidor de madera.',72000,null,'Lienzo',4.7,null,null,true],
['Caja Música Personalizada','Caja de música con melodía elegida','Caja de madera con mecanismo musical. Grabado láser personalizado.',65000,null,'Música',4.8,null,null,true],
['Reloj Foto Pareja','Reloj de pared con foto de la pareja','Reloj con mecanismo silencioso y foto. Madera natural.',58000,72000,'Reloj',4.5,null,true],
['Bolso Nombre Bordado','Bolso de tela con nombre bordado','Bolso premium con nombre bordado a mano. Diseño minimalista.',45000,null,'Bolso',4.6],
['Agenda Personalizada Cuero','Agenda de cuero con iniciales grabadas','Cuero genuino con iniciales láser. Papel premium y separadores.',62000,null,'Agenda',4.7,null,null,true],
['Rompecabezas Foto','Rompecabezas con foto personalizada','500 piezas con tu foto. Impresión de alta calidad.',35000,null,'Puzzle',4.5],
['Llavero Foto Doble','Llavero con fotos de la pareja','Dos llaveros de acero inoxidable con fotos resistentes al agua.',28000,null,'Llavero',4.4,null,null,true],
['Botella Vino Etiqueta Personal','Vino con etiqueta personalizada','Vino reserva con etiqueta diseñada. Caja de madera incluida.',98000,null,'Vino',4.8,true,null,true],
['Camiseta Diseño Exclusivo','Camiseta con diseño personalizado','Algodón pima con impresión DTG. Diseño exclusivo.',42000,52000,'Camiseta',4.5,null,true],
['Caja Te Recuerdo','Caja con recuerdos personalizados','Caja artesanal con compartimentos para fotos, tickets, cartas.',75000,null,'Recuerdo',4.7,null,null,true],
['Póster Collage Fotos','Póster con collage de fotos','Póster A3 con hasta 20 fotos. Impresión fine art papel mate.',48000,null,'Collage',4.6],
['Billetera Cuero Grabada','Billetera de cuero con grabado','Cuero genuino con nombre grabado láser. Múltiples compartimentos.',85000,null,'Billetera',4.8,null,null,true],
['Body Bebé Personalizado','Body de bebé con diseño personalizado','Algodón orgánico con impresión segura. Diseño con nombre.',25000,null,'Bebé',4.5],
['Manta Foto Grande','Manta polar con foto impresa','Manta 150x200cm con foto en alta resolución.',78000,null,'Manta',4.7,null,null,true],
['Set Copa Grabada Pareja','Dos copas con grabado personalizado','Cristal con grabado láser de nombres y fecha. Estuche incluido.',65000,null,'Copas',4.6]]},

sorpresas:{c:[{n:'Rojo',h:'#ef4444'},{n:'Rosa',h:'#f9a8d4'},{n:'Dorado',h:'#d4a574'},{n:'Negro',h:'#374151'}],s:[{n:'Pequeño',d:0},{n:'Mediano',d:25000},{n:'Grande',d:50000}],f:['100% sorpresa','Momento inolvidable','Coordinación completa','Foto del momento incluida'],b:[{n:'Agregar video del momento',d:15000,desc:'Video profesional de la sorpresa'},{n:'Incluir ramo de flores',d:35000,desc:'Ramo para la ocasión'},{n:'Agregar champagne',d:45000,desc:'Para brindar después'}],p:[
['Mega Sorpresa Ultimate','Sorpresa completa con todo incluido','Serenata, globos, flores, torta, champagne y coordinación completa.',250000,null,'Ultimate',5.0,true,null,true],
['Sorpresa Parranda','Parranda con músicos y refrigerio','Parranda vallenata con 4 músicos y refrigerio para 10 personas.',175000,null,'Parranda',4.9,true,null,true],
['Sorpresa Box Misteriosa','Caja misteriosa con regalos sorpresa','Caja de 3 niveles con regalos sorpresa en cada compartimento.',95000,null,'Misterio',4.8,null,null,true],
['Sorpresa Medianoche','Llegada sorpresa a media noche','Flores, velas, música y regalo a media noche.',145000,null,'Medianoche',5.0,true,null,true],
['Sorpresa Flash Mob','Flash mob con bailarines profesionales','10 bailarines con coreografía sorpresa. Música y coordinación.',280000,null,'Flash Mob',5.0,true,null,true],
['Sorpresa Globos Cielo','Suelta de 100 globos con mensajes','100 globos de papel con mensajes al atardecer.',85000,null,'Cielo',4.7,null,null,true],
['Sorpresa Mensaje Arena','Mensaje escrito en arena','Mensaje gigante en arena de finca cerca a Bogotá. Foto profesional.',65000,null,'Arena',4.6],
['Sorpresa Viaje Sorpresa','Viaje sorpresa a destino cercano','Fin de semana sorpresa. Destino revelado el día del viaje.',320000,null,'Viaje',5.0,null,null,true],
['Sorpresa Decoración Hogar','Decoración sorpresa del hogar','Globos, pétalos, velas, banner y regalo. Llegan a un escenario mágico.',125000,null,'Hogar',4.9,null,null,true],
['Sorpresa Comida Favorita','Comida favorita preparada y servida','Chef profesional prepara su comida favorita en casa.',155000,null,'Chef',4.8,null,null,true],
['Sorpresa Foto Gigante','Foto gigante desplegada en lugar especial','Foto de 3x2 metros. Sesión foto profesional del momento.',98000,null,'Foto',4.7],
['Sorpresa Grabación Familiar','Video con mensajes de toda la familia','Video editado con mensajes de familia. Música y fotos.',88000,null,'Familiar',4.9,null,null,true],
['Sorpresa Clase Privada','Clase privada sorpresa de algo especial','Clase: cocina, pintura, baile, mixología o cerámica.',95000,null,'Clase',4.7,null,null,true],
['Sorpresa Scavenger Hunt','Búsqueda del tesoro por la ciudad','Pistas personalizadas por Bogotá. Premio final sorpresa.',115000,null,'Aventura',4.8,null,null,true],
['Sorpresa Picnic Romántico','Picnic romántico en parque','Manta, cesta gourmet, velas, música y decoración.',88000,null,'Picnic',4.8,null,null,true],
['Sorpresa Room Service','Room service sorpresa en hotel','Room service sorpresa: desayuno, cena o tarde de spa.',165000,null,'Hotel',4.9,null,null,true],
['Sorpresa Concierto Privado','Concierto privado con cantante','Cantante profesional en concierto privado. Repertorio elegido.',220000,null,'Concierto',5.0,true,null,true],
['Sorpresa Cine Privado','Sesión de cine privada con snacks','Pantalla grande, proyección, snacks gourmet y decoración temática.',95000,null,'Cine',4.7,null,null,true],
['Sorpresa Maquillaje Glam','Sesión de maquillaje y styling profesional','Maquillaje profesional, styling y sesión de fotos. Para sentirse divina.',85000,null,'Glam',4.6],
['Sorpresa Amanecer Montaña','Amanecer en la montaña con desayuno','Trekking guiado al amanecer con desayuno en la cima. Experiencia épica.',125000,null,'Amanecer',4.9,null,null,true]]}
};

async function seed() {
  console.log('Seeding database...');
  await db.product.deleteMany();

  const catKeys = Object.keys(C);
  let count = 0;

  for (const catKey of catKeys) {
    const cfg = C[catKey];
    for (let i = 0; i < cfg.p.length; i++) {
      const p = cfg.p[i];
      const name = p[0]; const desc = p[1]; const detail = p[2]; const price = p[3];
      const origPrice = p[4] ?? null;
      const badge = (p[5] != null && typeof p[5] === 'string') ? p[5] : null;
      const rating = (p[6] != null && typeof p[6] === 'number') ? p[6] : 4.5;
      const best = p[7] === true;
      const offer = p[8] === true;
      const recom = p[9] === true;
      const imgPath = `/products/${catKey}_${slug(name)}.png`;
      const colors = cfg.c.map(c => ({name:c.n, hex:c.h}));
      const sizes = cfg.s.map(s => ({name:s.n, priceDiff:s.d}));
      const features = cfg.f.map(f => ({icon:'star', text:f}));
      const combos = cfg.b;

      // Pick 2-3 colors per product based on index
      const productColors = colors.length > 3 
        ? [colors[i % colors.length], colors[(i+1) % colors.length], colors[(i+2) % colors.length]] 
        : colors;

      await db.product.create({
        data: {
          name,
          description: desc,
          detailDescription: detail,
          price,
          category: catKey,
          badge,
          rating,
          image: imgPath,
          images: JSON.stringify([imgPath]),
          colors: JSON.stringify(productColors),
          sizes: JSON.stringify(sizes),
          features: JSON.stringify(features),
          combinations: JSON.stringify(combos),
          isBestSeller: best,
          isOffer: offer,
          isRecommended: recom,
          isDigitalExperience: catKey === 'cumpleanos' && name === 'Video Mensajes Cumpleaños',
          originalPrice: origPrice || null,
        },
      });
      count++;
    }
  }

  console.log(`Seeded ${count} products!`);
}

seed().catch(console.error);

function slug(name: string): string {
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
