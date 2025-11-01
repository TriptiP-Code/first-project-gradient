        let btn1= document.getElementById("myButton");
        let btn2= document.getElementById("myButton2");
        let copyDiv = document.querySelector(".copycode");

        let rgb1="#000";
        let rgb2="#000";

        const hexValues = () =>{
            let myHexValues= "0123456789abcdef";
            let colors = "#";
            for(let i=0 ;i<6 ; i++)
        {
            colors= colors+myHexValues[Math.floor(Math.random()*16)];
        }
        return colors;
        };


        const handleButton1 = () => {
            rgb1= hexValues();
            btn1.innerText=rgb1;
            document.body.style.backgroundImage=`Linear-gradient(to right ,${rgb1},  ${rgb2})`;
            // console.log(rgb1);
            copyDiv.innerHTML=`backgound-image : linear-gradient (to right , ${rgb1} , ${rgb2})`;
        };


        const handleButton2 = () => {
            rgb2= hexValues();
            btn2.innerText=rgb2;
            document.body.style.backgroundImage=`Linear-gradient(to right ,${rgb1},  ${rgb2})`;
            copyDiv.innerHTML=`backgound-image : linear-gradient (to right , ${rgb1} , ${rgb2})`;
        };


        btn1.addEventListener("click" , handleButton1);

        btn2.addEventListener("click" , handleButton2);