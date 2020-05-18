function myFunction() {
      var age, day;

      
      age = document.getElementById("age").value;
      day = document.getElementById("day").value;
        
        if ((day ==  "Tuesday" || day == "Thursday") && (age >= 12 && age <= 21)) {
            age = "You get student pricing.";
               } else {
            age = "You get normal pricing.";
        }
    document.getElementById("demo").innerHTML = age;
}