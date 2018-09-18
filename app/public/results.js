$("#workPLS").click(function(event) {
    //prevent a refresh on click
    event.preventDefault();
    //create an object for users data
    var userData = {
        name: $("#name").val(),
        photo: $("#picURL").val(),
        scores: [
            $("question1").val(),
            $("question2").val(),
            $("question3").val(),
            $("question4").val(),
            $("question5").val(),
            $("question6").val(),
            $("question7").val(),
            $("question8").val(),
            $("question9").val(),
            $("question10").val(),
        ]
    }
    //AJAX the data to the friends API
    $.post("/api/friends", userData, function(data){
        $("#bff-name").text(data.name);
        $("bff-img").attr("src", data.photo);

        //display the modal
        $("#results").modal("toggle");
    })
})