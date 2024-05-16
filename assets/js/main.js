$(document).ready(function () {
    $("body").on("click", ".add-more", function () {
        var html = $(".after-add-more").first().clone();
        $(html).find(".change").html("<a href='#' class='btn btn-sm btn-soft-danger remove btn-circle'><i class='mdi mdi-trash-can'></i></a>");
        $(".after-add-more").last().after(html);
    });
    $("body").on("click", ".remove", function () {
        $(this).parents(".after-add-more").remove();
    });


    $("body").on("click", ".range-add-more", function () {
        var html = $(".range-after-add-more").first().clone();
        $(html).find(".rangechange").html("<a href='#' class='btn btn-sm btn-soft-danger range-remove btn-circle'><i class='mdi mdi-trash-can'></i></a>");
        $(".range-after-add-more").last().after(html);
    });
    $("body").on("click", ".range-remove", function () {
        $(this).parents(".range-after-add-more").remove();
    });


});