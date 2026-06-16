import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = './public/products';

interface MissingImage {
  filename: string;
  category: string;
  productName: string;
  description: string;
  prompt: string;
}

const missingImages: MissingImage[] = [
  // PELUCHES (2)
  { filename: 'peluches_perro-salchicha-divertido.png', category: 'peluches', productName: 'Perro Salchicha Divertido', description: 'Perrito salchicha con cuerpo alargado', prompt: 'Cute dachshund stuffed animal toy, long body, short legs, adorable expression, soft plush fabric, professional product photography on white background, gift shop style' },
  { filename: 'peluches_mapache-travieso.png', category: 'peluches', productName: 'Mapache Travieso', description: 'Mapache con antifaz y cola rayada', prompt: 'Cute raccoon stuffed animal toy, striped fluffy tail, mischievous expression, soft plush fabric, professional product photography on white background, gift shop style' },

  // FLORES (20)
  { filename: 'flores_ramo-rosas-rojas-premium.png', category: 'flores', productName: 'Ramo Rosas Rojas Premium', description: '12 rosas ecuatorianas con follaje', prompt: 'Beautiful bouquet of 12 red Ecuadorian roses with green foliage, wrapped in kraft paper, romantic gift, professional product photography, elegant flower shop style' },
  { filename: 'flores_caja-rosas-y-chocolates.png', category: 'flores', productName: 'Caja Rosas y Chocolates', description: 'Caja de madera con rosas y chocolates', prompt: 'Wooden gift box with red roses and artisan chocolates, luxury flower arrangement, professional product photography, romantic gift style' },
  { filename: 'flores_ramo-girasoles-alegria.png', category: 'flores', productName: 'Ramo Girasoles Alegría', description: 'Girasoles frescos con margaritas', prompt: 'Bright sunflower bouquet with daisies, cheerful yellow flowers, wrapped in rustic paper, professional product photography, joyful flower gift' },
  { filename: 'flores_arreglo-tropical-exotico.png', category: 'flores', productName: 'Arreglo Tropical Exótico', description: 'Aves del paraíso y heliconias', prompt: 'Tropical flower arrangement with bird of paradise and heliconias, exotic Colombian flowers, professional product photography, vibrant tropical gift' },
  { filename: 'flores_ramo-tulipanes-holanda.png', category: 'flores', productName: 'Ramo Tulipanes Holanda', description: 'Tulipanes importados colores mixtos', prompt: 'Colorful mixed tulip bouquet, imported Dutch tulips, wrapped in elegant paper, professional product photography, premium flower gift' },
  { filename: 'flores_cesta-flores-y-frutas.png', category: 'flores', productName: 'Cesta Flores y Frutas', description: 'Cesta con flores y frutas tropicales', prompt: 'Wicker basket with fresh flowers and tropical fruits mango papaya strawberries, gift basket, professional product photography, Colombian gift style' },
  { filename: 'flores_ramo-peonias-delicadas.png', category: 'flores', productName: 'Ramo Peonías Delicadas', description: 'Peonías rosas y blancas', prompt: 'Delicate pink and white peony bouquet, luxurious fluffy flowers, wrapped in soft paper, professional product photography, luxury flower gift' },
  { filename: 'flores_corona-floral-elegante.png', category: 'flores', productName: 'Corona Floral Elegante', description: 'Corona de flores para evento', prompt: 'Elegant floral wreath crown with seasonal flowers, event decoration, professional product photography, ceremony flower arrangement' },
  { filename: 'flores_ramo-lavanda-relax.png', category: 'flores', productName: 'Ramo Lavanda Relax', description: 'Lavanda fresca aroma relajante', prompt: 'Fresh lavender bouquet bundle, purple flowers, relaxing aromatherapy, wrapped in twine, professional product photography, wellness flower gift' },
  { filename: 'flores_caja-sombrero-florecida.png', category: 'flores', productName: 'Caja Sombrero Florecida', description: 'Caja sombrero con arreglo floral', prompt: 'Hat box with roses and carnations flower arrangement, elegant round box, professional product photography, luxury flower gift style' },
  { filename: 'flores_ramo-margaritas-campo.png', category: 'flores', productName: 'Ramo Margaritas Campo', description: 'Margaritas blancas centro amarillo', prompt: 'Country style daisy bouquet, white daisies with yellow centers, wrapped in rustic paper, professional product photography, simple flower gift' },
  { filename: 'flores_arreglo-orquideas-colombianas.png', category: 'flores', productName: 'Arreglo Orquídeas Colombianas', description: 'Orquídeas auténticas colombianas', prompt: 'Colombian orchid arrangement, exotic elegant purple and white orchids, professional product photography, national flower of Colombia, luxury gift' },
  { filename: 'flores_ramo-rosas-arcoiris.png', category: 'flores', productName: 'Ramo Rosas Arcoíris', description: 'Rosas en todos los colores', prompt: 'Rainbow roses bouquet, roses in every color red orange yellow green blue purple, professional product photography, colorful flower gift' },
  { filename: 'flores_centro-mesa-floral.png', category: 'flores', productName: 'Centro Mesa Floral', description: 'Centro de mesa con velas y flores', prompt: 'Floral table centerpiece with candles and fresh flowers, romantic dinner decoration, professional product photography, elegant home decor gift' },
  { filename: 'flores_ramo-lirios-blancos-paz.png', category: 'flores', productName: 'Ramo Lirios Blancos Paz', description: 'Lirios blancos perfume intenso', prompt: 'White lily bouquet, fragrant elegant white lilies, wrapped in white paper, professional product photography, peaceful flower gift' },
  { filename: 'flores_bouquet-novia-sonado.png', category: 'flores', productName: 'Bouquet Novia Soñado', description: 'Ramo de novia rosas y paso a paso', prompt: 'Bridal bouquet with white roses and stephanotis, pearls, wedding flowers, professional product photography, dream wedding bouquet' },
  { filename: 'flores_ramo-claveles-rojos.png', category: 'flores', productName: 'Ramo Claveles Rojos', description: 'Claveles rojos grandes y frescos', prompt: 'Red carnation bouquet, large fresh red carnations, wrapped in red paper, professional product photography, lasting flower gift' },
  { filename: 'flores_caja-cristal-rosas-eternas.png', category: 'flores', productName: 'Caja Cristal Rosas Eternas', description: 'Caja cristal con rosas preservadas', prompt: 'Crystal glass box with preserved eternal roses, luxury rose dome, professional product photography, premium forever flower gift' },
  { filename: 'flores_ramo-astromelias-mix.png', category: 'flores', productName: 'Ramo Astromelias Mix', description: 'Astromelias colores vibrantes', prompt: 'Colorful alstroemeria bouquet, vibrant mixed colors, wrapped in cheerful paper, professional product photography, affordable flower gift' },
  { filename: 'flores_arreglo-bonsai-floral.png', category: 'flores', productName: 'Arreglo Bonsái Floral', description: 'Mini bonsái decorado con flores', prompt: 'Mini bonsai tree decorated with small fresh flowers, Japanese style plant gift, professional product photography, zen flower arrangement' },

  // DESAYUNOS (1)
  { filename: 'desayunos_desayuno-waffles-belgas.png', category: 'desayunos', productName: 'Desayuno Waffles Belgas', description: 'Waffles con nutella y fresas', prompt: 'Belgian waffles with Nutella chocolate and fresh strawberries, gourmet breakfast tray with coffee and juice, professional food photography, gift breakfast delivery style' },

  // GLOBOS (18)
  { filename: 'globos_globo-caja-explosion.png', category: 'globos', productName: 'Globo Caja Explosión', description: 'Caja con globos que saltan al abrir', prompt: 'Surprise explosion box with helium balloons popping out and confetti, gift box reveal, professional product photography, party surprise gift style' },
  { filename: 'globos_numero-gigante-metalico.png', category: 'globos', productName: 'Número Gigante Metálico', description: 'Globo número de foil metálico', prompt: 'Giant metallic foil number balloon, shiny gold helium balloon, professional product photography, birthday celebration decoration' },
  { filename: 'globos_columna-globos-elegante.png', category: 'globos', productName: 'Columna Globos Elegante', description: 'Columna decorativa 1.8m evento', prompt: 'Elegant balloon column decoration 1.8 meters tall for events, white and gold balloons, professional product photography, event decoration style' },
  { filename: 'globos_globos-letras-nombre.png', category: 'globos', productName: 'Globos Letras Nombre', description: 'Globos foil formando nombre', prompt: 'Foil letter balloons spelling a name, helium floating letters, professional product photography, personalized party decoration' },
  { filename: 'globos_bouquet-globos-baby-shower.png', category: 'globos', productName: 'Bouquet Globos Baby Shower', description: 'Globos tonos pastel baby shower', prompt: 'Baby shower balloon bouquet, pastel pink and blue balloons, baby bottle and pacifier designs, professional product photography, baby celebration style' },
  { filename: 'globos_globo-sorpresa-interior.png', category: 'globos', productName: 'Globo Sorpresa Interior', description: 'Globo gigante con regalo y confeti', prompt: 'Giant transparent balloon with gift and confetti inside, surprise balloon pop, professional product photography, mystery gift style' },
  { filename: 'globos_globos-unicornio-magico.png', category: 'globos', productName: 'Globos Unicornio Mágico', description: 'Set globos tema unicornio', prompt: 'Magical unicorn themed balloon set, unicorn foil balloon with pink and purple latex balloons, professional product photography, fantasy party decoration' },
  { filename: 'globos_globos-navidad-festivos.png', category: 'globos', productName: 'Globos Navidad Festivos', description: 'Globos temáticos navideños', prompt: 'Christmas themed balloons, reindeer and Santa designs, red green and gold, professional product photography, holiday celebration decoration' },
  { filename: 'globos_globos-graduacion-exito.png', category: 'globos', productName: 'Globos Graduación Éxito', description: 'Globos con birrete de graduación', prompt: 'Graduation balloon set with graduation cap foil balloon, class year numbers, professional product photography, academic celebration decoration' },
  { filename: 'globos_bouquet-globos-arcoiris.png', category: 'globos', productName: 'Bouquet Globos Arcoíris', description: 'Ramo de globos en todos los colores', prompt: 'Rainbow balloon bouquet, helium balloons in every color, professional product photography, colorful celebration decoration' },
  { filename: 'globos_globos-pedida-matrimonio.png', category: 'globos', productName: 'Globos Pedida Matrimonio', description: 'Set romántico letras', prompt: 'Marriage proposal balloon set, will you marry me foil letters, red and gold balloons, professional product photography, romantic proposal decoration' },
  { filename: 'globos_globos-disney-princesas.png', category: 'globos', productName: 'Globos Disney Princesas', description: 'Globos con personajes Disney', prompt: 'Disney princess themed balloon set, princess character foil balloons, pink and purple, professional product photography, children party decoration' },
  { filename: 'globos_globos-spiderman-heroe.png', category: 'globos', productName: 'Globos Spiderman Héroe', description: 'Globos temáticos Spiderman', prompt: 'Spiderman themed balloon set, superhero foil balloon, red and blue balloons, professional product photography, kids hero party decoration' },
  { filename: 'globos_globos-bodas-elegantes.png', category: 'globos', productName: 'Globos Bodas Elegantes', description: 'Set globos elegantes para boda', prompt: 'Elegant wedding balloon set, white and gold balloons with organza ribbons, Mr and Mrs design, professional product photography, wedding decoration' },
  { filename: 'globos_globos-minions-fiesta.png', category: 'globos', productName: 'Globos Minions Fiesta', description: 'Globos con tema Minions', prompt: 'Minions themed balloon set, minion character foil balloons, yellow and blue, professional product photography, fun kids party decoration' },
  { filename: 'globos_globos-rosas-eternas.png', category: 'globos', productName: 'Globos Rosas Eternas', description: 'Globos foil forma de rosa', prompt: 'Rose shaped foil balloons, giant rose in red pink and gold, professional product photography, romantic balloon decoration' },
  { filename: 'globos_globos-empresariales-corp.png', category: 'globos', productName: 'Globos Empresariales Corp', description: 'Globos con logo corporativo', prompt: 'Corporate branded balloon arrangement, balloons with company colors and logo, professional product photography, business event decoration' },
  { filename: 'globos_globos-cumple-quinceanera.png', category: 'globos', productName: 'Globos Cumple Quinceañera', description: 'Set especial para quinceañera', prompt: 'Quinceañera 15th birthday balloon set, pink and gold balloons, giant number 15, crown foil, professional product photography, Latina celebration decoration' },

  // CUMPLEAÑOS (6)
  { filename: 'cumpleanos_torta-numero-gigante.png', category: 'cumpleanos', productName: 'Torta Número Gigante', description: 'Torta forma de número decorada', prompt: 'Number shaped birthday cake decorated with buttercream and edible flowers, giant number cake, professional food photography, birthday celebration style' },
  { filename: 'cumpleanos_cumpleanos-sorpresa-oficina.png', category: 'cumpleanos', productName: 'Cumpleaños Sorpresa Oficina', description: 'Sorpresa para celebrar en la oficina', prompt: 'Office birthday surprise kit, mini cake with balloon and card on desk, professional product photography, workplace celebration gift' },
  { filename: 'cumpleanos_regalo-cumple-15-elegante.png', category: 'cumpleanos', productName: 'Regalo Cumple 15 Elegante', description: 'Set especial para quinceañera', prompt: 'Elegant quinceañera gift set, sparkling crown crystal bracelet mini bouquet, professional product photography, 15th birthday celebration gift' },
  { filename: 'cumpleanos_cena-cumpleanos-dos.png', category: 'cumpleanos', productName: 'Cena Cumpleaños Dos', description: 'Cena romántica de cumpleaños para dos', prompt: 'Romantic birthday dinner for two, tasting menu with welcome drink and mini cake, candlelit table, professional photography, celebration dinner gift' },
  { filename: 'cumpleanos_cumple-sorpresa-mascota.png', category: 'cumpleanos', productName: 'Cumple Sorpresa Mascota', description: 'Combo cumpleaños para mascotas', prompt: 'Pet birthday combo gift box, gourmet treats toy dog cookies and bandana, professional product photography, pet celebration gift set' },
  { filename: 'cumpleanos_video-mensajes-cumpleanos.png', category: 'cumpleanos', productName: 'Video Mensajes Cumpleaños', description: 'Video con mensajes de seres queridos', prompt: 'Digital birthday video message gift, phone screen showing loving video messages from family, professional product photography, emotional digital gift' },

  // ANIVERSARIOS (18)
  { filename: 'aniversarios_aniversario-silver-luxe.png', category: 'aniversarios', productName: 'Aniversario Silver Luxe', description: 'Set premium con detalles plateados', prompt: 'Silver anniversary luxury gift set, silver box with necklace white roses champagne and love letter, professional product photography, premium celebration gift' },
  { filename: 'aniversarios_caja-amor-eterno.png', category: 'aniversarios', productName: 'Caja Amor Eterno', description: 'Caja romántica con regalos para la pareja', prompt: 'Eternal love wooden gift box, engraved box with candles chocolates photo frame and love letter, professional product photography, romantic anniversary gift' },
  { filename: 'aniversarios_cena-romantica-para-dos.png', category: 'aniversarios', productName: 'Cena Romántica Para Dos', description: 'Cena con velas en restaurante aliado', prompt: 'Romantic candlelit dinner for two, tasting menu with welcome drink, rose petals and candles on table, professional photography, anniversary dinner gift' },
  { filename: 'aniversarios_combo-aniversario-rosa.png', category: 'aniversarios', productName: 'Combo Aniversario Rosa', description: 'Ramo de rosas, peluche y chocolates', prompt: 'Classic anniversary combo, 12 red roses with teddy bear and artisan chocolates, professional product photography, romantic gift set' },
  { filename: 'aniversarios_set-vino-y-quesos.png', category: 'aniversarios', productName: 'Set Vino y Quesos', description: 'Botella de vino con tablero de quesos', prompt: 'Wine and cheese gift set, wine bottle with cheese board dried fruits and jam, professional product photography, gourmet anniversary gift' },
  { filename: 'aniversarios_experiencia-en-pareja.png', category: 'aniversarios', productName: 'Experiencia En Pareja', description: 'Día de spa o aventura para dos', prompt: 'Couple experience gift voucher, spa day cooking class or boat ride, elegant gift card in box, professional product photography, adventure gift for two' },
  { filename: 'aniversarios_carta-mapa-estrellas.png', category: 'aniversarios', productName: 'Carta Mapa Estrellas', description: 'Mapa estrellas del día que se conocieron', prompt: 'Star map poster of the night sky, custom constellation map of special date and location, framed astronomy print, professional product photography, romantic personalized gift' },
  { filename: 'aniversarios_serenata-vallenata.png', category: 'aniversarios', productName: 'Serenata Vallenata', description: 'Serenata de 3 canciones con músicos', prompt: 'Vallenato serenade with professional musicians, Colombian folk music performers with accordion, professional product photography, romantic serenade gift experience' },
  { filename: 'aniversarios_album-recuerdos-premium.png', category: 'aniversarios', productName: 'Álbum Recuerdos Premium', description: 'Álbum de cuero con fotos de la pareja', prompt: 'Premium leather photo album for couples, artisan leather cover 30 pages, professional product photography, romantic memory gift' },
  { filename: 'aniversarios_anillo-compromiso-set.png', category: 'aniversarios', productName: 'Anillo Compromiso Set', description: 'Anillo de compromiso con presentación', prompt: 'Engagement ring gift set, diamond ring in velvet box with rose petals candles and music, professional product photography, luxury proposal gift' },
  { filename: 'aniversarios_finde-escapada-romantica.png', category: 'aniversarios', productName: 'Finde Escapada Romántica', description: 'Escapada de fin de semana para dos', prompt: 'Romantic weekend getaway package, luxury hotel stay with dinner breakfast and special activity, professional product photography, couples escape gift' },
  { filename: 'aniversarios_pulsera-nombres-enamorados.png', category: 'aniversarios', productName: 'Pulsera Nombres Enamorados', description: 'Pulseras con nombres de la pareja', prompt: 'Two sterling silver bracelets with engraved couple names, gift box included, professional product photography, personalized love jewelry gift' },
  { filename: 'aniversarios_caja-sentimientos-cartas.png', category: 'aniversarios', productName: 'Caja Sentimientos Cartas', description: 'Caja con 365 cartas de amor', prompt: '365 love letters box, jar with 365 folded messages one for each day, professional product photography, romantic daily love notes gift' },
  { filename: 'aniversarios_renovacion-votos-set.png', category: 'aniversarios', productName: 'Renovación Votos Set', description: 'Set para renovación de votos', prompt: 'Vow renewal ceremony set, unity candles decorative ribbons certificate and rose petals, professional product photography, wedding anniversary ceremony kit' },
  { filename: 'aniversarios_collar-corazones-dos.png', category: 'aniversarios', productName: 'Collar Corazones Dos', description: 'Collar con dos corazones entrelazados', prompt: 'Silver necklace with two intertwined hearts pendant, engravable hearts, premium gift box, professional product photography, love jewelry gift' },
  { filename: 'aniversarios_noche-estrellada-terraza.png', category: 'aniversarios', productName: 'Noche Estrellada Terraza', description: 'Cena privada en terraza con velas', prompt: 'Private candlelit terrace dinner, romantic evening with candles petals music and special menu, professional product photography, exclusive anniversary dinner' },
  { filename: 'aniversarios_set-aromaterapia-pareja.png', category: 'aniversarios', productName: 'Set Aromaterapia Pareja', description: 'Kit aromaterapia para parejas', prompt: 'Couples aromatherapy gift set, candles essential oils bath salts and diffuser, spa at home kit, professional product photography, wellness romantic gift' },
  { filename: 'aniversarios_foto-libro-nuestra-historia.png', category: 'aniversarios', productName: 'Foto Libro Nuestra Historia', description: 'Libro de fotos con la historia de pareja', prompt: 'Photo book of our story, 40 pages of couple photos and texts, graphic design included, professional product photography, personalized love story book' },

  // PERSONALIZADOS (2)
  { filename: 'personalizados_manta-foto-grande.png', category: 'personalizados', productName: 'Manta Foto Grande', description: 'Manta polar con foto impresa', prompt: 'Large custom photo blanket 150x200cm, polar fleece with printed photo, professional product photography, personalized cozy gift' },
  { filename: 'personalizados_set-copa-grabada-pareja.png', category: 'personalizados', productName: 'Set Copa Grabada Pareja', description: 'Dos copas con grabado personalizado', prompt: 'Two engraved crystal wine glasses with names and date, laser etched, gift box included, professional product photography, personalized couple gift' },

  // SORPRESAS (20)
  { filename: 'sorpresas_mega-sorpresa-ultimate.png', category: 'sorpresas', productName: 'Mega Sorpresa Ultimate', description: 'Sorpresa completa con todo incluido', prompt: 'Ultimate surprise gift package, complete with serenade balloons flowers cake champagne, luxury gift box, professional product photography, mega celebration surprise' },
  { filename: 'sorpresas_sorpresa-parranda.png', category: 'sorpresas', productName: 'Sorpresa Parranda', description: 'Parranda con músicos y refrigerio', prompt: 'Vallenato parranda surprise with musicians, Colombian folk music celebration with refreshments, professional product photography, festive surprise party' },
  { filename: 'sorpresas_sorpresa-box-misteriosa.png', category: 'sorpresas', productName: 'Sorpresa Box Misteriosa', description: 'Caja misteriosa con regalos sorpresa', prompt: 'Mystery surprise gift box with 3 levels of hidden gifts in each compartment, confetti reveal, professional product photography, mystery unboxing gift' },
  { filename: 'sorpresas_sorpresa-medianoche.png', category: 'sorpresas', productName: 'Sorpresa Medianoche', description: 'Llegada sorpresa a media noche', prompt: 'Midnight surprise arrival, flowers candles music and gift at midnight, romantic night scene, professional product photography, late night surprise gift' },
  { filename: 'sorpresas_sorpresa-flash-mob.png', category: 'sorpresas', productName: 'Sorpresa Flash Mob', description: 'Flash mob con bailarines profesionales', prompt: 'Flash mob surprise with professional dancers, choreographed street performance, professional product photography, spectacular surprise event' },
  { filename: 'sorpresas_sorpresa-globos-cielo.png', category: 'sorpresas', productName: 'Sorpresa Globos Cielo', description: 'Suelta de 100 globos con mensajes', prompt: 'Sky lantern release with 100 paper lanterns with messages at sunset, professional product photography, magical surprise moment' },
  { filename: 'sorpresas_sorpresa-mensaje-arena.png', category: 'sorpresas', productName: 'Sorpresa Mensaje Arena', description: 'Mensaje escrito en arena', prompt: 'Love message written in sand on beach, giant sand writing with professional photo, professional product photography, romantic beach surprise' },
  { filename: 'sorpresas_sorpresa-viaje-sorpresa.png', category: 'sorpresas', productName: 'Sorpresa Viaje Sorpresa', description: 'Viaje sorpresa a destino cercano', prompt: 'Surprise trip gift, mystery destination reveal envelope with tickets, professional product photography, adventure travel surprise gift' },
  { filename: 'sorpresas_sorpresa-decoracion-hogar.png', category: 'sorpresas', productName: 'Sorpresa Decoración Hogar', description: 'Decoración sorpresa del hogar', prompt: 'Home surprise decoration, balloons petals candles banner and gift, magical room transformation, professional product photography, home celebration setup' },
  { filename: 'sorpresas_sorpresa-comida-favorita.png', category: 'sorpresas', productName: 'Sorpresa Comida Favorita', description: 'Comida favorita preparada y servida', prompt: 'Private chef cooking favorite meal at home, professional chef preparing special dinner in kitchen, professional product photography, culinary surprise gift' },
  { filename: 'sorpresas_sorpresa-foto-gigante.png', category: 'sorpresas', productName: 'Sorpresa Foto Gigante', description: 'Foto gigante desplegada en lugar especial', prompt: 'Giant 3x2 meter photo banner surprise reveal in special location, professional product photography, memorable surprise moment display' },
  { filename: 'sorpresas_sorpresa-grabacion-familiar.png', category: 'sorpresas', productName: 'Sorpresa Grabación Familiar', description: 'Video con mensajes de toda la familia', prompt: 'Family video message gift, phone tablet showing compiled video messages from loved ones, professional product photography, emotional family surprise' },
  { filename: 'sorpresas_sorpresa-clase-privada.png', category: 'sorpresas', productName: 'Sorpresa Clase Privada', description: 'Clase privada sorpresa de algo especial', prompt: 'Private class gift experience, cooking painting dance or mixology lesson voucher, professional product photography, learning surprise gift' },
  { filename: 'sorpresas_sorpresa-scavenger-hunt.png', category: 'sorpresas', productName: 'Sorpresa Scavenger Hunt', description: 'Búsqueda del tesoro por la ciudad', prompt: 'City scavenger hunt surprise gift, personalized clues and treasure map around the city, professional product photography, adventure treasure hunt gift' },
  { filename: 'sorpresas_sorpresa-picnic-romantico.png', category: 'sorpresas', productName: 'Sorpresa Picnic Romántico', description: 'Picnic romántico en parque', prompt: 'Romantic picnic surprise in park, blanket gourmet basket candles music and decoration, professional product photography, outdoor love surprise' },
  { filename: 'sorpresas_sorpresa-room-service.png', category: 'sorpresas', productName: 'Sorpresa Room Service', description: 'Room service sorpresa en hotel', prompt: 'Hotel room service surprise, luxury hotel breakfast or dinner in room with decoration, professional product photography, hotel stay surprise gift' },
  { filename: 'sorpresas_sorpresa-concierto-privado.png', category: 'sorpresas', productName: 'Sorpresa Concierto Privado', description: 'Concierto privado con cantante', prompt: 'Private concert surprise with professional singer, intimate musical performance, professional product photography, exclusive music surprise gift' },
  { filename: 'sorpresas_sorpresa-cine-privado.png', category: 'sorpresas', productName: 'Sorpresa Cine Privado', description: 'Sesión de cine privada con snacks', prompt: 'Private cinema screening surprise, big screen projection with gourmet snacks and themed decoration, professional product photography, movie night surprise gift' },
  { filename: 'sorpresas_sorpresa-maquillaje-glam.png', category: 'sorpresas', productName: 'Sorpresa Maquillaje Glam', description: 'Sesión de maquillaje y styling profesional', prompt: 'Professional makeup and styling session gift, glam beauty experience with photo shoot, professional product photography, beauty pampering surprise' },
  { filename: 'sorpresas_sorpresa-amanecer-montana.png', category: 'sorpresas', productName: 'Sorpresa Amanecer Montaña', description: 'Amanecer en la montaña con desayuno', prompt: 'Mountain sunrise experience with guided trek and breakfast at the summit, dawn adventure, professional product photography, epic nature surprise gift' },
];

