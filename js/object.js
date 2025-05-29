// // const user = { // Об'єкт
// //     // ключ: щось, (Ключ завжди є рядком)
// //     name: "Anton",
// //     age: 14,
// //     friends: ["Anton", "David", "Artem", "Oleksandr"],
// //     // "last name": "Hetun", // Також можна писати лапками
// //     lastName: "Hetun",
// // }
// // console.log(user);


// // // user.city = "Wroclaw";
// // // user.street = "Center";
// // // user.house = "12";

// // // назваоб'єкта.назвазмінної = {
// // // 
// // // }

// // user.location = { // Зробити об'єкт в об'єкти та покласти туди ключ
// //     city: "Wroclaw",
// //     street: "Center",
// //     house: "12"
// // }

// // user.home = "asd"
// // // Поверне це з змінни зверху
// // console.log(user.home);

// // console.log(user);
// // console.log(user.location.street); // Взяти з об'єкта об'єкта ключ
// // console.log(user["lastName"]); // Вивести ключ
// // // Якщо не знаходить змінну то це undefined


// // const name = "Resort"
// // const hotelStars = "Stars";

// // const hotel = {
// //     // name: "Resort", // Теж саме
// //     // name: name, // Теж саме
// //     name, // Теж саме
// //     copacity: 100,
// //     // stars: 5,
// //     [hotelStars]: 5,
// // }

// // // console.log(hotel);

// // // console.log(hotel.name);
// // console.log(hotel.Stars);
// // // console.log(hotel.hotelStars); // Непрацює бо це змінна є "Stars"


// // Присвоїти змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// // imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// // descr - опис, значення "Spacious apartment in the city center";
// // rating - рейтинг, значення 4;
// // price - ціна, значення 2153;
// // tags - метаінформація, масив ["premium", "promoted", "top"].

// // const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags: ["premium", "promoted", "top"]
// // }
// // console.log(apartment);

// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.Додай йому наступні властивості:
// //name - ім'я власника, значення "Henry";
// //phone - телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.com".

// // apartment.owner = {
// //     name: "Henry",
// //     phone: "982-126-1588",
// //     email: "henry.carter@aptmail.com",
// // }

// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// //aptRating - рейтинг;
// //aptDescr - опис;
// //aptPrice - ціна;
// //aptTags - теги.

// // const aptRating = apartment.rating;
// // console.log(aptRating);

// // const aptDescr = apartment.descr;
// // console.log(aptDescr);


// // const aptPrice = apartment.price;
// // console.log(aptPrice);

// // const aptTags = apartment.tags;
// // console.log(aptTags);


// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// // властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// // const ownerName = apartment.owner.name;
// // console.log(ownerName);

// // const ownerPhone = apartment.owner.phone;
// // console.log(ownerPhone);

// // const ownerEmail = apartment.owner.email;
// // console.log(ownerEmail);

// // const numberOfTags = apartment.tags.length;
// // console.log(numberOfTags);

// // const firstTag = apartment.tags[0];
// // console.log(firstTag);

// // const lastTag = apartment.tags[apartment.tags.length-1];
// // console.log(lastTag);





// // Урок 2

// // Ключ значення може бути всі типи даних, навіть змінни

// // const user = {
// //     name: "Anton",
// //     age: 13,
// //     city: "Donetsk",
// //     street: "Center",
// //     house: 1,
// //     apartment: 2,

// //     // Методи об'єтку які працюють з внутрішніми властивостями об'єкта

// //     showName () {
// //         // return this.name // Поверни цей.(ім'я ключа)
// //         return this.city
// //     }

    
// //     changeLocation (newCity, newStreet, newHouse, newApartment) {
// //         this.city = newCity;
// //         this.street = newStreet;
// //         this.house = newHouse;
// //         this.apartment = newApartment;
// //     }
// // }


// // // delete user.city // Більш використований синтаксис
// // // delete user["age"] // Старий синтаксис
// // // user.street = "Center";
// // // user.house = 1;
// // // user.apartment = 2;

// // console.log(user);

// // console.log(user.showName()); // звернутися до функції

// // user.changeLocation("Dnipro", "Doslidna", "9b", 18);

// // console.log(user);



// // Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// // const person = {
// //     name: "David",
// //     age: "73",
// //     gender: "Male",

