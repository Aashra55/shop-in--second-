//search bar
const search = () =>{
    const searchBox = document.getElementById('searchBar').value.toUpperCase();
    const storeItems = document.getElementById('images');
    const product = document.querySelectorAll('.images');
    const productName = storeItems.getElementsByTagName('h1');
    
    for (var i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h1')[0];

        if(match) {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox)>-1){
                product[i].style.display = "";
            }else {
                product[i].style.display = "none";
            }
        }
    }
}
