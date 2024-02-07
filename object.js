const child = {
    name:"joy",
    age:5,
    friends:["john","stuwad","carry","anderson"],
    hobby(){
         game="toyes"
    },
    showFriend(){
        this.friends.forEach(function(frie){
            console.log(frie)
        })
    }
}
res = child.name
console.log(res)
funct = child.hobby
console.log(funct)
child.showFriend()