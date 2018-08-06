app.directive("my-template", function(){
    return {
        template:
            "<div class='alert'>" +
            "<span class='alert-topic'>" +
            "Something went wrong!" +
            "</span>" +
            "<span class='alert-description'>" +
            "You must inform the plate and the color of the car!" +
            "</span>" +
            "</div>"
    };
});


app.directive("my-templateUrl", function(){
    return {
        templateUrl: "templates/fragmentoHtml.html"
    };
});

app.directive("my-templateUrlReplace", function(){
    return {
        restrict: 'E',
        templateUrl: "templates/fragmentoHtml.html",
        replace: true
    };
});