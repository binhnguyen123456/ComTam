const btn=document.querySelectorAll("button")
btn.forEach(function(button,index){
    //sự kiện kích hoạt khi người dùng nhập vào nút 
    button.addEventListener("click",function(event){
        var btnItem =event.target 
        //lấy từ phần tử mẹ 
        var product = btnItem.parentElement
        //lấy phần tử đầu tiên 
        var productImg=product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice =product.querySelector("span").innerText
        addcart (productPrice,productImg,productName)
    })
})
function addcart (productPrice,productImg,productName){
    var addtr=document.createElement("tr")
    var trcontent='<tr><td style="display: flex;align-items:center"><img src="'+productImg+'" height="70px" >'+productName+'</td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width:30px;outline:none;" class="number" value="1" min="0"></input></td><td style="cursor:pointer;">Xóa</td></tr>'
    addtr.innerHTML =trcontent
    var cartTable =document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
}
function carttotal(){
    var cartItem =document.querySelectorAll("tbody tr")
    var totalC =0
    for(var i=0;i<cartItem.length;i++){
        var inputValue =cartItem[i].querySelector("input").value
        var productPrice= cartItem[i].querySelector("span").innerHTML
        totalA =inputValue*productPrice*1000
        totalC=totalC+totalA
        console.log(totalC)
    }
    var cartTotalA =document.querySelector(".price-total span")
    cartTotalA.innerHTML=totalC
    console.log(cartTotalA)
}
