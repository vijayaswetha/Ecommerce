@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
@import 'animate.css';


@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap')
;
/* Reset styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styles */
body {
    overflow-x: hidden;
    font-family: 'Merriweather', serif;

}

/* Global tags */
h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(31, 31, 63);
}

span {
    font-size: 1rem;
    color: rgb(205, 70, 46);
}

h6 {
    font-size: 1.1rem;
    color: rgb(35, 35, 63);
}
.head-inspire
{
    font-size: 40px!important;
    color: rgb(255, 38, 0);
    font-style: italic;
    text-shadow: 1px 1px  #000;
}

.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure the loader is above other elements */
}

.loader {
    border: 6px solid #f3f3f3; /* Light grey border */
    border-top: 6px solid #5534db; 
    border-bottom: 6px solid #5534db; /* Blue border on top */
    /* Blue border on top */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite; /* Spin animation */
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Hide loader initially */
.loader-wrapper.hide {
    display: none;
}
/* Navbar styles */
nav {
    top:0;
    z-index: 10;
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 5vw;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.20);
}
.home-title a
{
  text-decoration: none;
  color: #280274;
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  background-color: #6E93f7;
  border-radius: 45%;
  padding: 0px 10px;
}
nav img {
    width: 100px;
    height: 80px;
    cursor: pointer;
}

nav .navigation ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

}

nav .navigation ul li {
    list-style: none;
    margin-left: 30px;
    
}

nav .navigation ul li a {
    text-decoration: none;
    color: rgb(35, 35, 35);
    font-size: 16px;
    font-weight: 600;
    transition: 0.5s ease-in;
}

.active {
    color: rgb(37, 37, 143);
}
nav .navigation ul li a:active,

nav .navigation ul li a:hover {
    color: rgb(182, 202, 34);
}

/* Search input styles */
.search-input {
    display: flex;
    align-items: center;
    position: relative;
}
.search-input input {
    background-color:white;
    border-radius: 5px;
    padding: 6px;
    border-color:black;
    border-width: 1px;
    margin-left: 40px;
}

.search-input i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: rgb(35, 35, 35);
    cursor: pointer;
}
.nav i .fa1{
display: block;
}
#menu-btn
{
  height: 30px;
  width:30px;
  display: none;
}
#close-btn
{
  height: 30px;
  width:30px;
  display: none;

}

/*home page*/
#home
{
    top:0;
    background-position: top;
    background-size: cover;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(9,5,50,0.4),rgba(5,4,40,0.6)),url("https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_640.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 60px;
}

#home.title1{
    display: grid;
    place-items: center;
    height: 100vh;
    padding: 0;
    margin: 0;
}
#home h1
{

    font-size: 3.5rem;
    background-image: linear-gradient(180deg ,red,yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color:transparent;
    -webkit-text-stroke: 0.1rem black;
    filter:drop-shadow(0.25rem 0.25rem 0 rgb(178, 178, 186));
    text-transform:uppercase;
    padding: 10px 0px;
    transition: all 0.1s;
    animation-duration: 2s ;
    animation-iteration-count: 1;
}

#home h1:hover{
    -webkit-text-stroke: 2px #3416b5;
    color: transparent;
}



#home h3{
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 5px 0px;

}
#home p{
    width: 50%;
    font-size: 0.9rem;
    color: white;
}
#home .btn{
    margin-top: 20px;

}
#home a{
    text-decoration: none;
    background-color: white;
 border-radius: 10px;
 padding: 12px 20px;   
 color: black;
 font-weight: bold;

}

#home a.one-btn{
background-color: rgb(59, 59, 235);
color: rgb(244, 238, 67);;
}

