import {ProjectDescriptionType} from "../types/projectDescripitonType";
import imgSobitem1 from "../assets/sobitem_1.png";
import imgSobitem2 from "../assets/sobitem_2.png";
import imgSobitem3 from "../assets/sobitem_3.png";
import imgSobitem4 from "../assets/sobitem_4.png";
import imgSobitem5 from "../assets/sobitem_5.png";
import imgSobitem6 from "../assets/sobitem_6.png";
import imgSobitem7 from "../assets/sobitem_7.png";
import imgSobitem8 from "../assets/sobitem_8.png";
import imgSobitem9 from "../assets/sobitem_9.png";
import imgAsian1 from '../assets/asian_1.png';
import imgAsian2 from '../assets/asian_2.png';
import imgAsian3 from '../assets/asian_3.png';
import imgAsian4 from '../assets/asian_4.png';
import imgAsian5 from '../assets/asian_5.png';
import imgAsian6 from '../assets/asian_6.png';
import imgCars1 from '../assets/carsapp_1.png';
import imgCars2 from '../assets/carsapp_2.png';
import imgCars3 from '../assets/carsapp_3.png';
import imgCars4 from '../assets/carsapp_4.png';
import imgCars5 from '../assets/carsapp_5.png';
import imgCars6 from '../assets/carsapp_6.png';
import imgCars7 from '../assets/carsapp_7.png';
import imgCars8 from '../assets/carsapp_8.png';
import imgCars9 from '../assets/carsapp_9.png';

export const sobItem: ProjectDescriptionType = {
    imgTitle: 'SoBitem',
    images: [imgSobitem1, imgSobitem2, imgSobitem3, imgSobitem4, imgSobitem5, imgSobitem6, imgSobitem7, imgSobitem8, imgSobitem9],
    link: 'https://sobitem.tlossy.networkmanager.pl',
    title: 'Projekt 1: SoBitem',
    description: 'Aplikacja SoBitem umożliwia właścicielom sklepów sprzedawanie własnych produktów, natomiast dla wszystkich użytkowników (również dla właścicieli sklepów) daje możliwość robienie zakupów. Po zalogowaniu i wypełnieniu formularza „dodaj swój sklep” użytkownik tworzy własny sklep w aplikacji. Od tej pory jego sklep będzie widoczny w zakładce „lista sklepów” oraz w zakładce „mapa” jako pinezka przypięta do adresu podanego w formularzu tworzenia sklepu. W tym momencie użytkownik będzie mógł przejść do zakładki „moje sklepy” aby dodać produkty, które znajdują się w jego sklepie. Produkty będą widoczne w zakładce ”znajdź produkt”. Każdy użytkownik aplikacji ma możliwość robienia zakupów - tzn wyszukiwania ich i dodawania do indywidualnego koszyka, który jest przetrzymywany w bazie danych. Frontend wykonany w React + TypeScript, a backend w Node.js z użyciem Nest.js + TypeScript.',
};

export const asianFood: ProjectDescriptionType = {
    imgTitle: 'Asian Food',
    images: [imgAsian1, imgAsian2, imgAsian3, imgAsian4, imgAsian5, imgAsian6],
    link: 'https://asianfood.tlossy.networkmanager.pl',
    title: 'Projekt 2: Asian Food',
    description: 'Aplikacja umożliwia zalogowanym użytkownikom złożenie zamówiania w restauracji Asian Food. Tworząc style CSS oraz ogólną strukturę aplikacji w React korzystałem z jednego z tutoriali na YT. Dzięki temu nauczyłem się jak napisać style aby strona była responsywna. Natomiast nie jest to przepisywanie kodu jeden do jednego. Przede wszystkim w tym tutorialu projekt jest w JavaScript, a ja napisałem swój w TypeScript. W tym tutorialu nie ma logowania/rejestracji, nie ma możliwości dodawania dań do swojego zamówienia, ani w ogóle bakckendu. System autoryzacji i uwierzytelnienia został wykonany za pomocą JWT, dodatkowo rozszerzyłem projekt o dodanie ról użytkownikom. Tzn. Podczas rejestracji można stworzyć tylko zwykłego użytkownika. Natomiast ja sam ręcznie dodałem do bazy danych użytkownika o roli admin, który może dodawać, edytować lub usuwać posiłki z menu. Frontend wykonany w React + TypeScript, a backend w Node.js z użyciem Nest.js + TypeScript.',
};

export const carsApp: ProjectDescriptionType = {
    imgTitle: 'Cars App',
    images: [imgCars1, imgCars2, imgCars3, imgCars4, imgCars5, imgCars6, imgCars7, imgCars8, imgCars9],
    link: 'https://carsapp.tlossy.networkmanager.pl',
    title: 'Projekt 3: Cars App',
    description: 'Aplikacja Cars App umożliwia dodawanie ogłoszeń samochodów na sprzedaż. Każdy użytkownik (nawet niezalogowany) ma możliwość przeglądania ogłoszeń samochodów, natomiast dodawać ogłoszenia może tylko zalogowany użytkownik. Dodatkowo użytkownik o roli ADMIN ma możliwość usunięcia każdego ogłoszenia (gdyby ktoś złamał regulamin itp). System autoryzacji i uwierzytelnienia został wykonany za pomocą JWT. Aplikacja jest responsywna. Frontend wykonany w React + TypeScript, a backend w Node.js z użyciem Express.js + TypeScript.',
};