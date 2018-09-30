 <!doctype html>
  <html lang="en"> 
  <head> 
     <meta charset="UTF-8"> 
     <title></title> 
     <style type="text/css">
     span{
         display: inline-block;
         font-size: 40px;
         font-weight: 700;
         line-height: 40px;
         text-shadow: 0 1px 2px rgba(0,0,0,.1);
         -o-transform: rotate(45deg);
         -moz-transform: rotate(45deg);
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
     }
     button{
         font-size: 24px;
         letter-spacing: 15px;
         cursor: pointer;
         width: 300px;
         height: 44px;
         margin-top: 25px;
         padding: 0;
         background: #ef4300;
         -moz-border-radius: 6px;
         -webkit-border-radius: 6px;
         border-radius: 6px;
         border: 1px solid #ff730e;
         -moz-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset,
          0 2px 7px 0 rgba(0,0,0,.2);
         -webkit-box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset,
          0 2px 7px 0 rgba(0,0,0,.2);
         box-shadow: 0 15px 30px 0 rgba(255,255,255,.25) inset,
          0 2px 7px 0 rgba(0,0,0,.2);
         font-family: 'PT Sans', Helvetica, Arial, sans-serif;
         font-weight: 700;
         color: #fff;
         text-shadow: 0 1px 2px rgba(0,0,0,.1);
         -o-transition: all .2s;
         -moz-transition: all .2s;
         -webkit-transition: all .2s;
         -ms-transition: all .2s;
     }
     button:hover {
         -moz-box-shadow: 0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);
         -webkit-box-shadow: 0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);
         box-shadow: 0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);
     }
     </style>
     <script type="text/javascript" src="js/jquery-2.1.1.js"></script>
     <script type="text/javascript">
     $("button").click(function(){
         alert("nihao!");
 
    });
    </script>
</head>
<body>
 <span>+</span><br/>
 <button>点击</button>
 </body>
 </html>