#home a.two-btn{
    background-color: rgb(244, 238, 67);
    color: rgb(59, 59, 235);
    }
    
    #home a.one-btn:hover{
    
        background-color: rgb(244, 238, 67);
        color: rgb(59, 59, 235);
        transition:ease-in 1s;
        }
        #home a.two-btn:hover{
            background-color: rgb(59, 59, 235);
     color: rgb(244, 238, 67);
     transition:ease-in 1s;

        }


        /*features*/
        #features
        {
            margin-top: 20px;
            text-align: center;   
            padding: 8vw 8vw 0vw 8vw;

        }
#features .feature1
{

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px ,1fr));
    grid-gap: 1rem;
    margin-top: 50px;
   /* padding: 10px 100px;
    text-align: start;
    display: flex;
    flex-direction: row;*/
}
@keyframes fadeOut {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
#features
{
    margin: 0 20px;
    padding: 50px;
}
#features1 h2 {
    align-items: center;
    text-shadow: 0px 0px 5px rgb(133, 133, 133);
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
    color: #280274;
    animation: fadeIn 2s infinite alternate ease-in-out;
}

#features .f-box1
{
    margin: 10px;
    height: 300px;
   /*background-color: #f98f27;*/
   background-color:white;
   padding: 15px;
   font-size: 2rem;
   color: #280274;
    border-radius: 10px;
    box-shadow: 1px 1px 18px 1px rgb(235, 126, 59) ;
}
#features .f-box1 i
{
    padding: 10px;
}

#features .f-box1 h3
{
    font-size: 1.8rem;
    padding: 10px;
 text-align: start;
}

#features .f-box1 p
{
    font-size: 1rem;
    padding: 10px;
    margin: 10px 0px 0px ;
    text-align: start;
}






/*course*/
#course
{
 text-align: center;   
 padding: 8vw 8vw 0vw 8vw ;
}
#course .coursebox-line2
{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px ,1fr));
    grid-gap: 1rem;
    margin-top: 50px;

}
#course .coursebox-line1
{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px ,1fr));
    grid-gap: 1rem;
    margin-top: 50px;

}

#course .courses
{
    position: relative;
    text-align: start;
    height: 100%;
    /*background-color: #f98f27;*/
    background-color:#E9F6FF;
    box-shadow: 1px 1px 10px 1px rgb(204, 205, 216) ;
}

#course h2{

    align-items: center;
    text-shadow: 0px 0px 5px rgb(133, 133, 133);
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
    color: #280274;
    animation: fadeIn 2s infinite alternate ease-in-out;
}
#course .courses img
{
height: 60%;
width: 100%;
background-size: cover;
background-position: center;
}
#course .courses img:hover
{
        transition: transform 3s, filter 0.5s;
        overflow: hidden;
        height: 70%;
        opacity: 0.5;
        object-fit: cover;

}

#course .courses .details
{
    padding: 15px 15px 0px 15px;
     position: relative;

}

#course .courses i{
    font-size: 0.5rem;
   color:  rgb(205, 70, 46);
}
#course .courses .price
{
    background-color: #280274;
    color: white;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    bottom: 70px;
}

/*registration*/

#registration
{
    padding: 6vw 8vw 6vw 8vw;
    background-image: linear-gradient(rgba(29, 30, 230, 0.5),rgba(81,91,233,0.5)),url("https://t4.ftcdn.net/jpg/05/73/23/75/360_F_573237511_0xx9bbmXTIaCa9JqIHAJ5CzFzmpw5pT7.jpg");
    background-position: center;
    background-size:cover;
    width: 100%;
    height: 100%;
    margin-top:50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#registration .reminder
{
  color:white;
}
#registration .reminder h1{
    color: white;
}
#registration .reminder .time
{
   margin-top:40px ;
    display: flex;
}
#registration .reminder .time .date
{
  text-align: center;  
  padding: 10px 30px;
  background-color: rgba(255,255,255,0.20);
  backdrop-filter: blur(5px);
  box-shadow: 0px 8px 30px 0 rgba(37, 38, 146, 0.9);
  border-radius: 5px;
  margin: 0 5px 10px 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.1rem;
  font-weight: 600;
}

