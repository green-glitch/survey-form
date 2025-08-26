// MIT License

// Copyright (c) 2025 Krzysztof Kalinowski

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const fullname = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const dropdown = document.getElementById("dropdown");
const options = document.getElementsByTagName("option");
const recommend = document.getElementsByName("recommend");
const about = document.getElementsByName("about");
const textarea = document.getElementsByTagName("textarea");

function GetRecommend(){
    for (let i = 0; i <= 4; i++){
        if (recommend[i].checked){
            return recommend[i].value;
        }
    }
}

function GetAbout(){
    let arr = [];
    for (let i = 0; i <= 4; i++){
        if (about[i].checked){
            arr.push(about[i].value);
        }
    }
    return arr;
}

function SubmitForm(){
    let fn = fullname.value;
    let em = email.value;
    let age = number.value;
    let drop = dropdown.value;

    if(fn == "" || em == "" || age == ""){
        alert("Please fill all the fields");
    }
    else{
        message = [
            "Inputs: \n\n",
            "Name: " + fn + "\n",
            "Email: " + em + "\n",
            "Age: " + age + "\n",
            "Satisfied: " + options[parseInt(drop) + 3].innerText + "\n",
            "Recommend: " + GetRecommend() + "\n",
            "About: " + GetAbout().join(", ") + "\n",
            "Comments: " + textarea[0].value,
        ];

        alert(message.join(""));
    }
}