// const user = { // Об'єкт
//     // ключ: щось, (Ключ завжди є рядком)
//     name: "Anton",
//     age: 14,
//     friends: ["Anton", "David", "Artem", "Oleksandr"],
//     // "last name": "Hetun", // Також можна писати лапками
//     lastName: "Hetun",
// }
// console.log(user);


// // user.city = "Wroclaw";
// // user.street = "Center";
// // user.house = "12";

// // назваоб'єкта.назвазмінної = {
// // 
// // }

// user.location = { // Зробити об'єкт в об'єкти та покласти туди ключ
//     city: "Wroclaw",
//     street: "Center",
//     house: "12"
// }

// user.home = "asd"
// // Поверне це з змінни зверху
// console.log(user.home);

// console.log(user);
// console.log(user.location.street); // Взяти з об'єкта об'єкта ключ
// console.log(user["lastName"]); // Вивести ключ
// // Якщо не знаходить змінну то це undefined


// const name = "Resort"
// const hotelStars = "Stars";

// const hotel = {
//     // name: "Resort", // Теж саме
//     // name: name, // Теж саме
//     name, // Теж саме
//     copacity: 100,
//     // stars: 5,
//     [hotelStars]: 5,
// }

// // console.log(hotel);

// // console.log(hotel.name);
// console.log(hotel.Stars);
// // console.log(hotel.hotelStars); // Непрацює бо це змінна є "Stars"


// Присвоїти змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
}
console.log(apartment);

//Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.Додай йому наступні властивості:
//name - ім'я власника, значення "Henry";
//phone - телефон, значення "982-126-1588";
//email - пошта, значення "henry.carter@aptmail.com".

apartment.owner = {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
}

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
//aptRating - рейтинг;
//aptDescr - опис;
//aptPrice - ціна;
//aptTags - теги.

const aptRating = apartment.rating;
console.log(aptRating);

const aptDescr = apartment.descr;
console.log(aptDescr);


const aptPrice = apartment.price;
console.log(aptPrice);

const aptTags = apartment.tags;
console.log(aptTags);


// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

const ownerName = apartment.owner.name;
console.log(ownerName);

const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);

const ownerEmail = apartment.owner.email;
console.log(ownerEmail);

const numberOfTags = apartment.tags.length;
console.log(numberOfTags);

const firstTag = apartment.tags[0];
console.log(firstTag);

const lastTag = apartment.tags[apartment.tags.length-1];
console.log(lastTag);



