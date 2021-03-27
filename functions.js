function draw_grid(){
    for (i = 0; i <gridsize[0]; i ++){
        for (j = 0; j <gridsize[1]; j ++){
            if (grid[i][j] != "0" && grid[i][j] != "1"){
                
                if (grid[i][j].type == "cell" && grid[i][j].discovered){
                    ctx.fillStyle = "white"
                    ctx.fillRect(i*20,j*20,20,20)
                }
                else if (grid[i][j].type == "wall" && grid[i][j].opened){
                    ctx.fillStyle = "white"
                    ctx.fillRect(i*20,j*20,20,20)
                }   
            }
            else if(grid[i][j] == "1"){
                ctx.fillStyle = "red"
                ctx.fillRect(i*20,j*20,20,20)
            }
        }
    }
}

function pick_cell(pos){
    let a = pos[0]
    let b = pos[1]
    grid[a][b].discovered = true
    if(grid[a][b].up != "edge"){
        if(!grid[a][b].up.opened  ){
            adjacent_walls.push(grid[a][b].up)
        
        }
    }
    if(grid[a][b].left != "edge" ){
        if(!grid[a][b].left.opened ){
            adjacent_walls.push(grid[a][b].left)
        }
    }
    
    
    if(grid[a][b].down != "edge"){
        if(!grid[a][b].down.opened ){
            adjacent_walls.push(grid[a][b].down)
        }
    }
    if(grid[a][b].right != "edge"){
        if(!grid[a][b].right.opened  ){
            adjacent_walls.push(grid[a][b].right)
        }
    }
}

function check_wall(position, index){
    var x = position[0]
    var y = position[1]
    if(grid[x][y].direction == "horizontal"){
        if(grid[x][y].left.discovered && !grid[x][y].right.discovered ){
            grid[x][y].opened = true
            pick_cell([x+1,y])
        }
        else if(!grid[x][y].left.discovered && grid[x][y].right.discovered ){
            grid[x][y].opened = true
            pick_cell([x-1,y])
        }
    }
    else{
        if(grid[x][y].up.discovered && !grid[x][y].down.discovered ){
            grid[x][y].opened = true
            pick_cell([x,y+1])
        }
        else if(!grid[x][y].up.discovered && grid[x][y].down.discovered ){
            grid[x][y].opened = true
            pick_cell([x,y-1])
        }
    }
    
    adjacent_walls.splice(index,1)

}