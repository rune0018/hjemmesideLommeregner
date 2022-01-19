﻿const TopMenubarDivIDName = "TopMenuBarContent";
const TopMenuBarHTMLPage = window.location.origin + "/Topmenu/TopMenuBar.html";
const StartupPage = "/Index.html";

var TopMenuBarContent = $("#" + TopMenubarDivIDName);
var MenuCurrentItemCSSClassName = "MenuCurrentItem";

var CheckForDropDownClassName = "dropdown-content";
var MenuCurrentItemParentCSSClassName = "MenuCurrentItemParent";

function CheckIfTopMenuDivExistElseCreateItAndInsert() {
    if (0 == TopMenuBarContent.length) {
        var TopmenuBarContentCreate = document.createElement('div');
        TopmenuBarContentCreate.id = TopMenubarDivIDName;

        $('body')[0].prepend(TopmenuBarContentCreate);
        TopMenuBarContent = $("#" + TopMenubarDivIDName);
    }
}

async function LoadTopMenuContent(Content) {
    const Response = await fetch(Content);
    return await Response.text();
}

async function LoadTopMenu() {
    const TopMenuBarDiv = document.getElementById(TopMenubarDivIDName);
    TopMenuBarDiv.innerHTML = await LoadTopMenuContent(TopMenuBarHTMLPage);
}

function FindCurrentPage() {
    var CurrentURL = document.location.href;
    var OriginURL = window.location.origin;
    var test = window.location.href;
    var test1 = window.location.pathname;
}

function MakeTopMenuBar() {
    CheckIfTopMenuDivExistElseCreateItAndInsert();

    //TopMenuBarContent.load(TopMenuBarHTMLPage); 
    LoadTopMenu();

    var CurrentPage;

    try {
        //FindCurrentPage();
        //CurrentPage = document.location.href.match(/[^\/]+$/)[0];
        CurrentPage = window.location.pathname;
    }
    catch (err) {
        CurrentPage = StartupPage;
    }
    finally {
        setTimeout(function () {
            PageLoadTimeOut(CurrentPage);
        }, 200);
    }
}

function PageLoadTimeOut(CurrentPageInfo) {
    $("> ul li", TopMenuBarContent).find('a').each(function () {
        if ($(this).attr('href').toLowerCase() == CurrentPageInfo.toLowerCase()) {
            $(this).addClass(MenuCurrentItemCSSClassName);
            if ($(this).parent().hasClass(CheckForDropDownClassName)) {
                $(this).parent().prev().addClass(MenuCurrentItemParentCSSClassName);
            }
        }
    });
}