async function generateImages() {
  console.log(`\n🎨 Generating ${missingImages.length} missing product images...\n`);
  
  const zai = await ZAI.create();
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let successCount = 0;
  let failCount = 0;
  const BATCH_SIZE = 5;
  
  for (let i = 0; i < missingImages.length; i += BATCH_SIZE) {
    const batch = missingImages.slice(i, i + BATCH_SIZE);
    console.log(`\n📦 Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(missingImages.length / BATCH_SIZE)}: Generating ${batch.length} images...`);
    
    const promises = batch.map(async (img, batchIndex) => {
      const outputPath = path.join(OUTPUT_DIR, img.filename);
      
      // Skip if already exists
      if (fs.existsSync(outputPath)) {
        console.log(`  ⏭️  [${i + batchIndex + 1}/${missingImages.length}] Already exists: ${img.filename}`);
        return { success: true, skipped: true };
      }
      
      try {
        const response = await zai.images.generations.create({
          prompt: img.prompt,
          size: '1024x1024',
        });
        
        const imageBase64 = response.data[0].base64;
        const buffer = Buffer.from(imageBase64, 'base64');
        fs.writeFileSync(outputPath, buffer);
        
        successCount++;
        console.log(`  ✅ [${i + batchIndex + 1}/${missingImages.length}] Generated: ${img.filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
        return { success: true, filename: img.filename };
      } catch (error: any) {
        failCount++;
        console.error(`  ❌ [${i + batchIndex + 1}/${missingImages.length}] Failed: ${img.filename} - ${error.message}`);
        return { success: false, filename: img.filename, error: error.message };
      }
    });
    
    await Promise.all(promises);
    
    // Small delay between batches
    if (i + BATCH_SIZE < missingImages.length) {
      console.log(`  ⏳ Waiting 2s before next batch...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log(`\n🎉 Generation complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   ⏭️  Skipped: ${missingImages.length - successCount - failCount}`);
}

generateImages().catch(console.error);
