$("#btnSend").click(function () {
    
    //This is the initial call for the javascript variables.  Each one is assigned from the input variables.
    const assignments = parseFloat($("#assignmentPercent").val());
    const groups = parseFloat($("#groupPercent").val());
    const quizzes = parseFloat($("#quizPercent").val());
    const midterms = parseFloat($("#midtermPercent").val());
    const finals = parseFloat($("#finalPercent").val());
    const intexes = parseFloat($("#intexPercent").val());

    // This is the calculating the grade section.  Each assignment has a value of teh overall grade, which is then multiplied by the percentage.
    // In order to streamline, I have decided to allow the user to put in whole numbers and instead manipulate the percentages instead. 
    let percentOfGrade = assignments * 0.5;
    percentOfGrade = percentOfGrade + (groups * 0.1);
    percentOfGrade = percentOfGrade + (quizzes * 0.1);
    percentOfGrade = percentOfGrade + (midterms * 0.1);
    percentOfGrade = percentOfGrade + (finals * 0.1);
    percentOfGrade = percentOfGrade + (intexes * 0.1);

    //This is the start of grade checking, to see how to fill the character.  The if statement cycles through the results of the calculations.

    let letterGrade = "None";
    if (percentOfGrade >= 94.0) {
        letterGrade = "A";
    } else if (percentOfGrade >= 90.0) {
        letterGrade = "A-";
    } else if (percentOfGrade >= 87.0) {
        letterGrade = "B+";
    } else if (percentOfGrade >= 84.0) {
        letterGrade = "B";
    } else if (percentOfGrade >= 80.0) {
        letterGrade = "B-";
    } else if (percentOfGrade >= 77.0) {
        letterGrade = "C+";
    } else if (percentOfGrade >= 74.0) {
        letterGrade = "C";
    } else if (percentOfGrade >= 70.0) {
        letterGrade = "C-";
    } else if (percentOfGrade >= 67.0) {
        letterGrade = "D+";
    } else if (percentOfGrade >= 64.0) {
        letterGrade = "D";
    } else if (percentOfGrade >= 60.0) {
        letterGrade = "D-";
    } else if (percentOfGrade < 60.0) {
        letterGrade = "E";
    }
    //Returning the results here, through simple jquery.
   //$("#results").html(letterGrade);
    alert("Your final grade");
});