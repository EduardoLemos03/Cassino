function getRandomSymbol() {
    const rand = Math.random();
    if (rand < 0.5) {
        return { src: "https://static8.depositphotos.com/1338574/829/i/950/depositphotos_8293003-stock-photo-the-number-7-in-gold.jpg", alt: "7" };
    } else if (rand < 0.75) {
        return { src: "https://em-content.zobj.net/source/apple/325/gem-stone_1f48e.png", alt: "Gema" };
    } else {
        return { src: "https://images.emojiterra.com/google/android-12l/512px/1f514.png", alt: "Sino" };
    }
}

function spin() {
    const betValue = Number(document.getElementById('bet').value);
    const slots = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];

    const resultDiv = document.getElementById('result');
    const tryAgainDiv = document.getElementById('try-again');
    const lever = document.getElementById('lever');

    resultDiv.innerHTML = '';
    tryAgainDiv.innerHTML = '';


    lever.style.transform = 'rotate(45deg)';
    setTimeout(() => {
        lever.style.transform = 'rotate(0deg)';
    }, 300);

    let results = [];

    slots.forEach((slot, index) => {
        let totalSpins = 20 + index * 10;
        let interval = 50;
        let spinCount = 0;

        const spinning = setInterval(() => {
            const imgData = getRandomSymbol();
            slot.querySelector('img').src = imgData.src;
            slot.querySelector('img').alt = imgData.alt;

            spinCount++;
            if (spinCount >= totalSpins) {
                clearInterval(spinning);
                results[index] = imgData.alt;

                if (results.filter(r => r).length === slots.length) {
                    if (results.every(r => r === "7")) {
                        resultDiv.innerHTML = `SENSACIONAL! Você ganhou R$${betValue * 10}`;
                        document.getElementById('win-sound').play();
                    } else {
                        resultDiv.innerHTML = `Não foi desta vez! Você perdeu R$${betValue}`;
                        tryAgainDiv.innerHTML = 'Tente novamente!';
                    }
                }
            }
        }, interval);
    });
}