#registration .form
{
    margin: 20px 0px;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-shadow: 0px 8px 30px 0 rgba(37, 38, 146, 0.9);

}
#registration .form input{
    margin: 15px 0;
    padding: 15px 10px ;
    border: 1px solid rgba(21, 19, 19, 0.2);
    outline: none;

}
#registration .form h3{
    color: rgb(59, 59, 235);


}
#registration a.submit-btn{
    background-color: rgb(59, 59, 235);
    color: rgb(244, 238, 67);

    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s ease;
    text-decoration: none;
    padding: 10px 90px;
    width: 100%;
    }
    #registration a.submit-btn:hover{
        background-color: rgb(244, 238, 67);
        color: rgb(59, 59, 235);
        transition:1s ease-in-out;

        }



/*community in college page*/
#experts
{
    text-align: center; 
}

#experts .last
{
    margin: 0;
   align-items: center;
    text-shadow: 0px 0px 5px rgb(133, 133, 133);
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    color: #280274;
    animation: fadeIn 2s infinite alternate ease-in-out;
     padding-bottom: 40px;
}
.experts{
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #EFEFEF;
  
}
.slide-container{
    margin: 20px 0px;
    padding: 50px;
  max-width: 1120px;
  padding: 40px 0;
}

.slide-content{
  z-index: 20;      
  margin: 0 40px;
  overflow: hidden;
  border-radius: 25px;
}
.card1
{
    display: flex;
    flex-direction: row;
   
}
.card{
    border-radius: 25px;
    background-color: #FFF;
}
.image-content,
.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
}
.image-content{
  position: relative;
  row-gap: 5px;
  padding: 25px 0;

}
.overlay{

  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #280274;
  border-radius: 25px;
}
/*.overlay::before,
.overlay::after{
  content: '';
  position: absolute;
  right: 0;
  bottom: -40px;
  height: 40px;
  width: 40px;
  background-color: #280274;
}
.overlay::after{
  border-radius: 0 25px 0 0;
  background-color: #FFF;
}*/
.card-image{
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #FFF;
  padding: 3px;
}
.card-image .card-img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid orangered;
}
.name{
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
.description{
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button{
  border: none;
  font-size: 16px;
  color: #FFF;
  padding: 8px 16px;
  background-color: #4070F4;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover{
  background: #265DF2;
}

.swiper-navBtn{
  color: #6E93f7;
  transition: color 0.3s ease;
}
.swiper-navBtn:hover{
  color: #4070F4;
}
.swiper-navBtn::before,
.swiper-navBtn::after{
  font-size: 20px;
  color: orangered!important;
}
.swiper-button-next{
  right: 0;
}
.swiper-button-prev{
  left: 0;
}
.swiper-pagination-bullet{
  background-color: #6E93f7;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background-color: #4070F4;
}


@media screen and (max-width: 768px) {
  .slide-content{
    margin: 0 10px;
  }
  .swiper-navBtn{
    display: none;
  }
}

/*footer*/
#footer
{
    justify-content: center;
    background-color:#280274;
    height:auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgb(219, 211, 211);
}
.logo-h
{
    padding-top: 50px;
    margin-bottom: -20px;
    text-align: left;
    margin-left: 30px;
}
.ulist
{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    list-style: none;
    position: relative; /* Required for positioning pseudo-elements */
    width:100vw;

}
.ulist::before,
.ulist::after {
  content: "";
  display: block;
  border-top: 1px solid rgb(109, 100, 100);
  position: absolute;
  left: 0;
  right: 0;
}

.ulist::before {
  top: -5px;
}

.ulist::after {
  bottom: -5px;
}  
.socil-img
{
    height: 35px;
    width: 35px;
    margin: 4px;
}
.list1
{
    padding: 0;
    margin: 0;
}
.address {
    margin-top: 20px;
}
.row-text
{
    display: flex;
    align-items: center;
}
.add-logo {
    padding-top: 50px;
    margin-bottom: 20px;
}
.add-logo h3{
    text-align: left;
    margin-left: 30px;
    font-size: 25px;
    font-weight: normal;


}
.add-logo p {
    font-weight: normal;
    margin-left: 30px;
    text-align: left;
    font-size: 14px;
    justify-content: center;
}
.add-logo p a{
    color: rgb(219, 211, 211);
}

.img-logo {
    
    height: 120px;
    width: 120px;
    padding: 0;
}
.ulist1
{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center; /* Center the list items */
    padding: 0;
    list-style: none;
    position: relative; /* Required for positioning pseudo-elements */

}
.ulist1::before,
.ulist1::after {
  content: "";
  display: block;
  border-top: 1px solid rgb(109, 100, 100);
  position: absolute;
  left: 0;
  right: 0;
  width:100vw;

}

.ulist1::before {
  top: -5px;
}

.ulist1::after {
  bottom:15px;
}  
.ulist1 li {
    padding-left:5px; 
    text-align:center;
}
.ulist1 li img{
    width:35px;
}
.link li a{
    margin: 0;
    text-decoration: none;
    font-size: 14px;
    color: rgb(219, 211, 211);

}
/*for small devices*/
@media (max-width: 767px) {
    /*nvbarstart*/
    nav {
        padding: 10px 20px;
    }
    .home-title a {
        border-radius: 40%;
        padding: 0px 5px;
        font-size: 25px;
    }
        #menu-btn
    {
      display: initial;
    }
    #close-btn
    {
        color: #FFF;
         display:initial;
         margin-left: 120px;
         margin-top: 20px;

    }
    nav .navigation
    {
        display: flex;
    }
    nav .navigation ul {
        position: absolute;
        top: 0px;
        right:-220px;
        width:200px;
        height: 100vh;
        background-color: rgba(33, 94, 152, 0.5);
        backdrop-filter: blur(4.5px);
        border:1px solid rgb(66, 58, 58);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transition: 0.3s ease-in;
    
    }
    nav .navigation ul.active
    {
        right: 0;
    }
    nav .navigation ul li{
        padding: 20px 0 20px 20px;
        margin-left: 0;
    }
    nav .navigation ul li a{
    color: white;

}
.search-input input {
	background-color: white;
	border-radius: 5px;
	padding: 6px;
	border-color: black;
	border-width: 1px;
    margin-left: 15px;
    width: 120px;
}
.search-input 
{
    margin-top: 20px;
}

    /*nabar*/
   /* .add-logo {
        text-align: center;
    }
    .img-logo
    {
        padding-left: 0px;
        margin-left: -220px;
    }*/
    #home
    {
        margin-top: 55px;
    }
    
    #home .btn
     {
        display: flex;
        flex-direction: column;
    }
    #home a.two-btn {
     margin-top: 20px; 
   }
   #features .f-box1 h3 {
	font-size: 1.5rem;
  }
  #features .f-box1 p {
	font-size: 0.9rem;
   }
   #features1 h2 {
    font-size: 1.8rem;
    }
   #course h2 {
	font-size: 1.8rem;
    }
     
   #registration .reminder {
	color: white;
    font-size: 13px;
    }
    #registration .reminder h1 {
        font-size: 1.5rem;
         }
         #registration .reminder .time {
            margin: 40px;
            display: flex;
            flex-direction: column;
        }
        #registration a.submit-btn {
            font-size: 0.9rem;
            margin-left: -20px;
        }
        .experts {
            min-height: 0vh;
           padding: 30px 0px;        
        }

           #experts .last {
            
            font-size: 1.5rem;
            
        }
        .swiper-button-next::after, .swiper-button-prev::after {
         font-size:20px !important;
     }
    
    #features .f-box1 {
        font-size: 1.5rem;
    }
    #features .feature1
    {
        margin: 0 auto;
    }
    #course .course-box
    {
        margin: 0 auto;

    }
    
}
@media(min-width:400px) and (max-width:767px)
{
 .logo-h {
  text-align: left;
  margin-left: 50px;
}   
.img-logo {
    margin-left: 50px;
}  
.add-logo h3 {
    text-align: left;
    margin-left: 50px;
}
.add-logo p {
    margin-left: 50px ;
    width: 50%;
    text-align: left;
}
}
@media (max-width:400px)
{
    .img-logo {
        display: block;
        margin-left: 30px;
    }  
     
}

