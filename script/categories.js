let categories = document.body.getElementsByClassName('categories')[0];

for( i=0; i<data_categories.length; i++ ){
    categories.innerHTML += `<a href="#">${data_categories[i]}</a>`
}