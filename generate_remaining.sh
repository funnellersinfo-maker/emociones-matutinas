#!/bin/bash
# Generate remaining images with delays to avoid rate limiting
DIR="/home/z/my-project/public/products"
DELAY=15

gen() {
    local output="$1"
    local prompt="$2"
    if [ -f "$output" ]; then
        echo "⏭️ SKIP: $output"
        return 0
    fi
    echo "🎨 Generating: $(basename $output)"
    z-ai image -p "$prompt" -o "$output" -s 1024x1024
    if [ $? -eq 0 ]; then
        echo "✅ Done: $(basename $output)"
    else
        echo "❌ Failed: $(basename $output)"
    fi
    sleep $DELAY
}

# Cumpleaños remaining
gen "$DIR/cumpleanos_torta-numero-gigante.png" \
    "Ultra-realistic professional product photography of Giant number shaped birthday cake with buttercream frosting and edible flowers, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/cumpleanos_cumpleanos-sorpresa-oficina.png" \
    "Ultra-realistic professional product photography of Office birthday surprise with mini cake, balloon and desk decoration, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/cumpleanos_regalo-cumple-15-elegante.png" \
    "Ultra-realistic professional product photography of Elegant quinceanera gift set with tiara and crystal bracelet in pink box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/cumpleanos_cena-cumpleanos-dos.png" \
    "Ultra-realistic professional product photography of Romantic birthday dinner for two with candlelight and champagne at restaurant, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/cumpleanos_cumple-sorpresa-mascota.png" \
    "Ultra-realistic professional product photography of Pet birthday combo with gourmet treats, bandana and small toy, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/cumpleanos_video-mensajes-cumpleanos.png" \
    "Ultra-realistic professional product photography of Video message compilation gift with tablet showing family messages and gift box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

# Aniversarios
gen "$DIR/aniversarios_aniversario-silver-luxe.png" \
    "Ultra-realistic professional product photography of Silver anniversary luxury set with silver necklace, white roses and champagne bottle, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_caja-amor-eterno.png" \
    "Ultra-realistic professional product photography of Amor Eterno engraved wooden box with scented candles, chocolates and photo frame inside, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_cena-romantica-para-dos.png" \
    "Ultra-realistic professional product photography of Romantic candlelit dinner for two with wine, flowers and elegant table setting, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_combo-aniversario-rosa.png" \
    "Ultra-realistic professional product photography of Classic anniversary combo with red roses bouquet, teddy bear and chocolate box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_set-vino-y-quesos.png" \
    "Ultra-realistic professional product photography of Wine and cheese set with reserve wine bottle and artisanal cheese board with tools, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_experiencia-en-pareja.png" \
    "Ultra-realistic professional product photography of Couple experience gift box for spa, cooking class or boat ride with voucher and items, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_carta-mapa-estrellas.png" \
    "Ultra-realistic professional product photography of Personalized star map of the night sky framed art print, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_serenata-vallenata.png" \
    "Ultra-realistic professional product photography of Vallenato serenade gift with accordion, sombrero vueltiao and musicians arrangement, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_album-recuerdos-premium.png" \
    "Ultra-realistic professional product photography of Premium leather photo album for couple memories with elegant binding, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_anillo-compromiso-set.png" \
    "Ultra-realistic professional product photography of Engagement ring set in velvet box surrounded by rose petals, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_finde-escapada-romantica.png" \
    "Ultra-realistic professional product photography of Romantic weekend getaway package with hotel voucher, map and travel items, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_pulsera-nombres-enamorados.png" \
    "Ultra-realistic professional product photography of Two silver bracelets with couple names engraved in elegant gift box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_caja-sentimientos-cartas.png" \
    "Ultra-realistic professional product photography of Wooden box with 365 love letters one for each day, romantic gift, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_renovacion-votos-set.png" \
    "Ultra-realistic professional product photography of Vow renewal ceremony set with unity candles, certificate and ribbon, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_collar-corazones-dos.png" \
    "Ultra-realistic professional product photography of Silver necklace with two intertwined hearts pendant, engravable, in jewelry box, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_noche-estrellada-terraza.png" \
    "Ultra-realistic professional product photography of Private terrace dinner under stars with candles and rose petals arrangement, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_set-aromaterapia-pareja.png" \
    "Ultra-realistic professional product photography of Aromatherapy kit for couples with scented candles, essential oils and bath salts, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_foto-libro-nuestra-historia.png" \
    "Ultra-realistic professional product photography of Professional photo book with couple story, 40 pages, hardcover, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_baile-sorpresa-aniversario.png" \
    "Ultra-realistic professional product photography of Private dance class gift for two with salsa or bachata, voucher and dance shoes, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

gen "$DIR/aniversarios_caja-te-recuerdo.png" \
    "Ultra-realistic professional product photography of Personalized memory box with keepsakes compartments and engraved lid, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality"

echo "=========================================="
echo "📊 FINAL COUNT"
TOTAL=$(ls -1 $DIR/cumpleanos_*.png $DIR/aniversarios_*.png 2>/dev/null | wc -l)
echo "Cumpleaños + Aniversarios images: $TOTAL / 40"
