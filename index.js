// 1
let widthTask1;
let heightTask1;

document.querySelector(".task1_btn").onclick = function() {
    const task1 = document.querySelector(".div1");
    widthTask1 = document.querySelector("#width1").value;
    heightTask1 = document.querySelector("#height1").value;

    task1.innerHTML = `<p> Периметр прямоугольника ` + (+widthTask1 + +heightTask1)*2 + `</p>`;

}

// 2
let widthTask2;
let heightTask2;

document.querySelector(".task2_btn").onclick = function() {
    const task2 = document.querySelector(".div2");
    widthTask2 = document.querySelector("#width2").value;
    heightTask2 = document.querySelector("#height2").value;

    task2.innerHTML = `<p> Площадь прямоугольника ` + (+widthTask2 * +heightTask2) + `</p>`;
}

// 3
function triangle3() {
    let height3 = document.querySelector("#height3").value;
    let height3_2 = document.querySelector("#height3_2").value;

    height3 = parseInt(height3);
    height3_2 = parseInt(height3_2);

    let p = Math.sqrt(height3**2 + height3_2**2); 
    return height3 + height3_2 + p;
}

document.querySelector(".task3_btn").onclick = () => {
    const task3 = document.querySelector(".div3");

    task3.innerHTML = `<p> Периметр прямоугольного треугольника ` +  Math.trunc(triangle3()) + `</p>`
} // Под конец 4 задания я поняла что наверное надо было обычный треугольник подставить =_=

// 3.5
function triangle3_2() {
    let a = 15;
    let b = 15;
    let c = 15;

    return a + b + c;
}

console.log(`Периметр треугольника`, triangle3_2())

// 4 
function triangle4() {
    let height4 = document.querySelector("#height4").value;
    let height4_2 = document.querySelector("#height4_2").value;
    
    height4 = parseFloat(height4)
    height4_2 = parseFloat(height4_2)
    
    return 0.5 * height4 * height4_2;
    }

document.querySelector(".task4_btn").onclick = () => {
    const task4 = document.querySelector(".div4");

    task4.innerHTML = `<p> Площадь треугольника ` +  triangle4() + `</p>`
}

// 5 
function square5() {
    let height5 = document.querySelector("#height5").value;
    
    height5 = parseFloat(height5)
    
    return 4 * height5;
    }

document.querySelector(".task5_btn").onclick = () => {
    const task5 = document.querySelector(".div5");
    
    task5.innerHTML = `<p> Периметр квадрата ` +  square5() + `</p>`
}

// 6
function square6() {
    let height6 = document.querySelector("#height6").value;
    
    height6 = parseFloat(height6)
    
    return height6 ** 2;
    }

document.querySelector(".task6_btn").onclick = () => {
    const task6 = document.querySelector(".div6");
    
    task6.innerHTML = `<p> Площадь квадрата ` +  square6() + `</p>`;
}

// 7
function power7() {
    let number7 = document.querySelector("#number7").value;
    let number7_2 = document.querySelector("#number7_2").value;

    number7 = parseFloat(number7)
    number7_2 = parseFloat(number7_2)

    return number7 ** number7_2;
}

document.querySelector(".task7_btn").onclick = () => {
    document.querySelector(".div7").innerHTML = `<p> Число возведенное в степень: ` + number7.value + ` Степень ` + number7_2.value + ` Результат ` + power7() + `</p>`;
}