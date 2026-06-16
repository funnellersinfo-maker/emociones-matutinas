import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const DIR = '/home/z/my-project/public/products';

const images = [
  // Cumpleaños 10-20
  { file: 'cumpleanos_regalo-cumpleanero-ejecutivo.png', prompt: 'Ultra-realistic professional product photography of Executive birthday gift set with leather portfolio, luxury fountain pen and premium stationery, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_combo-cumple-ninos-divertido.png', prompt: 'Ultra-realistic professional product photography of Fun kids birthday combo with colorful balloons, small pinata and decorated cupcakes, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_tarjeta-regalo-experiencia.png', prompt: 'Ultra-realistic professional product photography of Experience gift card in elegant box for spa, dinner or adventure, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_bono-spa-cumpleanos.png', prompt: 'Ultra-realistic professional product photography of Spa day gift voucher with massage oils and facial treatment products, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_caja-whisky-premium-cumple.png', prompt: 'Ultra-realistic professional product photography of Premium whisky bottle in elegant wooden box with crystal glasses, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_torta-numero-gigante.png', prompt: 'Ultra-realistic professional product photography of Giant number shaped birthday cake with buttercream frosting and edible flowers, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_cumpleanos-sorpresa-oficina.png', prompt: 'Ultra-realistic professional product photography of Office birthday surprise with mini cake, balloon and desk decoration, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_regalo-cumple-15-elegante.png', prompt: 'Ultra-realistic professional product photography of Elegant quinceanera gift set with tiara and crystal bracelet in pink box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_cena-cumpleanos-dos.png', prompt: 'Ultra-realistic professional product photography of Romantic birthday dinner for two with candlelight and champagne at restaurant, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_cumple-sorpresa-mascota.png', prompt: 'Ultra-realistic professional product photography of Pet birthday combo with gourmet treats, bandana and small toy, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'cumpleanos_video-mensajes-cumpleanos.png', prompt: 'Ultra-realistic professional product photography of Video message compilation gift with tablet showing family messages and gift box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  // Aniversarios 21-40
  { file: 'aniversarios_aniversario-silver-luxe.png', prompt: 'Ultra-realistic professional product photography of Silver anniversary luxury set with silver necklace, white roses and champagne bottle, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_caja-amor-eterno.png', prompt: 'Ultra-realistic professional product photography of Amor Eterno engraved wooden box with scented candles, chocolates and photo frame inside, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_cena-romantica-para-dos.png', prompt: 'Ultra-realistic professional product photography of Romantic candlelit dinner for two with wine, flowers and elegant table setting, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_combo-aniversario-rosa.png', prompt: 'Ultra-realistic professional product photography of Classic anniversary combo with red roses bouquet, teddy bear and chocolate box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_set-vino-y-quesos.png', prompt: 'Ultra-realistic professional product photography of Wine and cheese set with reserve wine bottle and artisanal cheese board with tools, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_experiencia-en-pareja.png', prompt: 'Ultra-realistic professional product photography of Couple experience gift box for spa, cooking class or boat ride with voucher and items, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_carta-mapa-estrellas.png', prompt: 'Ultra-realistic professional product photography of Personalized star map of the night sky framed art print, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_serenata-vallenata.png', prompt: 'Ultra-realistic professional product photography of Vallenato serenade gift with accordion, sombrero vueltiao and musicians arrangement, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_album-recuerdos-premium.png', prompt: 'Ultra-realistic professional product photography of Premium leather photo album for couple memories with elegant binding, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_anillo-compromiso-set.png', prompt: 'Ultra-realistic professional product photography of Engagement ring set in velvet box surrounded by rose petals, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_finde-escapada-romantica.png', prompt: 'Ultra-realistic professional product photography of Romantic weekend getaway package with hotel voucher, map and travel items, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_pulsera-nombres-enamorados.png', prompt: 'Ultra-realistic professional product photography of Two silver bracelets with couple names engraved in elegant gift box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_caja-sentimientos-cartas.png', prompt: 'Ultra-realistic professional product photography of Wooden box with 365 love letters one for each day, romantic gift, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_renovacion-votos-set.png', prompt: 'Ultra-realistic professional product photography of Vow renewal ceremony set with unity candles, certificate and ribbon, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_collar-corazones-dos.png', prompt: 'Ultra-realistic professional product photography of Silver necklace with two intertwined hearts pendant, engravable, in jewelry box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_noche-estrellada-terraza.png', prompt: 'Ultra-realistic professional product photography of Private terrace dinner under stars with candles and rose petals arrangement, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_set-aromaterapia-pareja.png', prompt: 'Ultra-realistic professional product photography of Aromatherapy kit for couples with scented candles, essential oils and bath salts, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_foto-libro-nuestra-historia.png', prompt: 'Ultra-realistic professional product photography of Professional photo book with couple story, 40 pages, hardcover, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_baile-sorpresa-aniversario.png', prompt: 'Ultra-realistic professional product photography of Private dance class gift for two with salsa or bachata, voucher and dance shoes, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
  { file: 'aniversarios_caja-te-recuerdo.png', prompt: 'Ultra-realistic professional product photography of Personalized memory box with keepsakes compartments and engraved lid, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality' },
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const zai = await ZAI.create();
  
  let successCount = 0;
  let failCount = 0;
  const failed = [];

  for (const img of images) {
    const outputPath = path.join(DIR, img.file);
    
    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  SKIP (exists): ${img.file}`);
      successCount++;
      continue;
    }
    
    let generated = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`🎨 Generating (${attempt}/3): ${img.file}`);
        const response = await zai.images.generations.create({
          prompt: img.prompt,
          size: '1024x1024'
        });
        
        const imageBase64 = response.data[0].base64;
        const buffer = Buffer.from(imageBase64, 'base64');
        fs.writeFileSync(outputPath, buffer);
        
        console.log(`✅ SUCCESS: ${img.file}`);
        successCount++;
        generated = true;
        break;
      } catch (error) {
        console.error(`❌ Attempt ${attempt} failed: ${error.message}`);
        if (attempt < 3) {
          const waitTime = attempt * 15000; // 15s, 30s
          console.log(`⏳ Waiting ${waitTime/1000}s before retry...`);
          await sleep(waitTime);
        }
      }
    }
    
    if (!generated) {
      console.error(`❌ FAILED after 3 attempts: ${img.file}`);
      failCount++;
      failed.push(img.file);
    }
    
    // Small delay between successful generations
    await sleep(3000);
  }

  console.log('\n========================================');
  console.log('📊 GENERATION SUMMARY');
  console.log('========================================');
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📁 Total: ${images.length}`);
  
  if (failed.length > 0) {
    console.log('\nFailed images:');
    failed.forEach(f => console.log(`  - ${f}`));
  }
}

main().catch(console.error);
