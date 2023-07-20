// Nesse arquivo, resolvi juntar tudo que estudei até aqui para simular um CRUD apenas com Vanilha JS.

let person  =[ 
    {
        id:1,
        name: 'John',
        age: 21,
        altura: 1.77
    },

    {
        id:2,
        name: 'Paulo',
        age: 23,
        altura: 1.80 
    }

]

function listarPersonAll(list){
    list.forEach(element => {
        console.log(element)
    });
}

function create(name, age, altura){
    const idLeght = person.length
    person.push({id: idLeght + 1,name:name, age:age, altura:altura})
}

function deletePerson(id){
    const idPerson = person.findIndex(person => person.id === id);
    person.splice(idPerson, 1)// o metodo splice recebe  o argumetno  com o indice do elemento e quandot serão removidor començado apartir dali. 
}

function updatePerson(id, name, age, altura){
    
    const idPerson = person.findIndex(person => person.id === id);

    if (idPerson === -1) {
        console.log(`O id ${id} não foi encontrado`);
        return;
      }
    person[idPerson] ={
        ...person[idPerson],
        name,
        age,
        altura,
    }
}

create('Naruto', 15, 1.23)
create('Fulano', 10, 1.72)



deletePerson(4)

updatePerson(4,'João', 15, 1.23)

listarPersonAll(person)

