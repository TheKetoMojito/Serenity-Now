var tab_link_color;

function bindHTMLActions() {
	inactive_tab_links = $(".settings-tab").not(".active").children();
	inactive_tab_links_color = inactive_tab_links.css("background-color");

	$(".settings-tab-link").on("mouseover",function (){
        if ($(this).closest("li").hasClass("active")) {
        	$(this).css("background-color","white");
        } else {
        	$(this).css("background-color","rgb(250,250,250)");
        }
    });
    $(".settings-tab-link").on("mouseout",function (){
        if ($(this).closest("li").hasClass("active")) {
        	$(this).css("background-color","white");
        } else {
        	$(this).css("background-color",inactive_tab_links_color);
        }
    });
    $(".settings-tab-link").click(function (e) {
    	$(".settings-tab-link").css("background-color",inactive_tab_links_color);
    	$(this).css("background-color","white");
    });
}

$(document).ready(function () {
    bindHTMLActions();
});