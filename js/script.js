document.addEventListener("DOMContentLoaded", function () {
    const vinkit = [
        "Tarkista öljyn määrä säännöllisesti ja vaihda öljy vähintään valmistajan suositusten mukaisesti.",
        "Tarkista renkaiden ilmanpaine kuukausittain ja varmista, että ne ovat auton valmistajan suositusten mukaisia. Myös renkaiden kulutuspinnan tarkastaminen on tärkeää turvallisuuden kannalta.",
        "Varmista, että jäähdytysnestettä on riittävästi, ja vaihda se tarvittaessa.",
        "Tarkista jarrupalojen ja jarrulevyjen kunto säännöllisesti.",
        "Vaihda ilmansuodatin ja polttoainesuodatin valmistajan suositusten mukaisesti.",
        "Varmista, että kaikki ajovalot, vilkut ja jarruvalot toimivat moitteettomasti."
    ];

    const vinkkiContainer = document.getElementById("vinkki-container");

    const vinkkiNappi = document.createElement("button");
    vinkkiNappi.textContent = "Näytä satunnainen vinkki";
    vinkkiContainer.appendChild(vinkkiNappi);

    const vinkkiElementti = document.createElement("p");
    vinkkiContainer.appendChild(vinkkiElementti);

    vinkkiNappi.addEventListener("click", function () {
        const satunnainenVinkki = vinkit[Math.floor(Math.random() * vinkit.length)];
        vinkkiElementti.textContent = satunnainenVinkki;
    });

    function addMaintenanceEntry(event) {
        event.preventDefault();
        const huolto = document.getElementById('huolto').value;
        const pvm = document.getElementById('pvm').value;
        const kilsat = document.getElementById('kilsat').value
        const entry = { huolto, pvm, kilsat };
        let entries = JSON.parse(localStorage.getItem('huoltokirja')) || [];
        entries.push(entry);
        localStorage.setItem('huoltokirja', JSON.stringify(entries));
        displayMaintenanceLog();
        document.getElementById('huoltoForm').reset();
    }
    function displayMaintenanceLog() {
        const huoltokirja = document.getElementById('huoltokirja');
        huoltokirja.innerHTML = '';
        const entries = JSON.parse(localStorage.getItem('huoltokirja')) || [];
        entries.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.huolto} - ${entry.pvm} - ${entry.kilsat} km`;
            huoltokirja.appendChild(li);
        });
    }

        document.getElementById('huoltoForm').addEventListener('submit', addMaintenanceEntry);
        document.addEventListener('DOMContentLoaded', displayMaintenanceLog);
});
    function toggleMenu() {
        document.querySelector("nav ul").classList.toggle("nav-active");
}