/*medium devices*/
@media only screen and (min-width: 768px) and (max-width: 1023px) 
    {
    body{
        width: 100%;
        }
        .img-logo {
            display: inline-block;
            text-align: left;      
          }  
    
    nav {
        padding: 10px 20px;
    }
    #home
{
    margin-top: 55px;
}

    .home-title a {
        border-radius: 40%;
        padding: 0px 5px;
        font-size: 25px;
    }
        #menu-btn
    {
      display: initial;
    }
    #close-btn
    {
        color: #FFF;
         display:initial;
         margin-left: 120px;
         margin-top: 20px;

    }
    nav .navigation
    {
        display: flex;
    }
    nav .navigation ul {
        position: absolute;
        top: 0px;
        right:-220px;
        width:200px;
        height: 100vh;
        background-color: rgba(18, 39, 59, 0.5);
        backdrop-filter: blur(4.5px);
        border:1px solid rgb(66, 58, 58);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transition: 0.3s ease-in;
    
    }
    nav .navigation ul.active
    {
        right: 0;
    }
    nav .navigation ul li{
        padding: 20px 0 20px 20px;
        margin-left: 0;
    }
    nav .navigation ul li a{
    color: white;

}
.search-input input {
	background-color: white;
	border-radius: 5px;
	padding: 6px;
	border-color: black;
	border-width: 1px;
    margin-left: 15px;
    width: 120px;
}
.search-input 
{
    margin-top: 20px;
}
.img-logo
{
    margin-left: 20px;
    float:left;
}


}

