import {ProjectDescriptionType} from "../types/projectDescripitonType";
import imgSobitem1 from "../assets/sobitem_1.png";
import imgSobitem2 from "../assets/sobitem_2.png";
import imgSobitem3 from "../assets/sobitem_3.png";
import imgSobitem4 from "../assets/sobitem_4.png";
import imgSobitem5 from "../assets/sobitem_5.png";
import imgAsian1 from '../assets/asian_1.png';
import imgAsian2 from '../assets/asian_2.png';
import imgAsian3 from '../assets/asian_3.png';
import imgAsian4 from '../assets/asian_4.png';

export const sobItem: ProjectDescriptionType = {
    imgTitle: 'SoBitem',
    images: [imgSobitem1, imgSobitem2, imgSobitem3, imgSobitem4, imgSobitem5],
    link: 'https://sobitem.tlossy.networkmanager.pl',
    title: 'Projekt 1: SoBitem',
    description: 'Aplikacja SoBitem umożliwia właścicielom sklepów sprzedawanie własnych produktów, natomiast dla wszystkich użytkowników (również dla właścicieli sklepów) daje możliwość robienie zakupów. Po zalogowaniu i wypełnieniu formularza „dodaj swój sklep” użytkownik tworzy własny sklep w aplikacji. Od tej pory jego sklep będzie widoczny w zakładce „lista sklepów” oraz w zakładce „mapa” jako pinezka przypięta do adresu podanego w formularzu tworzenia sklepu. W tym momencie użytkownik będzie mógł przejść do zakładki „moje sklepy” aby dodać produkty, które znajdują się w jego sklepie. Produkty będą widoczne w zakładce ”znajdź produkt”. Każdy użytkownik aplikacji ma możliwość robienia zakupów - tzn wyszukiwania ich i dodawania do indywidualnego koszyka, który jest przetrzymywany w bazie danych',
};

export const asianFood: ProjectDescriptionType = {
    imgTitle: 'Asian Food',
    images: [imgAsian1, imgAsian2, imgAsian3, imgAsian4],
    link: 'https://asianfood.tlossy.networkmanager.pl',
    title: 'Projekt 2: Asian Food',
    description: 'Tworząc style CSS oraz ogólną strukturę aplikacji w React korzystałem z jednego z tutoriali na YT. Dzięki temu nauczyłem się jak napisać style aby strona wyglądała również dobrze na wersji mobilnej. Natomiast nie jest to przepisywanie kodu jeden do jednego. Przede wszystkim w tym tutorialu projekt jest w JavaScript, a ja napisałem swój w TypeScript. W tym tutorialu nie ma logowania/rejestracji, nie ma możliwości dodawania dań do swojego zamówienia, ani w ogóle bakckendu. Zrobiłem to w Node.js z  użyciem frameworka Nest.js. System autoryzacji i uwierzytelnienia został wykonany za pomocą JWT, dodatkowo rozszerzyłem projekt o dodanie ról użytkownikom. Tzn. Podczas rejestracji można stworzyć tylko zwykłego użytkownika. Natomiast ja sam ręcznie dodałem do bazy danych użytkownika o roli admin, który może dodawać posiłki do menu, edytować lub usuwać już istniejące i te akcje są zabezpieczone przez Guarda.',
};