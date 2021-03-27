for(i = 1; i< gridsize[0]; i += 2){
    for(j = 1; j< gridsize[1]; j += 2){
        grid[i][j] = new Cell([i,j])
    }
}

for(i = 2; i< gridsize[0]-1; i += 2){
    for(j = 1; j< gridsize[1]; j += 2){
        grid[i][j] = new Wall([i,j],"horizontal")
    }
}

for(i = 1; i< gridsize[0]; i += 2){
    for(j = 2; j< gridsize[1]-1; j += 2){
        grid[i][j] = new Wall([i,j],"vertical")
    }
}

for(i = 1; i< gridsize[0]; i += 2){
    for(j = 1; j< gridsize[1]; j += 2){
        grid[i][j].initialise()
    }
}

pick_cell([start[0],start[1]])

var interval = setInterval(loop,1)

function loop(){
    if (adjacent_walls.length != 0){
        temp = Math.floor(Math.random()*adjacent_walls.length)
        check_wall(adjacent_walls[temp].position,temp)
        ctx.fillStyle = "black"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        draw_grid()
        

    }
    else{
        clearInterval(interval)
    }
}
    










