let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenVal = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "C") {
      screen.value = "";
      screenVal = "";
    } else if (buttonText == "X") {
      screen.value += "*";
      screenVal += "*";
    } else if (buttonText == "DEL") {
      if (screen.value) {
        let a = screen.value;
        screen.value = a.substr(0, a.length - 1);
        let b = screenVal;
        screenVal = b.substr(0, a.length - 1);
      }
    } else if (buttonText == "=") {
      console.log(eval(screenVal));
      screen.value = eval(screenVal);
      console.log("HHHH");
      screenVal = screen.value;
    } else if (buttonText == "%") {
      let val = screen.value;
      screen.value = "(" + val + ")" + "%";
      screenVal = eval(screenVal) + "/100";
      // console.log(screenVal);
    } else if (buttonText == "√") {
      let val = screen.value;
      screen.value = "√" + "(" + val + ")";
      screenVal = Math.sqrt(eval(screenVal));
    } else if (buttonText == "∛") {
      let val = screen.value;
      screen.value = "∛" + "(" + val + ")";
      screenVal = Math.cbrt(eval(screenVal));
    } else if (buttonText == "x²") {
      let val = screen.value;
      screen.value = Math.pow(eval(val), 2);
      screenVal = screen.value;
    } else if (buttonText == "x³") {
      let val = screen.value;
      screen.value = Math.pow(eval(val), 3);
      screenVal = screen.value;
    } else if (buttonText == "log") {
      let val = screen.value;
      screen.value = Math.log(eval(val));
      screenVal = screen.value;
    } else {
      screenVal += buttonText;
      screen.value += buttonText;
    }
  });
}