// //     showPerson () {
// //         return `NAME: "${this.name}", AGE: "${this.age}", GENDER: "${this.gender}"`
// //     }
// // }

// // console.log(person.showPerson());

// // Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.

// // const students = [
// //   { name: "Anna", age: 20, gender: "female", grade: 85 },
// //   { name: "Ivan", age: 22, gender: "male", grade: 90 },
// //   { name: "Olena", age: 19, gender: "female", grade: 78 },
// //   { name: "Petro", age: 21, gender: "male", grade: 92 },
// // ];

// // function getAvverageGrade(students) {
// //     let sum = 0;
// //     let total = 0;

// //     for (let i = 0; i < students.length; i++) {
// //         sum += students[i].grade;
// //         total += 1;
// //     }

// //     return sum / total;
// // }
// // console.log(getAvverageGrade(students));


// // Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

// // const book = {
// //     title: "asda",
// //     author: "qwerty",
// //     year: 2025,
// //     genre: "Fantasy",

// //     renameBook (newTitle, newAuthor, newYear, newGenre) {
// //         this.title = newTitle;
// //         this.author = newAuthor;
// //         this.year = newYear;
// //         this.genre = newGenre;
// //     }
// // }

// // book.renameBook("qwertt", "Anton", 2000, "Horror");
// // console.log(book);


// // Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating", зробіть перевірку на змінення рейтингу, рейтинг у межах від 0 до 5.

// const restaurant = {
//   name: "La Piazza",
//   cuisine: "італійська",
//   adress: "вул. Смаколиків, 12, м. Київ",
//   rating: 4.7,

//   updateRestaraunt(newAdress, newRating) {
//     this.adress = newAdress;
//     this.rating = newRating;
//     if (newRating >= 0 && newRating <= 5) {
//         this.rating = newRating
//     } else {
//         console.log("Неправильно введений рейтинг, рейтинг можна писати з 0 до 5");
//     }
//   },


// };

// restaurant.updateRestaraunt("Хрещатик", 20);
// console.log(restaurant);

// // ========================

// restaurant.updateRestaraunt("Хрещатик", 4);
// console.log(restaurant);








// Урок 3

// const user = {
//   password: 123,
//   username: "Anttoha",
//   age: 13,
//   email: "asdasd@gmail.com",
// }

// Старий синтаксис
// for (const item in user) {
//   // console.log(item); // Назва ключа
//   // console.log(user[item]); // Значення ключа 
//   // Якщо воно буде написано так, то буде писатися у консоль так:
//   // Назва ключа
//   // Властивість ключа
//   // Назва ключа
//   // Властивість ключа
//   // І т.д.
  
//   console.log("Keys:", item);
//   console.log("Value:", user[item]);
// }


// Новий синтаксис
// const key = Object.keys(user) // Створює масив з ключами
// console.log(key);

// const value = Object.values(user) // Створює масив з властивостями ключа
// console.log(value);

// for (const item of key) { // Перебирати масив
//   console.log(item);
//   console.log(user[item]);
// }

// const entries = Object.entries(user); // Розбиває ключі у масив у масиві
// console.log(entries);

// for (const item of entries) {
//   console.log(item[0]); // 0 - Key. 1 - Value.
// }

// console.dir(Object);



// Написати функцію яка буде отримувати масив та ім’я друга якого потрібно знайти

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// // for (const item of friends) {
// //   console.log(item.name);
// //   console.log(item.online);
// // }

// const findName = (userName, array) => {
//   for (const item of array) {
//     if (item.name === userName) {
//       return `Ми знайшли вашого друга! Вашого друга звати ${userName}`;
//     }
//   }
// }

// console.log(findName("Mango", friends));
// console.log(findName('Kiwi', friends));
// console.log(findName("Poly", friends));
// console.log(findName('Ajax', friends));



// Написати функцію яка буде повертати масив всіх імен друзів

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// const findName = (array) => {
//   const newArray = [];
//   for (const item of array) {
//     newArray.push(item.name)
//   }
//   return newArray
// }

// console.log(findName(friends));


const user = {
  name: "Artem",
  age: 13,
  city: "Kiyw",
  premium: true,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const key = Object.keys(user);

for (const item of key) {
  console.log(`Ваш ключ ${item}: ${user[item]}`);
  
}

console.log(user);
console.log(key);