/*------------------first page end--------------*/




/*-----------2ndpage of a website start------------*/

        /*---------aboutus 2nd  page*-------------*/
        @media (max-width: 767px) {

        #aboutus {
            margin-top: 30px !important; 
            height: 50vh;
        }
    }
    
        @media only screen and (min-width: 768px) and (max-width: 1023px) 
    {
    #aboutus
    {
            margin-top: 30px !important; 
            height: 50vh;
        }   
    }

      #aboutus
        {
            position: relative;
            top:0;
            margin-top: 80px;
            background-position:center;
            background-size: cover;
            height: 50vh;
            background-image: linear-gradient(rgba(9,5,50,0.4),rgba(5,4,40,0.6)),url("https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 80px;
        }
       #aboutus h2{
            color: white;
            font-size: 5.2rem;
            font-weight: bold;
            text-transform: uppercase;
            
        }
      #aboutus
        p{
            width: 50%;
            font-size: 0.9rem;
            color: white;
        }
      #aboutus
        .btn{
            margin-top: 20px;
        
        }
      #aboutus
        a{
            text-decoration: none;
            background-color: white;
         border-radius: 10px;
         padding: 12px 20px;   
         color: black;
         font-weight: bold;
        
        }
        
        #aboutus a.one-btn{
            font-size: 1.2rem;
        background: none;
        color: rgb(244, 238, 67);
        font-weight: 550;
        }
        
        #aboutus a.two-btn
           {
            font-size: 1.2rem;
            font-weight: 550;

            background: none;
            color: rgb(59, 59, 235);
            }
            #aboutus .btn
            {
                border: none;
            }

            #aboutus .btn:hover
            {
                border: none;
            }
            #aboutus a.one-btn:hover
               {
                background: none;
                color: rgb(59, 59, 235);
                transition:ease-in 1s;
                border: none;
                }
                
                #aboutus a.two-btn:hover
                {
                background: none;
                color: rgb(244, 238, 67);
                transition:ease-in 1s;
                }
                #aboutus a.one-btn::after
                {
                    content: '';
                    height: 12px;
                    width: 1px;
                    margin-left: 40px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;
                                
                }
                #aboutus a.two-bt::before
                {
                    height: 12px;
                    width: 1px;
                    margin-left: 0px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;
                                
                }
                #about-container {
                    background-color: #f7f4f4;
                    display: flex;
                    flex-direction: row; /* Adjust flex-direction for smaller screens */
                    justify-content: left;
                }
                #about-container p
                {
                    text-align: left;
                }
                #video {
                    margin: 30px 0; 
                    display: block;
                    padding: 50px;
                }
                .about-text
                {
                    width: 50%;
                    margin: 0 20px;
                    padding: 50px;
                    text-align: center;
                }

                @media only screen and (max-width: 768px) {
                    #about-container {
                        flex-direction: column; /* Switch to column layout for smaller screens */
                        align-items: center; /* Center items vertically */
                    }
                
                    .about-text {
                        width: 100%; /* Make text take full width on smaller screens */
                        margin: 20px 0; /* Adjust margin for better spacing */
                    }
                
                    #video {
                        width: 100%;
                        padding: 20px; /* Adjust padding for smaller screens */
                    }
                    .head3
                    {
                        font-size: 30px!important;
                    }
                }
                
