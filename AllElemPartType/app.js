const myList = document.getElementsByTagName('li')
myList[2].style.color = 'purple'

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
}