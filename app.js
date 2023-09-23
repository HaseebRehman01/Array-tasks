// // task 1
// var arr = [""]
// // task 2
// var name =[]
// // task 3
// var name = ["haseeb","ali","rehman"]
// // task 4
// var num =[2,3,4,5]
// // task 5 
// var boolean = [true ,flase,false,ttue]
// // task 6 
// var mix = [ "name",variable, true,false,3]
// task 7
    // var  qual = ["ssc","bcc","hsc","ubsc"]
    // document.write("Qualification"+"<br>")
    // document.write("1) "+ qual[0]+"<br>")
    // document.write("2) "+ qual[1]+"<br>")
    // document.write("3) "+ qual[2]+"<br>")
    // document.write("4) "+ qual[3]+"<br>")
    
// task 8
// var name =["micheal","john","tony"]
// var conrain_marks =[400,350,300]
// var total = 500
// var mic = conrain_marks[0]/total *100
// var j = conrain_marks[1]/total *100
// var t = conrain_marks[2]/total *100
// document.write("score of micheal is "+conrain_marks[0]+". "+"percentage : "+mic +"<br>")
// document.write("score of john is "+conrain_marks[1]+". "+"percentage : "+j +"<br>")
// document.write("score of tony is "+conrain_marks[2]+". "+"percentage : "+t +"<br>")


// task 9

// document.write("Top movies of 2015"+"<br>")
// var movies = []
// movies[0]="avengers"
// document.write(movies[0]+"<br>")
// movies[1]="gamba"
// document.write(movies[1]+"<br>")
// movies[2]="priya"
// document.write(movies[2]+"<br>")
// movies[3]="uncle jee"
// document.write(movies[3]+"<br>")

// document.write("<br>Number of movies in the array: " + movies.length);


// task 10
// var cars = ["audi", "corolla ","civic","alto"]
// document.write("Favourite cars "+"<br>"+"<br>"+"<br>"+"<br>")
// document.write(cars+"<br>")

// document.write("First index of the array is "+cars.indexOf("audi")+"<br>")
// document.write("car at first index of the array is "+cars[0]+"<br>")
// document.write("last index of the array is "+cars.indexOf("alto")+"<br>")
// document.write("car at last index of the array is "+cars[3]+"<br>")


// task 11
// var colors =["yello","narangi"]
// var user = prompt("What coor do you add in the beginning oof the array?"+"<br>")
// console.log(user)
// colors.unshift(user)
// document.write("first array : " + colors+"<br>")
// var user = prompt("What coor do you add in the end oof the array?")
// colors.push(user)
// document.write("last array :  " +colors+"<br>")
// colors.unshift("brown","aqua")
// document.write("Two more beginnig array :  " +colors+"<br>")
// colors.shift()
// document.write("deleted first array from array : "+ colors+"<br>")
// colors.pop()
// document.write("deleted last color from array : "+ colors+"<br>")
// var user = prompt("At what index do you add more color "+"<br>")
// var user_color = prompt("Color name ")
// colors.splice(user,0,user_color)
// document.write("updated index = " +user+ " colors name = "+user_color+ " now array is : " +colors+"<br>")
// var user = prompt("At what index do you delete  color "+"<br>")
// var user_del = prompt(" how many colors do you want to delete write number only ")
// colors.splice(user,user_del)
// document.write("start deleteing from = " +user+ " stop here = "+user_del+ " now array is : " +colors+"<br>")


// task 12
// var array = [120,12,78,0,34]
// console.log(array)
// array.sort()
// console.log(array)


// task 13
// var array = ["a","k","g","h","r","g","h"]
// console.log(array)
// array.sort()
// console.log(array)

// task 14 (slice)
// var array = ["karachi","lahore","quetta","pindi"]
// console.log(array)

// console.log(array.slice(1,3))
// task 16
// var arr = ["This ", "is" , ","  ,"my",  "cat"];
// console.log(arr)
// var join = arr.join("  " )
// console.log(join)

    // Array of phone manufacturers
    var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    document.write("<label for='manufacturer'>Select a Phone Manufacturer:</label>");
    document.write("<select id='manufacturer'>");

    // Manual option entries
    document.write("<option value='" + manufacturers[0] + "'>" + manufacturers[0] + "</option>");
    document.write("<option value='" + manufacturers[1] + "'>" + manufacturers[1] + "</option>");
    document.write("<option value='" + manufacturers[2] + "'>" + manufacturers[2] + "</option>");
    document.write("<option value='" + manufacturers[3] + "'>" + manufacturers[3] + "</option>");
    document.write("<option value='" + manufacturers[4] + "'>" + manufacturers[4] + "</option>");
    document.write("<option value='" + manufacturers[5] + "'>" + manufacturers[5] + "</option>");

    document.write("</select>");