/*solltion start*/
.sollutions {
    margin: 50px;
    background-color: black;
}
    .sub-soll
    {
        padding: 20px;
        background-image: linear-gradient(to bottom right, #004383 0%, rgba(0, 37, 73, 0) 100%);

    }
    .soll-details
    {
        margin: 20px;
    }


.sollution h3{
    font-family: "Bebas Neue", sans-serif;    
    color: orangered;
    padding: 40px 0; 
    text-align: center;
    font-size: 40px;
}
.sol1
{
    padding: 20px;
    color: white;
    line-height: 2;
    list-style-type: disc;
    list-style-position: inside;
}
.sol1 li::marker{
    color: red;
}
.soll p {
    color: #000;
}
.sol1 h4{
    font-size: 30px;
    padding-bottom: 10px;
}
.red-line-heading {
    position: relative;
    display: inline-block;
  }
  
  .red-line-heading::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25%; /* Adjust as needed */
    height: 2px; /* Adjust thickness as needed */
    background-color: red;
  }
  

/*----sollution end*------------*/


/*testimonials start*/

.testimonials
{
    margin: 50px;

}
.client
{
    margin: 30px 0px;
    display: flex;
}
.client img{
    height: 60px;
    margin: 0 20px;
}
.head3{
    text-align: center;
    margin:30px 0;
    font-family: "Bungee Spice", sans-serif;
    font-weight: 600;
    font-size: 35px;
}
.client h5{
    color: orangered;

}


/*-------------about page end*-------------------/
/***********************************************/


/*******************services page start****************/


