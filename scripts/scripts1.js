function reverseString() {
     let input = document.getElementById("inputedString").value;
     let reversedString = input.split("").reverse().join("");
     alert(reversedString);
}