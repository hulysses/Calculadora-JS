function options(option) {
  let number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + option;
  if (option == "AC") {
    document.getElementById("result").innerHTML = "";
  } else if (option == "DEL") {
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(
      0,
      result.length - 4
    );
  } else if (option == "") {
    var result = document.getElementById("result").innerHTML;
    if (result) {
      document.getElementById("result").innerHTML = eval(result);
    }
  }
}
