import { Offer } from "./offer";

const ASSETS = "./assets/images/";
export const OFFERS: Offer[] = [
    /* breakfast */
    {
        name: "Formule petit-déjeuner 1",
        price: 333.99,
        type: "breakfast",
        thumb: ASSETS.concat("formules/pd-f1-small.jpg"),
        src: ASSETS.concat("formules/pd-f1.jpg"),
        caption: "1 Pains au chocolat + jus/café"
    },
    {
        name: "Formule petit-déjeuner 2",
        price: 3.99,
        type: "breakfast",
        thumb: ASSETS.concat("formules/pd-f2-small.jpg"),
        src: ASSETS.concat("formules/pd-f2.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café"
    },
    {
        name: "Formule petit-déjeuner 3",
        price: 4.99,
        type: "breakfast",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
    /* wdiner */
    {
        name: "Formule 1",
        price: 7.99,
        type: "wdiner",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
    /* bread */
    {
        name: "Formule 1",
        price: 7.99,
        type: "bread",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
    /* diner */
    {
        name: "Formule 1",
        price: 11.99,
        type: "diner",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat \n 1 croissant + jus/café + fruits"
    },
    /* porchetta */
    {
        name: "Formule 1",
        price: 10.99,
        type: "porchetta",
        thumb: ASSETS.concat("formules/pork-small.jpg"),
        src: ASSETS.concat("formules/pork.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
    /* bbq */
    {
        name: "Formule 1",
        price: 12.99,
        type: "bbq",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
    /* Menu */
    {
        name: "Formule 1",
        price: 15.99,
        type: "menu",
        thumb: ASSETS.concat("formules/pd-f3-small.jpg"),
        src: ASSETS.concat("formules/pd-f3.jpg"),
        caption: "1 Pains au chocolat + 1 croissant + jus/café + fruits"
    },
]

