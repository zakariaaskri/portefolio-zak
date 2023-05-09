var images = ["https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/336914983_592299789602083_1792457428288276359_n.png?stp=dst-png_p640x640&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oS4P7lIy2-0AX9cyQ4U&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBwDfKAlMPcTW9UYlmCISTnuknRJqMo1An1My7dGdyCCw&oe=645F1423",
"https://scontent-pmo1-1.xx.fbcdn.net/v/t1.6435-9/118084059_1229743034046106_5276963337827796913_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nOfIaWgU9EkAX97xcfR&_nc_ht=scontent-pmo1-1.xx&oh=00_AfBkLCMfeaBz2HKvdwyR1mMtYSANHjJerghXXqOkFVFNnQ&oe=6480E09D"]
var mybtn = document.getElementById('mybtn')
console.log(images[0])
mybtn.onclick = function()
{
        document.body.style.backgroundImage ="url(images[1])"   
}