#service-page
        {
            position: relative;
            top:0;
            margin-top: 80px;
            background-position:center;
            background-size: cover;
            height: 50vh;
            background-image: linear-gradient(rgba(9,5,50,0.4),rgba(5,4,40,0.6)),url("https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 80px;
        }
        #service-page
        h2{
            color: white;
            font-size: 5.2rem;
            font-weight: bold;
            text-transform: uppercase;
            
        }
        #service-page
        p{
            width: 50%;
            font-size: 0.9rem;
            color: white;
        }
        #service-page
        .btn{
            margin-top: 20px;
        
        }
        #service-page
        a{
            text-decoration: none;
            background-color: white;
         border-radius: 10px;
         padding: 12px 20px;   
         color: black;
         font-weight: bold;
        
        }
        
        #service-page
        a.one-btn{
            font-size: 1.2rem;
        background: none;
        color: rgb(244, 238, 67);
        font-weight: 550;
        }
        
        #service-page
        a.two-btn
           {
            font-size: 1.2rem;
            font-weight: 550;

            background: none;
            color: rgb(59, 59, 235);
            }
            #service-page
             .btn
            {
                border: none;
            }

            #service-page
            .btn:hover
            {
                border: none;
            }
            #service-page
            a.one-btn:hover
               {
                background: none;
                color: rgb(59, 59, 235);
                transition:ease-in 1s;
                border: none;
                }
                
                #service-page
                a.two-btn:hover
                {
                background: none;
                color: rgb(244, 238, 67);
                transition:ease-in 1s;
                }
                #service-page
                a.one-btn::after
                {
                    content: '';
                    height: 12px;
                    width: 1px;
                    margin-left: 40px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;
                                
                }
                #service-page
            a.two-bt::before
                {
                    height: 12px;
                    width: 1px;
                    margin-left: 0px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;                     
                }
            
                #viewButton1
               {
                 display:block;
                }
                #viewButton2
                {
                    display: none;
                }
                .btnv1{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column; 
                };/
                .vbtn1
                 {]                    box-shadow: 1px 0 15px 5px rgb(51, 152, 61);
                    background-color: black;
                    color: white;
                    border-radius: 25px;
                    margin-top: 20px;
                    padding:5px 20px;
                    text-align: center;
                    font-size: 20px;
                    border: none;
                    font-weight: bold;
                 }
                 .vbtn1:hover
                  {
                    transition: all 2s;
                    background-color: white;
                    color: black;
                  }
                   





/****************service-page end***************/






/*******************blog page start****************/


