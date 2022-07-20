# Vue3 Shopping Cart


##### // → COMMAND I HAVE USED TO INSTALL Yarn GLOBALLY :  
```sudo npm install -global yarn```    
##### // → COMMAND I HAVE USED TO INSTALL Vue CLI using HomeBrew :   
```brew install vue-cli```  
First I have checked brew version:  
```brew -version```  


## Project setup
```yarn install``` OR ```npm init```
### Compiles and hot-reloads for development
```yarn serve```  OR:  ```npm run serve```  
### Compiles and minifies for production
```yarn build```  OR:  ```npm run build```
### Lints and fixes files
```yarn lint``` OR: ```npm run lint```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

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
git branch // → Shows us on which branch we are? On main?     
git diff  
git log  
npm audit fix --force  
npm run serve ( When using npm )  
```


- To install axios:  
```npm install --save axios vue-axios``` OR: ```npm i vue-axios```


npm init  
npm init vue@  
npm init vue@latest  
npm run lint  
npm run dev  
npm install vue-draggable-next  


??? 
yarn init  
git remote show origin  
git config --get remote.origin.url  
git config user.email  
git config user.name  
yarn --version  
yarn  
```vue --version```  


## - VueForge School Project based on Trello App instructions :-)  

// eslint --init  - NOT NOW ???  
npm install  
npm run dev  
cd /Users/codedev/Dev_Vue/trello-vue-forge  
node "/Users/codedev/.vscode/extensions/vue.volar-0.38.5-darwin-x64/dist/preview-bin/vite.js" --port=3333  
touch package.json  // → if it's complaining there is no package.json file  
npm list -g --depth=0  
npm init vue@latest
cd trello-vue-forge  
git init  
npm init  
git clone https://github.com/vueschool/vuejs-forge-the-project.git 
