let userTextFunction = document.getElementById("Usertext");
            const hackerText = document.getElementById("hackerText");
            const alphabet = {  "A": "4", 
                                "B": "|3", 
                                "C": "[", 
                                "D": "|)", 
                                "E":"3",
                                "F":"|=",
                                "G":"6",
                                "H":"#",
                                "I":"1",
                                "J":",_|",
                                "K":">|",
                                "L":"|_",
                                "M":"IVI",
                                "N":"|\|",
                                "O":"0",
                                "P":"|*",
                                "Q":"(_,)",
                                "R":"I2",
                                "S":"5",
                                "T":"7",
                                "U":"|_|",
                                "V":"|/",
                                "W":"Ш",
                                "X":"><",
                                "Y":"j",
                                "Z":"2",
                                "0":"()",
                                "1":"L",
                                "2":"R",
                                "3":"E",
                                "4":"A",
                                "5":"S",
                                "6":"G",
                                "7":"T",
                                "8":"B",
                                "9":"q",}

            userTextFunction.oninput= function(){
                hackerText.textContent = "";

                for(let letter of userTextFunction.value.toUpperCase()){
                    if (letter in alphabet) {
                        hackerText.textContent += alphabet[letter];
                    }else{
                        hackerText.textContent += letter;
                    }
                }
                
            }