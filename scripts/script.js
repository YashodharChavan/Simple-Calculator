let screen = document.querySelector(".screen")
        let buttons = document.querySelectorAll(".btn")
        let operators = document.querySelectorAll(".oper")
        let clear = document.getElementById("clear")
        let equal = document.getElementById("equal")
        let backspace = document.getElementById("backspace")

        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                let value = button.innerHTML
                screen.innerHTML += value
            })
        })

        operators.forEach(oper => {
            oper.addEventListener("click", (e) => {
                let value = oper.innerHTML
                screen.innerHTML += value
            })
        })
        clear.addEventListener("click", (e) => {
            screen.innerHTML = ""
        })

        equal.addEventListener("click", (e) => {
            if (screen.innerHTML == "") {
                return
            }
            let answer = eval(screen.innerHTML)
            screen.innerHTML = answer
        })

        backspace.addEventListener("click", (e) => {
            screen.innerHTML = screen.innerHTML.slice(0, -1)
        })