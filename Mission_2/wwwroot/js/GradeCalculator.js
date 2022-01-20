document.getElementById("Calc").addEventListener("click", function () {

    //Declaring variables;
    let Assign = $("#Assign").val();
    let GP = $("#GP").val();
    let Quiz = $("#Quiz").val();
    let Exam = $("#Exam").val();
    let Intex = $("#Intex").val();

    //Running Calculations
    Assign = Assign * .55;
    GP = GP * .05;
    Quiz = Quiz * .1;
    Exam = Exam * .2;
    Intex = Intex * .1;

    let Total = Assign + GP + Quiz + Exam + Intex;

    //Determining Letter Grade;
    let LetterGrade = "";

    if (Total < 60) {
        LetterGrade = "E";
    } else if (Total < 64) {
        LetterGrade = "D-";
    } else if (Total < 67) {
        LetterGrade = "D";
    } else if (Total < 70) {
        LetterGrade = "D+";
    } else if (Total < 74) {
        LetterGrade = "C-";
    } else if (Total < 77) {
        LetterGrade = "C";
    } else if (Total < 80) {
        LetterGrade = "C+";
    } else if (Total < 84) {
        LetterGrade = "B-";
    } else if (Total < 87) {
        LetterGrade = "B";
    } else if (Total < 90) {
        LetterGrade = "B+";
    } else if (Total < 94) {
        LetterGrade = "A-";
    } else {
        LetterGrade = "A";
    }

    //Displaying The Grade;
    return(Total + "% which is a(n) " + LetterGrade);
    
})