function check(){
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let bmi =weight/Math.pow(height,2);

    if (bmi >= 30){
        document.getElementById("bmi").innerHTML = 'BMI = ' + bmi;
        document.getElementById("result").innerHTML= "obese";
    } else if(bmi >= 25){
        document.getElementById("bmi").innerHTML = 'BMI = ' + bmi;
        document.getElementById("result").innerHTML= "Overweight";
    } else if(bmi >= 18.5){
        document.getElementById("bmi").innerHTML = 'BMI = ' + bmi;
        document.getElementById("result").innerHTML= "Normal";
    } else{
        document.getElementById("bmi").innerHTML = 'BMI = ' + bmi;
        document.getElementById("result").innerHTML= "Underweight";
    }

}