import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/products';

const IMAGES = [
  { name: "personalizados_body-bebe-personalizado.png", prompt: "Ultra-realistic professional product photography of an organic cotton baby bodysuit with custom name print, soft pastel colors, adorable design, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "personalizados_manta-foto-grande.png", prompt: "Ultra-realistic professional product photography of a large 150x200cm polar fleece blanket with photo print, soft texture, beautifully folded, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "personalizados_set-copa-grabada-pareja.png", prompt: "Ultra-realistic professional product photography of two crystal glasses with laser-engraved names and date, elegant gift box with satin lining, champagne glasses, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_mega-sorpresa-ultimate.png", prompt: "Ultra-realistic professional product photography of an ultimate surprise package with serenade elements, colorful balloons, fresh flowers, celebration cake and champagne bottle, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-parranda.png", prompt: "Ultra-realistic professional product photography of a vallenato parranda experience with 4 musicians, accordion, drums, refreshments, tropical party vibe, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-box-misteriosa.png", prompt: "Ultra-realistic professional product photography of a mystery gift box with 3 levels of surprise presents, elegant black gift box with gold ribbon, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-medianoche.png", prompt: "Ultra-realistic professional product photography of a midnight surprise arrival with flowers, candles, music and gift box, romantic dim lighting, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-flash-mob.png", prompt: "Ultra-realistic professional product photography of a flash mob surprise with 10 professional dancers, dynamic choreography, vibrant energy, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-globos-cielo.png", prompt: "Ultra-realistic professional product photography of a sky lantern release with 100 paper lanterns at sunset, golden hour glow, romantic atmosphere, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-mensaje-arena.png", prompt: "Ultra-realistic professional product photography of a giant love message written in sand at countryside, aerial view, romantic gesture, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-viaje-sorpresa.png", prompt: "Ultra-realistic professional product photography of a surprise weekend getaway trip, plane tickets with destination revealed, passport and luggage, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-decoracion-hogar.png", prompt: "Ultra-realistic professional product photography of a home surprise decoration with balloons, rose petals, candles and banner, romantic living room setup, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-comida-favorita.png", prompt: "Ultra-realistic professional product photography of a professional chef cooking favorite meal at home, gourmet plating, kitchen scene, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-foto-gigante.png", prompt: "Ultra-realistic professional product photography of a giant 3x2 meter photo display in park terrace, large format printed photo on easel, outdoor celebration, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-grabacion-familiar.png", prompt: "Ultra-realistic professional product photography of a family video message compilation gift, USB drive with video, gift box with screen, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-clase-privada.png", prompt: "Ultra-realistic professional product photography of a private class gift voucher for cooking painting dance or mixology, elegant certificate in gift envelope, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-scavenger-hunt.png", prompt: "Ultra-realistic professional product photography of a personalized treasure hunt through the city with clue cards, map, and compass, adventure gift, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-picnic-romantico.png", prompt: "Ultra-realistic professional product photography of a romantic picnic setup in park with blanket, gourmet basket, wine and candles, outdoor luxury, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-room-service.png", prompt: "Ultra-realistic professional product photography of a surprise hotel room service with breakfast tray or spa treatment, luxury hotel amenities, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-concierto-privado.png", prompt: "Ultra-realistic professional product photography of a private concert with professional singer, microphone and stage setup, intimate venue, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-cine-privado.png", prompt: "Ultra-realistic professional product photography of a private cinema screening with gourmet snacks, popcorn, themed decoration, movie theater, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-maquillaje-glam.png", prompt: "Ultra-realistic professional product photography of a professional makeup and styling session with photo shoot, cosmetics kit, vanity setup, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
  { name: "sorpresas_sorpresa-amanecer-montana.png", prompt: "Ultra-realistic professional product photography of a mountain sunrise trek with breakfast at the summit, hiking gear, thermos and mountain view, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" },
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateWithRetry(zai, prompt, outputPath, maxRetries = 8) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await zai.images.generations.create({
        prompt: prompt,
        size: '1024x1024'
      });
      
      const imageBase64 = response.data[0].base64;
      const buffer = Buffer.from(imageBase64, 'base64');
      fs.writeFileSync(outputPath, buffer);
      
      return { success: true };
    } catch (error) {
      const isRateLimit = error.message && error.message.includes('429');
      console.error(`  ⚠️ Attempt ${attempt}/${maxRetries} failed: ${error.message.substring(0, 60)}`);
      if (attempt < maxRetries) {
        const waitTime = isRateLimit ? Math.min(45000 * attempt, 300000) : Math.min(5000 * attempt, 30000);
        console.log(`  ⏳ Waiting ${waitTime/1000}s...`);
        await sleep(waitTime);
      }
    }
  }
  return { success: false };
}

async function main() {
  console.log(`🚀 Starting generation of ${IMAGES.length} remaining images...\n`);
  
  const zai = await ZAI.create();
  
  // Filter out already existing images
  const remaining = IMAGES.filter(img => {
    const fullPath = path.join(OUTPUT_DIR, img.name);
    return !fs.existsSync(fullPath);
  });
  
  console.log(`📊 ${IMAGES.length - remaining.length} already exist, ${remaining.length} to generate\n`);
  
  let successCount = 0;
  let failCount = 0;
  const failed = [];
  
  for (let i = 0; i < remaining.length; i++) {
    const img = remaining[i];
    const outputPath = path.join(OUTPUT_DIR, img.name);
    
    console.log(`[${i+1}/${remaining.length}] ${img.name}`);
    
    const result = await generateWithRetry(zai, img.prompt, outputPath);
    
    if (result.success) {
      console.log(`  ✅`);
      successCount++;
    } else {
      console.log(`  ❌`);
      failCount++;
      failed.push(img.name);
    }
    
    // Rate limit: wait between requests
    if (i < remaining.length - 1) {
      await sleep(12000);
    }
  }
  
  console.log(`\n========== RESULTS ==========`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  if (failed.length > 0) {
    console.log(`Failed images: ${failed.join(', ')}`);
  }
  console.log(`=============================`);
}

main().catch(console.error);
