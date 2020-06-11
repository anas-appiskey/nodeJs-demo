const url = require('url');

const myUrl = new URL(
    'http://anasali.com:8080/hello.html?id=100&status=active'
)
console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc','123');
console.log("updated ---",myUrl.searchParams);

myUrl.searchParams.forEach((value,name)=>console.log(`${name} : ${value}`));
