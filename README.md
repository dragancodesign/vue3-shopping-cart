# Vue3 Shopping Cart


##### // → COMMAND I HAVE USED TO INSTALL Yarn GLOBALLY :  
```sudo npm install -global yarn```    
##### // → COMMAND I HAVE USED TO INSTALL Vue CLI using HomeBrew :   
```brew install vue-cli```  
First I have checked brew version:  
```brew -version```  


## Project setup

https://phoenixnap.com/kb/yarn-vs-npm  

### Initialize a project 
```yarn init``` OR ```npm init```  

```yarn install``` OR ```npm install```
### Compiles and hot-reloads for development
```yarn serve```  OR:  ```npm run serve```  
### Compiles and minifies for production
```yarn build```  OR:  ```npm run build```
### Lints and fixes files
```yarn lint``` OR: ```npm run lint```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### When the project is created then  
```npm start``` is a script that should be defined in your ```package.json``` ,  
and you will likely need to run that every time you begin local development on your project.   
 

### * *  Yarn vs NPM: A Comprehensive Comparison - November 4, 2021 * *  
https://phoenixnap.com/kb/yarn-vs-npm  

Check for outdated packages:  	
    npm outdated	-   yarn outdated  
Publish a package:  
	npm publish 	-   yarn publish  
Run a script:  
	npm run   -   yarn run  
Manage local package cache:  
	npm cache clean	-   yarn cache clean  
Log in or out:
	npm login/logout    -	yarn login/logout  
Install dependencies:  
	npm install	-   yarn  
Install packages:  
	npm install [package name]   -	yarn add [package name]  
Uninstall packages:  
	npm uninstall [package name]    -	yarn remove [package name]  
Update manager:  
	npm update	-   yarn upgrade  
Update packages:  
	npm update [package name]   -	yarn upgrade [package name]  
Install packages globally:  
	npm install --global [package name]  -	yarn global add [package name]  
Uninstall packages globally:
	npm uninstall --global [package name]   -	yarn global remove [package name]  


## 1. STARTING THE PROJECT :  

To start the project inside the project folder:  
```
yarn install  
vue create vue3-shopping-cart  
cd vue3-shopping-cart  
npm i ( → to install dependencies from package.json )
yarn serve  
```

### GitHub Commands used :  

```
git init  
touch .gitignore 
```
- Inside the .gitignore file put:  
```
.DS_Store
node_modules
/dist
.history
```
*To connect to the repository:* 
```
git remote add origin https://github.com/dragancodesign/vue3-shopping-cart.git
git branch -M 'main' OR: git branch -M main
git push -u origin 'main'

git add .  
git status  
git commit -m "Commit 01: Initial commit"  
git status  
git push -u origin main
```
### *To check on which GitHub repository URL I am now? It shows me the link:*   
```git remote -v``` The output is:  
```
origin  https://github.com/dragancodesign/vue3-shopping-cart.git (fetch)
origin  https://github.com/dragancodesign/vue3-shopping-cart.git (push)
```

* * * 
git push origin HEAD --force  
git reset --hard HEAD^  -> maybe did not work  
git reset --hard HEAD  
git reset --hard HEAD~2  
git push --force origin main ( check what is this )


git remote set-url https://github.com/dragancodesign/vue3-shopping-cart.git  
git remote --verbose  
git pull https://github.com/dragancodesign/vue3-shopping-cart.git  
git config pull.ff only

git remote set-url origin https://github.com/dragancodesign/vue3-shopping-cart.git  

* To audit / revert repository / branch : 
``` 
git branch // → Shows us on which branch we are? On main?     
git diff  
git log  
npm audit fix --force  
npm run serve ( When using npm )  
```

