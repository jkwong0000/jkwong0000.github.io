//this is different from the "Grid" cells
class Cell{
    constructor(position){
        this.position = position
        this.discovered = false
        this.type = "cell"
        this.left = "uninit"
        this.right = "uninit"
        this.up = "uninit"
        this.down = "uninit"
        
    }
    initialise(){
        if(this.position[0] != 1){
            this.left = grid[this.position[0] - 1][this.position[1]]
        }
        else{
            this.left = "edge"
        }

        if(this.position[0] != gridsize[0]-2){
            this.right = grid[this.position[0] + 1][this.position[1]]
        }
        else{
            this.right = "edge"
        }

        if(this.position[1] != 1){
            this.up = grid[this.position[0]][this.position[1]- 1]
        }
        else{
            this.up = "edge"
        }

        if(this.position[1] != gridsize[1]-2){
            this.down = grid[this.position[0] ][this.position[1]+ 1]
        }
        else{
            this.down = "edge"
        }
    }
}

class Wall{
    constructor(position, direction){
        this.position = position
        this.direction = direction
        this.opened = false
        this.type = "wall"
        if (this.direction == "horizontal"){
            this.left = grid[this.position[0]-1][this.position[1]]
            this.right = grid[this.position[0]+1][this.position[1]]
        }
        else{
            this.left = "lol"
            this.right = "lol"
        }

        if (this.direction == "vertical"){
            this.up = grid[this.position[0]][this.position[1]-1]
            this.down = grid[this.position[0]][this.position[1]+1]
        }
        else{
            this.up = "lol"
            this.down = "lol"
        }
    }
}