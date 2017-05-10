// JQuery equivalent of addEventListener "DOMContentLoaded"
var DOMContentLoaded = function () {
    // JQuery equivalent of document.querySelector
    console.log('DOMContentLoaded');
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
};

$(DOMContentLoaded);

(function (global) {
    var dc = {};

    var homeHtml = "snippets/home-snippet.html";
    var allCategoriesUrl = "/data/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";
    var menuItemsUrl = "http://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var menuItemsTitleHtml = "snippets/menu-items-title.html";
    var menuItemHtml = "snippets/menu-item.html";

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'>";
        html += "</div>";
        insertHtml(selector, html);
    }

    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };

    document.addEventListener("DOMContentLoaded", function (event) {
        showLoading("#main-content");

        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            insertHtml("#main-content", responseText);
        });
    });

    dc.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(allCategoriesUrl,
            buildAndShowCategoriesHTML, true);
    };

    function buildAndShowCategoriesHTML (categories) {
        $ajaxUtils.sendGetRequest(categoriesTitleHtml,
        function (categoriesTitleHtml) {
            $ajaxUtils.sendGetRequest(categoryHtml,
            function (categoryHtml) {
                var categoriesViewHtml = buildCategoriesViewHtml(categories,
                    categoriesTitleHtml, categoryHtml);
                insertHtml("#main-content", categoriesViewHtml);
                switchMenuToActive();
            });
        });
    };

    function buildCategoriesViewHtml (categories, categoriesTitleHtml,
            categoryHtml) {
        var body = categoriesTitleHtml;
        body += "<section class='row'>";
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            var html = categoryHtml;
            html = insertProperty(html, "short_name", category.short_name);
            html = insertProperty(html, "name", category.name);
            body += html;
        }
        body += "</section>";
        return body;
    };

    dc.loadMenuItems = function (categoryShort) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(menuItemsUrl + categoryShort,
        buildAndShowMenuItemsHTML, true);
    };

    function buildAndShowMenuItemsHTML (obj) {
        var menu_items = obj.menu_items;
        var category = obj.category;

        $ajaxUtils.sendGetRequest(menuItemsTitleHtml,
        function (MenuItemsTitleHtml) {
            $ajaxUtils.sendGetRequest(menuItemHtml,
            function (menuItemHtml) {
                var menuItemsViewHtml = buildMenuItemsViewHtml(category,
                    menu_items, MenuItemsTitleHtml, menuItemHtml);
                insertHtml("#main-content", menuItemsViewHtml);
                switchMenuToActive();
            });
        });
    };

    function buildMenuItemsViewHtml (category, menu_items,
    MenuItemsTitleHtml, menuItemHtml) {
        console.log('Category', category);
        console.log('Items', menu_items);
        var body = MenuItemsTitleHtml;
        body = insertProperty(body, "name", category.name);
        body = insertProperty(body, "special_instructions",
            category.special_instructions);

        for (var i = 0; i < menu_items.length; i++) {
            var item = menu_items[i];
            var html = menuItemHtml;
            html = insertProperty(html, "category_name", category.short_name);
            html = insertProperty(html, "short_name", item.short_name);
            html = insertProperty(html, "name", item.name);
            html = insertProperty(html, "description", item.description);

            html = insertProperty(html, "small_portion_name",
                item.small_portion_name ? item.small_portion_name : '');
            html = insertProperty(html, "price_small",
                item.price_small ? ('$' + item.price_small.toFixed(2)) : '');
            html = insertProperty(html, "large_portion_name",
                item.large_portion_name ? item.large_portion_name : '');
            html = insertProperty(html, "price_large",
                item.price_large ? ('$' + item.price_large.toFixed(2)) : '');

            if (i % 2 !== 0) {
                html += "<div class='clearfix visible-lg-block visible-md-block'></div>";
            }

            body += html;
        }

        body += "<section class='row'>";
        body += "</section>";
        return body;
    };

    var switchMenuToActive = function () {
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;

        var classes = document.querySelector("#navMenuButton").className;
        if (classes.indexOf("active") === -1) {
            classes += " active";
            document.querySelector("#navMenuButton").className = classes;
        }
    };

    global.$dc = dc;

})(window);