- To install AXIOS:    
```npm install --save axios vue-axios``` OR: ```npm i vue-axios```
```
npm init  
npm init vue@  
npm init vue@latest  
npm run lint  
npm run dev  
npm install vue-draggable-next  

yarn init  
git remote show origin  
git config --get remote.origin.url  
git config user.email  
git config user.name  
yarn --version  
yarn  
```
## - WORKING IN PROJECT: 
#### Navigation set up in App.vue file - To add New page : 
1. Create page in ```src/views/BasketView.vue``` :  
```html
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/basket">Basket</router-link> <!-- // Add this -->
  </div>
  <router-view/>
</template>
```
2. Add Basket page in ```src/router/index.js``` :  
```js 
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView.vue' // Add this 

const routes = [ 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    ........
  {                     // Add this block of code 
    path: '/basket',
    name: 'Basket',
    component: BasketView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
#### Updated products API calls in src/App.vue file :  
documentation for Fake Store API is on:  
https://fakestoreapi.com/docs  
Added links to https://fakestoreapi.com/products to source the images in 'template' and to return data in 'script'  
```js 
<script>
import axios from 'axios'
export default {
  created() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => { 
        console.log(response.data);
        }) 
      } 
}
</script>
``` 
#### In views/HomeView.vue file call images :  
```html
<template>
  <div class="home">

  <h1>E-Shop</h1>
    <div class="products">

      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');"></div>
        <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        <p class="price"> € 55.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg');"></div>
        <h4>Mens Casual Premium Slim Fit T-Shirts </h4>
        <p class="price">€ 22.30</p>
        <button>Add to Cart</button>
      </div>
      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');"></div>
        <h4>Mens Cotton Jacket</h4>
        <p class="price">€ 109.95</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      products: this.$store.state.products      
    }
  },

  methods: {
   
  }
}
</script>
```

### Setting up ACTIONS & MUTATIONS  + Dispatch - commit EXPLANATION

WARNING HERE ! ! ! Please note that data properties are not supposed to receive data from the store, this is just an example. As I'll explain in the next videos, we should use computed properties instead.  
The state in Vuex can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced featrues such as zero-config time-gravel debugging and state snapshot export / import.  
**"State - View - Actions" => IMPORTANT CIRCLE ! ! !**
 4. Vuex & Vue Router -> 
 39. Setting Up Actions and Mutations - Part 1 (2:06)  => GREAT EXPLANATION 
NOW HERE :  
Let's create the Action that will be callable from the View Component.  
So let's go to the star config file. And here we have the object for the actions and this is what we can call from any component. So let's create a new action here called Load Product. So this is just like a method, so we can't do it like this and now we can do this in two ways, we can call the API from the App.vue and then just send the data to the action.  
But I think it's better to actually call the API from the action because since all the components and views of our application, we have access to the actions.  
Invoke Dispatch - Dispatching Actions .   
**We have to send from the Component to the Action, we have an extra step here: from the Action we have to call Mutation. We have an extra step here because the Mutations are synchronous and Actions are asynchronous.**  

```js 
Actions & Mutations

      mutations: {
        loadProducts(state, products) {
          state.products = products
        }
      },
      actions: {
        loadProducts({ commit }) {
          axios
          .get('https://fakestoreapi.com/products')
          .then(response => { 
            commit('loadProducts', response.data);
            }) 
        }
      },
```
WHEN WE USE dispatch we are calling the ACTION, When we use commit we are USING MUTATION, we can have the Mutation with the same name. When we do Mutation: the 1st argument is always the state & the 2nd argument is the DATA we want to change and here is the data we want to change what is here the product. 



### Section 4. Vuex & Vue Router
40. Setting Up Actions and Mutations - Part 2

Now that we have populated the actions & mutations we can have an empty array here in state
FROM:
```js
    state: {
        products: [1,2,3]
      },
```
NOW WE HAVE:
```js
    state: {
        products: []
      },
```
* To see if we are actually getting the products we can add console.log :
```js 
  mutations: {
    loadProducts(state, products) {
      console.log(products); // ADD THIS TO SEE IF WE ARE GETTING THE PRODUCTS 
      state.products = products;
    }
  },
```

- You will see that we used a data property to get this information from the store, but the problem here is that when we had static data that was there since the beginning, we didn't have any problem by doing this. But now that the data is being changed, we can't use data properties because every time the store changes, Vue.js needs to re-evaluate the value.  
- So you see that we actually need to do this in a computed property, so the way we do this is very similar. But instead of doing this in a data property, we need to use a computed property.  
   ```!!! CHECK THIS IS !!! NEW !!! use Pinia: https://vuejs.org/guide/scaling-up/state-management.html#pinia   ```

**Inside the HomeView.vue**  

```js 
<script>

export default {
  name: 'HomeView',
  data() {
    return {
      // products: this.$store.state.products    
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>
```

But every time you have doubts about this, just go back to the documentation and take a look at this  diagram. OK, so what we've done is exactly what is being explained here in the component. 
In the main component, we are calling an action when we create the component, which is called load product.  
So we are using the dispatch method to call this action. Then what this action is doing is loading the data from the API and calling a mutation. And we use the commit method to call a mutation and then the mutation is going to alter the state and once the state is altered, the components that use the state are going to be updated. This is why we are seeing the products in the dev tools in that computer property. OK, so this is exactly what is drawn here. So even though we have some extra steps to make this work, this is actually pretty simple.

## BUILDING THE FUNCTIONALITY OF THE PAGE (Add to cart, etc. ... )  

**Section 4. Vuex & Vue Router**  
*41. Rendering the Products*

*NOW STARTS THE FUN PART: Building the functionality of the page* 
- In HomeView.vue file: 
```html
  <h1>E-Shop</h1>
    <div class="products">

      <div
        v-for="(product, index) in this.products" :key="index" 
        class="product">
        <div class="product-image" :style="{backgroundImage: 'url(' + product.image + ')'}"></div>
        <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4> // !!! Since it's HTML element we can put it inside the curly braces.
        <p class="price"> € 55.99</p>
        <button>Add to Cart</button>
      </div>

    </div>
```

#### Adding Products to Bag 

To add the products to Bag (Cart) we have to create a new STATE in our store. We have to add another array. If we have only a few products then it's to just add a property to them and set it to True. But it's not the best solution because it is not scalable ! The best way to do that is to have a different state for the Products that are in Bag.  