#blog
        {
            position: relative;
            top:0;
            margin-top: 80px;
            background-position:center;
            background-size: cover;
            height: 50vh;
            background-image: linear-gradient(rgba(9,5,50,0.4),rgba(5,4,40,0.6)),url("https://www.shutterstock.com/image-photo/workspace-desk-keyboard-office-working-600nw-572386132.jpg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 80px;
        }
        #blog
        h2{
            color: white;
            font-size: 5.2rem;
            font-weight: bold;
            text-transform: uppercase;
            
        }
        #blog
        p{
            width: 50%;
            font-size: 0.9rem;
            color: white;
        }
        #blog
        .btn{
            margin-top: 20px;
        
        }
        #blog
        a{
            text-decoration: none;
            background-color: white;
         border-radius: 10px;
         padding: 12px 20px;   
         color: black;
         font-weight: bold;
        
        }
        
        #blog
        a.one-btn{
            font-size: 1.2rem;
        background: none;
        color: rgb(244, 238, 67);
        font-weight: 550;
        }
        
        #blog
        a.two-btn
           {
            font-size: 1.2rem;
            font-weight: 550;

            background: none;
            color: rgb(59, 59, 235);
            }
            #blog
            .btn
            {
                border: none;
            }

            #blog
            .btn:hover
            {
                border: none;
            }
            #blog
            a.one-btn:hover
               {
                background: none;
                color: rgb(59, 59, 235);
                transition:ease-in 1s;
                border: none;
                }
                
                #blog
                a.two-btn:hover
                {
                background: none;
                color: rgb(244, 238, 67);
                transition:ease-in 1s;
                }
                #blog
                a.one-btn::after
                {
                    content: '';
                    height: 12px;
                    width: 1px;
                    margin-left: 40px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;
                                
                }
                #blog
                a.two-bt::before
                {
                    height: 12px;
                    width: 1px;
                    margin-left: 0px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;                     
                }

/*****************blog-page end********************/





/*******************contactpage start****************/


#contact
        {
            position: relative;
            top:0;
            margin-top: 80px;
            background-position:center;
            background-size: cover;
            height: 50vh;
            background-image: linear-gradient(rgba(9,5,50,0.4),rgba(5,4,40,0.6)),url("https://img.freepik.com/premium-photo/contact-us-customer-support-hotline-people-connect-call-customer-support-email-address-live-chat-internet-wifi_36325-3415.jpg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 80px;
        }
        #contact
        h2{
            color: white;
            font-size: 2.2rem;
            font-weight: bold;
            
        }
        #contact
        p{
            width: 50%;
            font-size: 0.9rem;
            color: white;
        }
        #contact
        .btn{
            margin-top: 20px;
        
        }
        #contact
        a{
            text-decoration: none;
            background-color: white;
         border-radius: 10px;
         padding: 12px 20px;   
         color: black;
         font-weight: bold;
        
        }
        
        #contact
        a.one-btn{
            font-size: 1.2rem;
        background: none;
        color: rgb(244, 238, 67);
        font-weight: 550;
        }
        
        #contact
        a.two-btn
           {
            font-size: 1.2rem;
            font-weight: 550;

            background: none;
            color: rgb(59, 59, 235);
            }
            #contact
            .btn
            {
                border: none;
            }

            #contact
            .btn:hover
            {
                border: none;
            }
            #contact
            a.one-btn:hover
               {
                background: none;
                color: rgb(59, 59, 235);
                transition:ease-in 1s;
                border: none;
                }
                
                #contact
                a.two-btn:hover
                {
                background: none;
                color: rgb(244, 238, 67);
                transition:ease-in 1s;
                }
                #contact
                a.one-btn::after
                {
                    content: '';
                    height: 12px;
                    width: 1px;
                    margin-left: 40px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;
                                
                }
                #contact
                a.two-bt::before
                {
                    height: 12px;
                    width: 1px;
                    margin-left: 0px; /* Adjust this value as needed */
                    background-color: white; /* Changed 'color' to 'background-color' */
                    display: inline-block;                     
                }

/*************contact end***************/






                /* Media Query for Tablets and Smaller Devices */
@media only screen and (max-width: 768px) {
    #about-container {
        margin: 20px 0px; /* Reduce top and bottom margin */
    }
    #about-container p
    {
        margin: 10px;
    }

    .about-text {
        margin: 0 10px; /* Reduce side margins */
    }
}

/* Media Query for Mobile Devices */
@media only screen and (max-width: 480px) {
    #video {
        padding: 10px; /* Reduce padding */
    }

    .about-text {
        padding: 10px; /* Reduce padding */
    }
}
                .course_students1
                {
                    background-image: linear-gradient(rgba(13, 2, 2, 0.5), rgba(234, 229, 229, 0.1)), url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE1LWJnLTExZC14LmpwZw.jpg");
                    background-size: cover; 
                    background-position: center;
                    margin:50px;
                    padding: 20px;
                }
                .course_students1 h3
                {
                  padding: 20px;
                  text-align: center;
                  font-weight: 700;
                  font-size: 40px;
                }
.course_students 
{
    display: flex;
    justify-content: center;
    align-items: center;
}

.main_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.main-section-head
{
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
}

.sec1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px;       
    background-color: transparent;
}

.course_img {
    width: 250px;
    padding: 0px 30px;
}
.sec1-text
{
    display: flex;
    flex-direction: column;
}

#number, .crs1, .crs2 , .crs3 , .crs4 , #number1,#number2,#number3 {
    color: white;
    font-size: 35px;
    font-weight: 500;
}

@media screen and (max-width: 768px) {
    .course_students1
{
    padding: 10px;
}
    .course_img {
        width: 100px;
        padding: 0px 15px;
    }
    
    #number, .crs1, .crs2, #number1 {
        font-size: 20px;
    }
    .course_students1 h3
    {
       font-size: 35px;
    }

}
@media screen and (max-width: 480px) {
    .course_students1
    {
        padding: 10px;
        margin: 10px;
    }
    .course_students1 h3
    {
       font-size: 30px;
    }
    
    .course_img {
        width: 80px;
        padding: 0px 10px;
    }
    
    #number, .crs1, .crs2, #number1 {
        font-size: 15px;
    }
    
}













