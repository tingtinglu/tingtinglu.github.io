
var books;
//using AJAX
//$.get("./data/books.json", function (data, status) {
//    if (status == 'success') {
//        books = data;
//        $("#bookGrid").append("<table id='gridBooks'>");
//        $("#listBookName").append('<option></option>');
//        $("#gridBooks").append("<tr><th>Book Name (link to amazon.com)</th><th>Author Name</th><th>Description</th></tr>");
//        for (var i in books) {
//            $("#gridBooks").append("<tr><td width='250'><a title='click me! n_n' href=http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=" + books[i].BookName.replace(/ /g, "%20") + ">" + books[i].BookName + "</a></td><td width='150'><i>by </i> " + books[i].AuthorName + "</td><td>" + books[i].Description + "</td></tr>");
//            $("#listBookName").append('<option value="' + i + '">' + books[i].BookName + '</option>');
//        }
//        $("#bookGrid").append("</table>");
//    }
//});
//usingJSON
//$(document).ready(function () {
//    var bookJson = '[{"AuthorName":"Wayne Rooney","BookName":"My Decade In The Premier League","Description":"My Decade In The Premier League is an internal story of a star footballer written by himself, describing his journey from his debut and to being a celebrated player."},{"AuthorName":"J. K ROWLING","BookName":"Harry Potter","Description":"J. K. Rowling\u0027s Harry Potter series was a book-selling phenomenon. The story of a boy wizard, orphaned by the deeds of a dark wizard, and his friends as they find themselves pitted repeatedly against evil."},{"AuthorName":"Stephenie Meyer","BookName":"Twilight","Description":"Twilight, the first novel in the Twilight series, narrates the story of seventeen-year-old Bella Swan whose life takes a dangerous turn when she falls in love with a vampire named Edward Cullen."}]';

//    $("#bookGrid").append("<table id='gridBooks'>");
//    $("#listBookName").append('<option></option>');
//    $("#gridBooks").append("<tr><th>Book Name (link to amazon.com)</th><th>Author Name</th><th>Description</th></tr>");
//    books = JSON.parse(bookJson);
//    for (var i in books) {
//        $("#gridBooks").append("<tr><td width='250'><a title='click me! n_n' href=http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=" + books[i].BookName.replace(/ /g, "%20") + ">" + books[i].BookName + "</a></td><td width='150'><i>by </i> " + books[i].AuthorName + "</td><td>" + books[i].Description + "</td></tr>");
//        $("#listBookName").append('<option value="' + i + '">' + books[i].BookName + '</option>');
//    }
//    $("#bookGrid").append("</table>");
//});
//usingArray
function loadbooks(){
books = [{ "AuthorName": "Wayne Rooney", "BookName": "My Decade In The Premier League", "Description": "My Decade In The Premier League is an internal story of a star footballer written by himself, describing his journey from his debut and to being a celebrated player." }, { "AuthorName": "J. K ROWLING", "BookName": "Harry Potter", "Description": "J. K. Rowling\u0027s Harry Potter series was a book-selling phenomenon. The story of a boy wizard, orphaned by the deeds of a dark wizard, and his friends as they find themselves pitted repeatedly against evil." }, { "AuthorName": "Stephenie Meyer", "BookName": "Twilight", "Description": "Twilight, the first novel in the Twilight series, narrates the story of seventeen-year-old Bella Swan whose life takes a dangerous turn when she falls in love with a vampire named Edward Cullen." }];
bookGrid.innerHTML += "<table id='gridBooks'></table>";
listBookName.innerHTML += '<option></option>';
gridBooks.innerHTML += "<tr><th>Book Name (link to amazon.com)</th><th>Author Name</th><th>Description</th></tr>";
for (var i in books) {
    gridBooks.innerHTML += "<tr><td width='250'><a title='click me! n_n' href=http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=" + books[i].BookName.replace(/ /g, "%20") + ">" + books[i].BookName + "</a></td><td width='150'><i>by </i> " + books[i].AuthorName + "</td><td>" + books[i].Description + "</td></tr>";
    listBookName.innerHTML+='<option value="' + i + '">' + books[i].BookName + '</option>';
}}
function retrieve() {
    var blankPattern = /^\s*$/;
    var letterBeginPattern = /^[a-zA-Z]+/;
    var letterEndPattern = /^[a-zA-Z]+/;
    var author = txtAuthorName.value;
    var id = listBookName.value;
    txtDescription.value='';
    if (!id) {
        reBookName.classList.remove("hidden");
    }
    else { reBookName.classList.add('hidden'); }
    if (blankPattern.test(author)) {
        reWrongAuthorName.classList.add('hidden');
        reBlankAuthorName.classList.remove('hidden');
    }
    else {
        reBlankAuthorName.classList.add('hidden');
        if (!(letterBeginPattern.test(author) && letterEndPattern.test(author))) {
            reWrongAuthorName.classList.remove('hidden');
        } else {
            reWrongAuthorName.classList.add('hidden');
        }
    }
    if (author.toLowerCase() == books[id].AuthorName.toLowerCase()) {
        txtDescription.value=(books[id].Description);
    }
}
function reload(name){
	$("#main-context").load(name);	
}