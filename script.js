const resizeButton = document.querySelector(".heading > button")

resizeButton.addEventListener("click", () => {
    const size = prompt("Enter Grid Size <= 40", "")

    if (size > 40) {
        alert("Size must be less than or equal to 40")
    } else {
        createGrid(size, size)
    }
})

function createGrid(rows, cols) {
    const gridContainer = document.querySelector(".grid-container")
    gridContainer.innerHTML = ""

    for (let r = 0; r < rows; r++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let c = 0; c < cols; c++) {
            const cell = document.createElement("div")
            cell.classList.add("cell")

            cell.addEventListener("mouseenter", () => {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)

                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            })

            row.appendChild(cell)
        }

        gridContainer.appendChild(row)
    }
}

createGrid(16, 16)