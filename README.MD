# REST Clothing Shop

### How to install
1. Set configuration at .env. U can use (.env.exampe) and remove .example 
2. Open terminal / command prompt
3. Type 'git install' on command prompt / terminal
4. Type 'npm start'
5. Use postman for see data

### ENDPOINT BRANCH
1. /branchs for get data branchs or post
2. /branchs/:id for get branch data by id or delete, patch(update)

### ENDPOINT TYPE
1. /types for get data types or post
2. /types/:id for get type data by id or delete, patch(update)

### ENDPOINT PRODUCTS
1. /products for get data products or post
2. /products/:id for delete, patch(update)
3. /products/:name for get products data by name
4. /products/branch/:name for get products data by branch
5. /products/type/:name for get products data by type
6. /products/qty/:qty for get products data by quantitity(qty)
7. /products/page/:page for get products data by page/limit per page with 5 data
