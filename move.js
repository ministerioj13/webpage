const lista=document.getElementById('lista');

Sortable.create(lista, {
  animation: 150,
  chosenClass: "select",
  dragClass: "drag",
  onEnd: () =>{
    console.log('Se inserto un elemento');
  },
  group: "list-tags",
  store: {
    //Funcion para guardar los elementos
    set: (sortable) => {
      const: orden = sortable.toArray();
      //console.log(orden);
      localStorage.setItem(sortable.options.group.name, orden.join('-'));
    },
    //Obtenemos el orden de la lista
    get: (sortable) => {
      const orden = localStorage.getItem('list-tags');
      //console.log(orden);
      return orden ? orden.split('-') : [];
    }
  }
});
