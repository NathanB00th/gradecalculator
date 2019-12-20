

function avgGradesClick() {
    var homework = avgGrade(document.getElementById("homeworkGrade").value);
    var classwork = avgGrade(document.getElementById("classworkGrade").value);
    var quiz = avgGrade(document.getElementById("quizGrade").value);
    var test = avgGrade(document.getElementById("testGrade").value);
    var participation = avgGrade(document.getElementById("participationGrade").value);

    var homeworkW = parseInt(document.getElementById("homeworkWeight").value);
    var classworkW = parseInt(document.getElementById("classworkWeight").value);
    var quizW = parseInt(document.getElementById("quizWeight").value);
    var testW = parseInt(document.getElementById("testWeight").value);
    var participationW = parseInt(document.getElementById("participationWeight").value);
    var finalW = parseInt(document.getElementById("finalWeight").value);

    var mainWeights = homeworkW + classworkW + quizW + testW + participationW;
    var weightMultiply = 100 / mainWeights;
    var check = mainWeights + finalW;

    if(check == 100) {
        var avgTotal = (homework * homeworkW / 100 + classwork * classworkW / 100 + quiz
            * quizW / 100 + test * testW / 100 + participation * participationW / 100) * weightMultiply;
        document.getElementById('classWeight').innerHTML = "You have a " + avgTotal + "%!";
    } else {
        document.getElementById('classWeight').innerHTML = "Please re - enter the assignment weights.";
    }

}

function calculateFinal(){
    var homework = avgGrade(document.getElementById("homeworkGrade").value);
    var classwork = avgGrade(document.getElementById("classworkGrade").value);
    var quiz = avgGrade(document.getElementById("quizGrade").value);
    var test = avgGrade(document.getElementById("testGrade").value);
    var participation = avgGrade(document.getElementById("participationGrade").value);

    var homeworkW = parseInt(document.getElementById("homeworkWeight").value) / 100;
    var classworkW = parseInt(document.getElementById("classworkWeight").value) / 100;
    var quizW = parseInt(document.getElementById("quizWeight").value) / 100;
    var testW = parseInt(document.getElementById("testWeight").value) / 100;
    var participationW = parseInt(document.getElementById("participationWeight").value) / 100;
    var finalW = parseInt(document.getElementById("finalWeight").value) / 100;

    var desiredGrade = parseInt(document.getElementById("desiredGrade").value);

    var mainWeights = homeworkW + classworkW + quizW + testW + participationW;
    var check = mainWeights + finalW;

    var h = homeworkW * homework;
    var c = classwork * classworkW;
    var q = quiz * quizW;
    var t = testW * test;
    var p = participationW * participation;
    var finalGrade = (desiredGrade - h - c - p - q - t) / finalW;

    if(check == 1) {
        document.getElementById('finalAvg').innerHTML = "You would need a " + finalGrade + "% on the final";
    } else {
        document.getElementById('finalAvg').innerHTML = "Please re - enter the assignment weights.";
    }
}

function avgGrade(grade) {
    var arr = grade.split(",");
    var sum = 0;
    for (var i = 0; arr.length > i; i++) {
        arr[i] = parseInt(arr[i]);
        var sum = sum + arr[i];
    }
    var avgGrade = sum / arr.length;
    return avgGrade;
}
