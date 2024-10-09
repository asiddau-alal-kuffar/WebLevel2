var conP = [
    { name: "In-camera shot of Fushimi Inari", Image: "https://images.unsplash.com/photo-1693176257987-5edc35e6a95c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Yasaka shrine", Image: "https://images.unsplash.com/photo-1697873515242-8a75c68cd34a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Winter is coming!", Image: "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/461786026_1079918087099054_680157670733805187_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KQ6ChF3yXeQQ7kNvgFoqkdX&_nc_ht=scontent.fdac90-1.fna&_nc_gid=AFqG59-VCi7IGPF-kfG3EeT&oh=00_AYAtwUsP7pPndkUgMqtZnFpKDC5IM9_K-H-kq8y2h62eBw&oe=6706C916" },
    { name: "Reflecting on the fast lane of life", Image: "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/461319465_1077067770717419_8815610455587427354_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L3fG-4zoONoQ7kNvgF-T0-P&_nc_ht=scontent.fdac90-1.fna&_nc_gid=AFqG59-VCi7IGPF-kfG3EeT&oh=00_AYDpTSbl5S4UKXQuzdjGZkUXZa4kZZLUsC2wIi5zFwDncw&oe=6706C6B9" },
    { name: "Nantong University football stadium", Image: "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/461253726_1074804384277091_7739071436813299039_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g6cg6IgkUOUQ7kNvgH9Krvn&_nc_ht=scontent.fdac90-1.fna&_nc_gid=Aug74wEEpTc22Oni0GiGbSW&oh=00_AYAjVJXmNb_JJ8LRBA9WKbIDxLqqnXjWP4ZC_u94cd518w&oe=6706B802" },
    { name: "Ch", Image: "https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/461398420_1076346414122888_6251899871817836536_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q4qx6S0lXzoQ7kNvgHqwUYo&_nc_ht=scontent.fdac90-1.fna&_nc_gid=ABnqZ-G8JScI1dui45JTsk7&oh=00_AYAl2qRM7iI_n4WoNReDqnJTs8ebqofGi-arWb8r0XEfyg&oe=6706AFB3" }
]

function ImageShow() {
    var addImage = "";
    conP.forEach(function (obj) {
        addImage += `<div class="box" style="background-image: url(${obj.Image})"></div>`;
    })

    document.querySelector("#page1")
        .innerHTML = addImage;
}

function SearchImageShow() {
    var addImage = "";
    conP.forEach(function (obj) {
        addImage += `<div id="ImgBox" style="background-image: url(${obj.Image})"></div>`;
    })
    var SearchImgBox = document.querySelector("#SearchImgBox");
    SearchImgBox.innerHTML = addImage;
}

function SearchH() {
    var SearchList1 = document.querySelector("#SearchList");
    SearchInput = document.querySelector("#SearchInput");
    SearchInput.addEventListener("focus", function () {
        var page1 = document.querySelector("#page1");
        page1.style.opacity = 0.70;


        var SearchList = document.querySelector("#SearchList")
        SearchList.innerHTML = `<span>Explore Food and drink articles</span>
        <div id="SearchImgBox"></div>`;
        SearchList.style.backgroundColor = "white";

        SearchImageShow();
    })

    SearchInput.addEventListener("blur", function () {
        page1.style.opacity = 2;

        SearchList1.innerHTML = ``;
        SearchList1.style = `z-index: 1;`;

    })

    SearchInput.addEventListener("input",function () {
        const filteredArray = conP.filter(obj => obj.name.toLowerCase().startsWith(SearchInput.value));
        var SearchWord = "";
        conP.forEach(function (obj) {
            SearchWord += `<div id="SearchBoxList"><a href="#"><i class="ri-search-eye-line"></i>  ${obj.name}</a></div>`;
        })
        
        SearchList1.innerHTML = SearchWord;

        
    })

}

SearchH();
ImageShow();
