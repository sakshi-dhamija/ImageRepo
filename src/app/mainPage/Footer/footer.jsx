import React from "react"
class Footer extends React.Component
{
    render()
    {
        return(
            <footer class="Footer" id="Footerid">
  <div class="container">
    <div class="row ">
      <div class="col-lg-4 col-md-6 col-12 Footer-id ">
        <div class="flex">
          <h3>Hamza Ashfaq</h3>
          <p>The world has become so fast paced that people don'y want to 
            stand by reading a page of information to be they would much
            ratther look at a presentation and understand the message.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 text-center">
      <p>Copyright @2020 All rights reserved | This Templatr is made with love by Hamza Ashfaq.</p>
    </div>
     <div class="scrolltop float-right">
        <i class="fa fa-arrow-up" onclick="topFunction()" id="myBtn"></i>
     </div>
  </div>

</footer>

        )
    }
}

export default Footer