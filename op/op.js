class Footbaler{
    constructor(weight,tall,speed,clouthes){
        this.weight = weight
        this.tall = tall
        this.speed = speed
        this.clouthes = clouthes
    }
}
class Cloth{
    constructor(brand,size,color,type){
this.brand = brand
this.size = size
this.color = color
this.type = type
    }
}
let c1 = new Cloth("Nike","S","Red","shirt")
console.log(c1)
let c2 = new Cloth("nike","39","pink","Shoes")
let f1 = new Footbaler("46","163","20",[c1,c2])
console.log(f1) 
