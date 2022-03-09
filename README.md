# E-COMMERCE API WITH ONION ARCHITECTURE

### DB SCHEME
![db_scheme](https://user-images.githubusercontent.com/34316987/157526805-784fe272-d66f-4089-9215-e8333f62f53d.png)

### Routes
<details>
 <summary><b>Customer</b>: </summary>
<br>
  
Create\
POST:http://localhost:3000/api/customers
<br/>
Body Example:
{
    "firstName":"Salih Bora",
    "lastName":"Öztürk",
    "email":"osalihbora@gmail.com",
    "password":"123456"
}

GetById\
GET:http://localhost:3000/api/customers/1

GetAll\
GET:http://localhost:3000/api/customers

Update\
PUT:http://localhost:3000/api/customers/1
<br/>
Body Example:
{
    "id":1,
    "firstName":"Salih Bora",
    "lastName":"Öztürk",
    "email":"osalihbora@gmail.com",
    "password":"123456"
}

Delete\
DELETE:http://localhost:3000/api/customers/1

</details>

<details>
 <summary><b>Product</b>: </summary>
<br>
  
Create\
POST:http://localhost:3000/api/customers
<br/>
Body Example:
{
    "firstName":"Salih Bora",
    "lastName":"Öztürk",
    "email":"osalihbora@gmail.com",
    "password":"123456"
}

GetById\
GET:http://localhost:3000/api/customers/1

GetAll\
GET:http://localhost:3000/api/customers

Update\
PUT:http://localhost:3000/api/customers/1
<br/>
Body Example:
{
    "id":1,
    "firstName":"Salih Bora",
    "lastName":"Öztürk",
    "email":"osalihbora@gmail.com",
    "password":"123456"
}

Delete\
DELETE:http://localhost:3000/api/customers/1

</details>


<details>
 <summary><b>Order</b>: </summary>
<br>
  
Create\
POST:http://localhost:3000/api/orders
<br/>
Body Example:
{
    "customerId": 1,
    "description": "hızlı kargolarsanız sevinirim.",
    "address": "x caddesi mahallesi c sokak no:1 daire:1 Fatih/Istanbul"
}

GetById\
GET:http://localhost:3000/api/orders/1

GetAll\
GET:http://localhost:3000/api/orders

Update\
PUT:http://localhost:3000/api/orders/1
<br/>
Body Example:
{
    "id":1,
    "customerId": 1,
    "description": "hızlı kargolarsanız sevinirim.",
    "address": "x caddesi mahallesi c sokak no:1 daire:2 Fatih/Istanbul"
}

Delete\
DELETE:http://localhost:3000/api/orders/1

</details>

<details>
 <summary><b>ProductOrder</b>: </summary>
<br>
  
Create\
POST:http://localhost:3000/api/productOrders
<br/>
Body Example:
{
      "productId": 3,
      "orderId": 1
}

GetById\
GET:http://localhost:3000/api/productOrders/1

GetAll\
GET:http://localhost:3000/api/productOrders

Update\
PUT:http://localhost:3000/api/productOrders/1
<br/>
Body Example:
{
     "id": 11,
     "productId": 3,
     "orderId": 1
}

Delete\
DELETE:http://localhost:3000/api/productOrders/1

AddProducts\
POST:http://localhost:3000/api/productOrder/addProducts
<br/>
Body Example:
[
    {
        "productId": 3,
        "orderId": 2
    },
    {
        "productId": 3,
        "orderId": 2
    }
]

GetByOrderId\
GET:http://localhost:3000/api/productOrders/getByOrderId/1

</details>







