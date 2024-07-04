const Index = {
    template:`
    <div>
    <header>
            <div class="main_content_index">
                <div class="container d-flex flex-column align-items-center ">
                    <div class="blob_container"></div>
                    <h1 class="m-0">911 PULSE</h1>
                    <img src="Image/main_product_highlight.png" alt="Porsche Carrera" class="img-fluid main_img">
                    <h2 class="">EXPERIENCE THE ART OF PERFORMANCE</h2>
        
                    <button onclick="scrollToFeatures()" class="discover_more learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                        <span class="button-text">Learn More</span>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- Main Features -->
        <div id="features" class="feature_content">
            <div class="container">
                <h2 class="feauture_heading text-center display-4 pt-3">Meet the rentals</h2>
                <div class="row text-center">
                    <div class="col-md-4 feature my-3">
                        <div class="container daily">
                            <h3 class="mt-4">Daily</h3>
                            <img src="Image/911_carrera.png" alt="Daily" class="img-fluid w-100">
                            <p class="feature_text">Experience Porsche thrills affordably with our Daily Rental service. Perfect for everyday drives and spontaneous adventures.</p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 feature my-3">
                        <div class="container family">
                            <h3 class="mt-4">Family</h3>
                            <img src="Image/family_index_icon-removebg-preview.png" alt="Family" class="img-fluid w-100">
                            <p class="feature_text">Experience luxury and safety combined with our Family Rental service. Our Porsche models boast spacious interiors, advanced safety features, and premium amenities, ensuring a comfortable and secure journey for your family.</p>
                        </div>
                    </div>
                    <div class="col-md-4 feature my-3">
                        <div class="container luxury">
                            <h3 class="mt-4">Luxury</h3>
                            <img src="Image/911_turbo.png" alt="Luxury" class="img-fluid w-100">
                            <p class="feature_text">Experience automotive luxury with our Luxury Rental service, featuring rare and exclusive Porsche models.</p>
                        </div>
                    </div>
                    
                </div>
                <p class="feauture_heading text-center display-4 pt-3 mt-5">About Pulse Dream</p>

                <div class="about-us d-flex align-items-center justify-content-center text-center">
                    <div class="container w-100">
                        <div class="row">
                            <div class="col">
                                <p class="fs-5 feature_text ">Porsche Pulse is your premier online destination exclusively devoted to renting out the iconic Porsche 911 models. With an unwavering dedication to automotive excellence and precision engineering, Porsche Pulse offers enthusiasts and aficionados an exhilarating journey into the world of Porsche's legendary sports cars, guaranteeing an unforgettable rental experience. Explore our diverse selection of rental categories, including daily, family, and luxury options, tailored to suit every driving preference and occasion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
}