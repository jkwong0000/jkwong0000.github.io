canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.width = 1020
canvas.height = 1020
demo = document.getElementById("demo")
//50 * 50 grid

gridsize = [51,51]
var grid = []
for(i = 0; i < gridsize[0]; i ++){
    grid.push([])
    for (j = 0; j < gridsize[1]; j++){
        grid[i].push("0")
    }
}


var adjacent_walls = []

var start = [11,33]