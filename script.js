let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

for(let i=0;i<object.length;i++){
    console.log(`
    Person : ${object[i].person}
    Age :${object[i].age}
    Company :${object[i].company}
    `)
}

console.log("For in format") 
for (const i in object){
    console.log(`
    Name : ${object[i].person} , Age :${object[i].age}, Company :${object[i].company}
    `)
}

console.log("For of format") 
for(const i of object){
    console.log(`
    Employee : ${i.person},     Age :${i.age},  Employer :${i.company}
    `)
}

console.log("ForEach format")
object.forEach(element => {
    console.log(`
    Employee : ${element.person}
      Age :${element.age}
       Employer :${element.company}
    `)
});