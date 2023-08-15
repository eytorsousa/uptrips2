const links = {
    link1: 'Av. Palmira Rossi, 1195 - Recreio São Jorge, Guarulhos - SP, 07144-170',
    link2: 'https://goo.gl/maps/b2n3sHHBTU1sYyZw7',
    link3: 'Estação Tucuruvi - Av. Antônio Maria Laet; Lateral do Terminal de Ônibus',
    link4: 'https://goo.gl/maps/pnVPpdUaFFsNzodE8'
} ; 

const recreio = document.getElementById("recreio");
const recreioLink = document.getElementById("link-recreio");
const tucuruvi = document.getElementById("tucuruvi");
const tucuruviLink = document.getElementById("link-tucuruvi");
  
recreio.addEventListener("click", () => {
    funcaoCopia(links.link1)
});

recreioLink.addEventListener("click", () => {
    funcaoCopia(links.link2)
});

tucuruvi.addEventListener("click", () => {
    funcaoCopia(links.link3)
});

tucuruviLink.addEventListener("click", () => {
    funcaoCopia(links.link4)
});
  
function funcaoCopia(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('Copiado com sucesso!');
        })
        .catch((error) => {
            console.error('Falha ao copiar!: ', error);
        });
}
