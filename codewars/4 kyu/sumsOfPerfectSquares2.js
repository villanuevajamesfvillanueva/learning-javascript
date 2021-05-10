
//BFS(Breadth First Search)
function sumOfSquares(n) {
    //creating visited vector of size n + 1
    var visited = [];
    for (let i = 0; i <= n; i++) {
        visited.push(0)
    }

    //queue of pair to store node and number of steps
    q = [];
    //initialize ans with inf
    ans = Number.MAX_SAFE_INTEGER;

    //Push starting node with 0
    //0 indicate current number of step to reach n
    q.push([n, 0]);

    //Mark starting node visited
    visited[n] = 1;
    while(q.length > 0) {
        p = q[0];
        q.shift(0);

        //If node reaches its destination
        //update 0 with answer
        if(p[0] === 0) ans = Math.min(ans, p[1]);

        //Loop for all possible path from 1 to i*i <= current node(p.first)
        i = 1;
        while (i * i <= p[0]) {

            //If we are standing at some node then next node it can jump to will be current node-
            //(some square less than or equal to n)
            path = p[0] - i * i;

            //Check if it is valid and not visited yet
            if (path >= 0 && (visited[path] === 0 || path === 0)) {

                //Mark visited
                visited[path] = 1;

                //Push it it Queue
                q.push([path,p[1] + 1]);
            }
            i += 1;
        }
    }
    return ans;
}
 

console.log(sumOfSquares(15));
console.log(sumOfSquares(16));
console.log(sumOfSquares(17));
console.log(sumOfSquares(18));
console.log(sumOfSquares(19));
 