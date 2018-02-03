<?php 
include('profile_header.php'); 
?>

		<!-- start calculator-->
		
         <section class="calculator">
		 <form>
		<center>
		<h1> Simple calculator </h1>
		 <input type="text" placeholder="&nbsp Enter first number" id="txtnum1"><br />
		   <input type="text" placeholder=" &nbsp Enter Second number" id="txtnum2"><br />
		   <h2> chice operator </h2>
		 <select id="select"   onchange="equal()"> <!--Supplement an id here instead of using 'name'-->
				
			  <option value="value1">+</option> 
			  <option value="value2" selected>-</option>
			  <option value="value3">*</option>
			  <option value="value3">/</option>
			  <option value="value3">%</option>
		</select>
		 <br />
		
		   
		 <input type="text" id="txtresult" placeholder=" &nbsp The Result"><br />
		 </center>
		 </section>
		 </form>
		 <!-- End Of calculator -->
	<div class="copyright text-center">
                Copyright &copy; 2014 <span>Your Template Name</span> .Inc
            </div>
         
        
        <!-- End Ultimate Footer Section -->
	 <script src="js/jquery-1.11.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        
        <script src="js/wow.min.js"></script>
        <script>new WOW().init();</script>
        <script src="js/cal.js"></script>
    </body>
</html>