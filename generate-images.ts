import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const outputDir = './public/products';

const imagePrompts = [
  // PELUCHES (3 images)
  { id: 'peluche_1', prompt: 'Professional product photo of a large brown teddy bear with golden ribbon, sitting on soft pink background, luxury gift shop, studio lighting, ecommerce style, clean background, warm tones, high quality' },
  { id: 'peluche_2', prompt: 'Professional product photo of a pink unicorn plush toy with sparkly mane and golden horn, sitting on pastel pink background, luxury gift shop, studio lighting, ecommerce style, clean background, high quality' },
  { id: 'peluche_3', prompt: 'Professional product photo of a cute koala plush toy with eucalyptus branch, sitting on cream background, luxury gift shop, studio lighting, ecommerce style, clean background, high quality' },

  // FLORES (3 images)
  { id: 'flor_1', prompt: 'Professional product photo of a premium bouquet of 25 red roses with green foliage, wrapped in elegant pink paper, on white background, luxury flower shop, studio lighting, ecommerce style, high quality' },
  { id: 'flor_2', prompt: 'Professional product photo of a luxury wooden box flower arrangement with roses and lilies, on white background, luxury gift shop, studio lighting, ecommerce style, clean background, high quality' },
  { id: 'flor_3', prompt: 'Professional product photo of a beautiful sunflower bouquet with wildflowers, wrapped in kraft paper, on white background, flower shop, studio lighting, ecommerce style, high quality' },

  // DESAYUNOS (3 images)
  { id: 'desayuno_1', prompt: 'Professional product photo of a luxury breakfast tray with fruits, juice, artisan bread and flowers, elegant presentation on pink tray, white background, gift delivery, studio lighting, ecommerce style, high quality' },
  { id: 'desayuno_2', prompt: 'Professional product photo of a romantic breakfast tray with heart-shaped fruits, chocolate and red roses, elegant presentation, white background, gift delivery, studio lighting, ecommerce style, high quality' },
  { id: 'desayuno_3', prompt: 'Professional product photo of a birthday breakfast with decorated pancakes, natural juice and candles, festive presentation, white background, gift delivery, studio lighting, ecommerce style, high quality' },

  // GLOBOS (3 images)
  { id: 'globo_1', prompt: 'Professional product photo of a colorful birthday balloon bouquet with helium balloons and ribbons, on white background, party decoration, studio lighting, ecommerce style, high quality' },
  { id: 'globo_2', prompt: 'Professional product photo of a spectacular balloon arch decoration with pastel colors, on white background, party decoration, studio lighting, ecommerce style, high quality' },
  { id: 'globo_3', prompt: 'Professional product photo of foil heart balloons in red and pink with confetti, on white background, romantic decoration, studio lighting, ecommerce style, high quality' },

  // CUMPLEAÑOS (3 images)
  { id: 'cumple_1', prompt: 'Professional product photo of a luxury golden birthday surprise gift box with ribbon, on white background, premium gift shop, studio lighting, ecommerce style, high quality' },
  { id: 'cumple_2', prompt: 'Professional product photo of a decorated birthday cake with candles and festive decoration, on white background, bakery, studio lighting, ecommerce style, high quality' },
  { id: 'cumple_3', prompt: 'Professional product photo of a complete birthday party kit with decorations plates cups and hats, on white background, party supplies, studio lighting, ecommerce style, high quality' },

  // ANIVERSARIOS (3 images)
  { id: 'aniversario_1', prompt: 'Professional product photo of a luxury love gift box with wine, chocolates and love letter, on white background, romantic gift, studio lighting, ecommerce style, high quality' },
  { id: 'aniversario_2', prompt: 'Professional product photo of a romantic candlelit dinner setup with flowers and champagne, on white background, anniversary gift, studio lighting, ecommerce style, high quality' },
  { id: 'aniversario_3', prompt: 'Professional product photo of a premium wine and cheese board with fruits and nuts, elegant presentation, on white background, anniversary gift, studio lighting, ecommerce style, high quality' },

  // PERSONALIZADOS (3 images)
  { id: 'personalizado_1', prompt: 'Professional product photo of a personalized photo mug with custom printing, on white background, custom gift shop, studio lighting, ecommerce style, high quality' },
  { id: 'personalizado_2', prompt: 'Professional product photo of a personalized LED name lamp in acrylic, glowing warm light, on white background, custom gift shop, studio lighting, ecommerce style, high quality' },
  { id: 'personalizado_3', prompt: 'Professional product photo of a personalized wooden engraved gift box with name, on white background, custom gift shop, studio lighting, ecommerce style, high quality' },

  // SORPRESAS (3 images)
  { id: 'sorpresa_1', prompt: 'Professional product photo of a mystery surprise gift box with colorful explosion confetti, on white background, surprise gift, studio lighting, ecommerce style, high quality' },
  { id: 'sorpresa_2', prompt: 'Professional product photo of a surprise box opening with balloons flying out, on white background, gift reveal, studio lighting, ecommerce style, high quality' },
  { id: 'sorpresa_3', prompt: 'Professional product photo of a digital QR code gift card with elegant design, on white background, digital experience gift, studio lighting, ecommerce style, high quality' },
];

async function main() {
  const zai = await ZAI.create();

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`🎨 Generating ${imagePrompts.length} product images...`);

  for (let i = 0; i < imagePrompts.length; i++) {
    const { id, prompt } = imagePrompts[i];
    const outputPath = path.join(outputDir, `${id}.png`);

    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  [${i + 1}/${imagePrompts.length}] ${id} already exists, skipping`);
      continue;
    }

    try {
      console.log(`🎨 [${i + 1}/${imagePrompts.length}] Generating ${id}...`);
      const response = await zai.images.generations.create({
        prompt: prompt,
        size: '1024x1024',
      });

      const imageBase64 = response.data[0].base64;
      const buffer = Buffer.from(imageBase64, 'base64');
      fs.writeFileSync(outputPath, buffer);

      console.log(`✅ [${i + 1}/${imagePrompts.length}] ${id} saved (${(buffer.length / 1024).toFixed(0)}KB)`);
    } catch (error) {
      console.error(`❌ [${i + 1}/${imagePrompts.length}] ${id} failed:`, error.message);
    }
  }

  console.log('\n🎉 Image generation complete!');
}

main().catch(console.error);
