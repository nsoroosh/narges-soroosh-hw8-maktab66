class Circle {
    constructor(radius){
        this.r = radius
    }
    getArea(){
       return 3.14159265359 * (this.r ** 2)
    }
    getPerimeter(){
         return 2* 3.14159265359 * this.r
    }
    
}
let circy=new Circle(11)
 console.log(circy.getArea())