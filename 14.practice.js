function srtUserName() {
    const myName = prompt("please enter your name");
    localStorage.setItem("name",myName);
    myHeading.textContent = mozilla iscool,${myName};
}