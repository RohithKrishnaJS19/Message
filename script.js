var textarea = document.getElementById("textarea")
        var main = document.getElementById("main")
        textarea.addEventListener("input", function () {
            if(textarea.value.length==200)
            {
                main.innerHTML = `${textarea.value.length}/200 characters (Maximum charcter Reached)`
            }
            else{
                main.innerHTML = `${textarea.value.length}/200 characters`
            }
        })