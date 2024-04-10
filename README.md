## Locally Server Setup Steps
1. Download the code from this repository - > https://github.com/anujshrivastav594/KoinX-Task
2. In command line , type "npm install" to install the all required libraries mentioned in package.json file.
3. type "npm start" to run this backend on port 8800 -> and the server will start running on "http://localhost:8800"

## Alternative: I deployed this Backend code on free plan of Render cloud platform.

## **Task 1:**

1. Get the names and ids of all cryptocurrencies and store it in a MongoDB database.

**Solution:** in the first API ("http://localhost:8800/api/task1/getAllCrypto  ") I fetch the ids, name and symbol of all cryptocurrencies and store it in variable , and in second API ("http://localhost:8800/api/task1/postAllCrypto") through post method, I post the all ids and names (excluding symbol) on mongoDB Atlas.
#### Get API -> http://localhost:8800/api/task1/getAllCrypto      or     https://koinx-task-xb4d.onrender.com/api/task1/getAllCrypto


![image](https://github.com/anujshrivastav594/KoinX-Task/assets/122456123/f899f979-3062-4316-a823-0d97ca0e6381)


#### Post API -> http://localhost:8800/api/task1/postAllCrypto     or     https://koinx-task-xb4d.onrender.com/api/task1/postAllCrypto





## **Task 2:**

Build an API that takes the Coingecko IDs of 2 cryptocurrencies and returns the price of one currency in another on a particular date.
Schema of the API:
Request example:
{
	“fromCurrency”: "0xcoco",
	“toCurrency”: "eth",
	"date": "12-01-2023"
}


#### Post API -> http://localhost:8800/api/task2/priceConvert     or     https://koinx-task-xb4d.onrender.com/api/task2/priceConvert
{
	“fromCurrency”: "0xcoco",
	“toCurrency”: "eth",
	"date": "12-01-2023"
}
#### Below is the screenshot attached of the fetched results through the above API in post,an through POST method


![Screenshot 2024-04-10 135635](https://github.com/anujshrivastav594/KoinX-Task/assets/122456123/ee924def-9b54-42c0-8954-354539907464)





## **Task 3:**

Integrate Coingecko’s /companies/public_treasury API to get the list of companies that hold a particular cryptocurrency.
Schema of the API:
Request example:
{
	"currency": "bitcoin" 
}

#### Post API -> http://localhost:8800/api/task3/companies      or    https://koinx-task-xb4d.onrender.com/api/task3/companies
	"currency": "bitcoin"
}

#### Below is the screenshot attached of the fetched results through the above API in post,an through POST method
![Screenshot 2024-04-10 142409](https://github.com/anujshrivastav594/KoinX-Task/assets/122456123/00ef3531-bd2f-4bd6-851e-ca738598beae)



