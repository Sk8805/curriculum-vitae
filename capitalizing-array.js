let b="hellow world"
let c=b.split(" ")
console.log(c)
let l=c.length
for(let i=0;i<l;i++)
    c[i]=c[i][0].toUpperCase()+c[i].slice(1)
console.log(c)
for(let i=0;i<l;i++)
    console.log(c[i])
console.log(c.join(" "))