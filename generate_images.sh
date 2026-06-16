#!/bin/bash

generate() {
    local prompt="$1"
    local output="$2"
    
    # Try up to 3 times
    for attempt in 1 2 3; do
        echo "[$(date +%H:%M:%S)] Attempt $attempt: Generating $output"
        if z-ai image -p "$prompt" -o "$output" -s 1024x1024; then
            echo "[$(date +%H:%M:%S)] SUCCESS: $output"
            return 0
        else
            echo "[$(date +%H:%M:%S)] FAILED attempt $attempt for $output, waiting 20s..."
            sleep 20
        fi
    done
    echo "[$(date +%H:%M:%S)] FAILED ALL ATTEMPTS: $output"
    return 1
}

# Desayunos
generate "Ultra-realistic professional product photography of gourmet arepas with different fillings including cheese, meat and avocado, Colombian cuisine, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-arepas-gourmet.png"
sleep 10

generate "Ultra-realistic professional product photography of a Parisian breakfast with butter croissants, pain au chocolat and artisanal jams in ceramic pots, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-croissants-paris.png"
sleep 10

generate "Ultra-realistic professional product photography of a heart-shaped breakfast tray for bed with rose petals and candle, romantic morning delivery, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-enamorados-cama.png"
sleep 10

generate "Ultra-realistic professional product photography of power breakfast bowls with acai and quinoa, superfoods, fresh berries and seeds, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-bowl-power.png"
sleep 10

generate "Ultra-realistic professional product photography of a brunch with mimosas in champagne glasses, eggs benedict and mini cheesecake, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-mimosa-brunch.png"
sleep 10

generate "Ultra-realistic professional product photography of Colombian hot chocolate with cheese, bread and bunuelos, traditional comfort food, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-chocolate-caliente.png"
sleep 10

generate "Ultra-realistic professional product photography of a dawn surprise breakfast delivery with flowers and serenade note, romantic morning gift, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/desayunos_desayuno-sorpresa-nocturno.png"
sleep 10

# Globos
generate "Ultra-realistic professional product photography of a happy birthday helium balloon bouquet with confetti and star-shaped balloons, festive, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_bouquet-globos-feliz-cumple.png"
sleep 10

generate "Ultra-realistic professional product photography of a romantic balloon arch in red and pink with LED fairy lights, event decoration, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_arco-globos-romantico.png"
sleep 10

generate "Ultra-realistic professional product photography of a surprise box exploding with helium balloons and colorful confetti, gift reveal, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globo-caja-explosion.png"
sleep 10

generate "Ultra-realistic professional product photography of a giant metallic foil number balloon in gold, shiny reflective surface, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_numero-gigante-metalico.png"
sleep 10

generate "Ultra-realistic professional product photography of an elegant 1.8m balloon column decoration for events, white and gold, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_columna-globos-elegante.png"
sleep 10

generate "Ultra-realistic professional product photography of foil letter balloons spelling a name, personalized message, shiny rose gold, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-letras-nombre.png"
sleep 10

generate "Ultra-realistic professional product photography of a pastel baby shower balloon bouquet with baby bottle and teddy bear designs, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_bouquet-globos-baby-shower.png"
sleep 10

generate "Ultra-realistic professional product photography of a giant transparent balloon with gift box and confetti inside, surprise reveal, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globo-sorpresa-interior.png"
sleep 10

generate "Ultra-realistic professional product photography of a magical unicorn themed balloon set with pink and purple balloons, rainbow horn, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-unicornio-magico.png"
sleep 10

generate "Ultra-realistic professional product photography of festive Christmas themed balloons with reindeer and Santa Claus designs, holiday, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-navidad-festivos.png"
sleep 10

generate "Ultra-realistic professional product photography of a graduation balloon set with cap and diploma shaped balloons, congratulations, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-graduacion-exito.png"
sleep 10

generate "Ultra-realistic professional product photography of a rainbow colored balloon bouquet, all vibrant colors red orange yellow green blue purple, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_bouquet-globos-arcoiris.png"
sleep 10

generate "Ultra-realistic professional product photography of a marriage proposal balloon set with Marry Me letter balloons in gold, romantic, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-pedida-matrimonio.png"
sleep 10

generate "Ultra-realistic professional product photography of Disney princess themed foil balloons featuring Cinderella and Belle, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-disney-princesas.png"
sleep 10

generate "Ultra-realistic professional product photography of Spiderman hero themed balloons in red and blue, superhero party, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-spiderman-heroe.png"
sleep 10

generate "Ultra-realistic professional product photography of elegant wedding balloons in white and gold with Mr and Mrs letter balloons, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-bodas-elegantes.png"
sleep 10

generate "Ultra-realistic professional product photography of Minions themed party balloons in yellow and blue, fun character, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-minions-fiesta.png"
sleep 10

generate "Ultra-realistic professional product photography of eternal rose shaped foil balloons in red and gold, romantic petals, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-rosas-eternas.png"
sleep 10

generate "Ultra-realistic professional product photography of corporate branded balloons with elegant logo colors, business event, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-empresariales-corp.png"
sleep 10

generate "Ultra-realistic professional product photography of quinceanera 15th birthday balloons in pink and gold, sparkling number 15, luxury gift shop e-commerce style, clean white background, soft studio lighting, premium presentation, 4K quality" "/home/z/my-project/public/products/globos_globos-cumple-quinceanera.png"

echo "=== ALL DONE ==="
