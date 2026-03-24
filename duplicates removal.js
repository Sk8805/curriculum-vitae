arr2=[1,2,3,1,2,3,4,5,6]
a=arr2.length
arr3=[]
for(let i=0;i<=a;i++)
{
    if(arr3.includes(arr2[i])==false)
        arr3.push(arr2[i])
}
console.log(arr3)