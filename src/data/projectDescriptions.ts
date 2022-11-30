import {ProjectDescriptionType} from "../types/projectDescripitonType";
import imgSobitem1 from "../assets/sobitem_1.png";
import imgSobitem2 from "../assets/sobitem_2.png";
import imgSobitem3 from "../assets/sobitem_3.png";
import imgSobitem4 from "../assets/sobitem_4.png";
import imgSobitem5 from "../assets/sobitem_5.png";

export const sobItem: ProjectDescriptionType = {
    imgTitle: 'SoBitem',
    images: [imgSobitem1, imgSobitem2, imgSobitem3, imgSobitem4, imgSobitem5],
    link: 'https://sobitem.tlossy.networkmanager.pl',
    title: 'Projekt 1: SoBitem',
    description: 'Aplikacja SoBitem umożliwia właścicielom sklepów sprzedawanie własnych produktów, natomiast dla wszystkich użytkowników (również dla właścicieli sklepów) daje możliwość robienie zakupów. Po zalogowaniu i wypełnieniu formularza „dodaj swój sklep” użytkownik tworzy własny sklep w aplikacji. Od tej pory jego sklep będzie widoczny w zakładce „lista sklepów” oraz w zakładce „mapa” jako pinezka przypięta do adresu podanego w formularzu tworzenia sklepu. W tym momencie użytkownik będzie mógł przejść do zakładki „moje sklepy” aby dodać produkty, które znajdują się w jego sklepie. Produkty będą widoczne w zakładce ”znajdź produkt”. Każdy użytkownik aplikacji ma możliwość robienia zakupów - tzn wyszukiwania ich i dodawania do indywidualnego koszyka, który jest przetrzymywany w bazie danych',
};