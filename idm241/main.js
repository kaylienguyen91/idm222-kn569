const searchButton = document.querySelector('.searchButton');
const searchTerm = document.querySelector('.searchTerm');

 
function searchAnim() {
    if (searchTerm.classList.contains('searchExpand')) {
        searchTerm.classList.remove('searchExpand');
    } else {
        searchTerm.classList.add('searchExpand');
        // searchTerm.setAttribute('autofocus', '');
    }
}