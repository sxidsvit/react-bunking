### Задание

![Картинка](./public/db.json.jpg)

Объект deviceTree содержит дерево устройство, которое нужно отобразить в пользовательском интерфейсе.

Некоторые элементы иерархии должны иметь возможность редактировать данные поля.

Структура deviceTreeTypeMap повторяет иерархию некоторых элементов deviceTree с указанием типов для конечных нод.

В примере имеется только тип number, присутствие данного типа должно указывать на то, что поле должно быть редактируемо, тип данных number(целочисленное значение)

---

### Реализация

![Картинка](./public/demo.gif)

---

======================================

# RACT-ADMIN

Устанавливаем JSON-server: get a full fake REST API with zero coding

```js
npm i json-server
npm i concurrently
```

package.json

```js
"proxy": "http://localhost:5000",

"start": "react-scripts start",

"server": "json-server --watcdb-json-server.json --port 5000",

"dev": "concurrently \"npm run start\" \"npm run server\" ",
```
