//require('cypress-xpath');

export class helperFunctions{

static getURL(env) {
   let url;
   if(env=='qa'){
        url = 'https://civey.com/'
   } 
   return url;
}

}