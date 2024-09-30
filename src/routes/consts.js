// PUBLIC routes
export const STARTPAGE_ROUTE = "/";
export const ERROR_ROUTE = "/error";
export const TEXTMD_ROUTE = "/md";
export const CARDINFO_ROUTE = "/card"; // роут для отдельной карточки с инфой
export const SEARCH_ROUTE = "/explore"; // роут со страницей "обозревателя сайта", тут будет поиск, категории и другие рекомендации для человека
// для поиска по фильтрам юзать /explore?lang=''&tag=''&author='' и тд
export const CATEGORY_ROUTE = "/:categoryID";

// categories
// IN FILE Categoriess.js

// TECH routes
export const API_ROUTE = "/api";
export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/join";
export const ADMIN_ROUTE = "/admin"; // админка

export const REF_ROUTE = "/r/:shortlink"; // короткие ссылки и рефералки
export const HELLOPAGE_ROUTE = "/hello"; // стартовая и информационная страница
