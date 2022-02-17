function DFS(startNode, endNode){
    let stack = []
    let visitedNodes = []

    stack.push(startNode)
    visitedNodes.push(startNode)

    while(stack.length!=0){
        let current = stack.pop()
        for(let i=0; i<current.neighbours.length; i++){
            if(current.neighbours[i]===endNode){
                console.log(visitedNodes)
                return visitedNodes;
            }else if(!current.neighbours[i].isWall && !visitedNodes.includes(current.neighbours[i])){

                visitedNodes.push(current.neighbours[i])
                stack.push(current.neighbours[i])
            }
        }
    }
}



export default DFS;