const Daily = {
    template: `
      <div style="background-color: #2b2b2b;">
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-12 my-3">
              <span class="text-light h1">Filter By</span>
              <div class="row">
                <div class="col text-light m-auto">
                  <p><label for="code">Name:</label>
                    <input type="text" id="Name" v-model="Filter.name" />
                  </p>
                </div>
                <div class="col text-light">
                  <label>Transmission Type:</label>
                  <br>
                  <input class="mx-1" type="radio" id="all" v-model="Filter.transmission" value="All" checked>
                  <label for="all">All</label>
                  <br>
                  <input class="mx-1" type="radio" id="automatic" v-model="Filter.transmission" value="Automatic">
                  <label for="automatic">Automatic</label>
                  <br>
                  <input class="mx-1" type="radio" id="manual" v-model="Filter.transmission" value="Manual">
                  <label for="manual">Manual</label>
                </div>
                <div class="col">
                  <div class="price-input-container">
                    <div class="price-input">
                      <div class="price-field">
                        <span class="text-light">Minimum Price</span>
                        <input type="number" class="min-input" value='0' v-model.number="Filter.minPrice" readonly>
                      </div>
                      <div class="price-field">
                        <span class="text-light">Maximum Price</span>
                        <input type="number" class="max-input" value='2000' v-model.number="Filter.maxPrice" readonly>
                      </div>
                    </div>
                    <div class="slider-container">
                      <div class="price-slider"></div>
                    </div>
                  </div>
                  <div class="range-input">
                    <input type="range" class="min-range" min="0" max="2000" v-model.number="Filter.minPrice">
                    <input type="range" class="max-range" min="0" max="2000" v-model.number="Filter.maxPrice">
                  </div>
                </div>
              </div>
            </div>
            <div v-for="car in filterCar" class="col-lg-5 col-md-9 mx-5 mx-auto">
                    <div class="img-container car-card">
                        <div class="front-card bg-light">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" id="info-button" class="info-button" height="50" viewBox="0 -960 960 960" width="50" >
                                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                            <img :src="'Image/' + car.image" :alt="car.name" class="car_img img-fluid mx-auto">
                        </div>
                        <div class="back-card">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="50" id="close-button" class="close-button" viewBox="0 -960 960 960" width="50"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            <div class="back-card-text   mt-5 p-3">
                                {{car.description}}
                            </div>
                        </div>
                    </div>
                    <div class="car-info text-left">
                        <div class="d-flex justify-content-between">
                            <p class="text-light car-name tomorrow d-inline">{{car.name}} </p>
                            <span class="tomorrow d-inline fs-5 text-warning car-price">RM{{car.rate}}<span class="text-light">/day</span></span>
                        </div>
                        <div class="car-features mb-4">
                            <div class="row"> 
                                <div  class="col d-flex flex-column align-items-center justify-content-center">
                                    <svg class="seat_size_icon" fill="#91D475" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    viewBox="0 0 512 512" xml:space="preserve"><g>	<g>		<path d="M506.583,9.847C501.727,3.635,494.286,0,486.402,0h-256c-6.793,0-13.303,2.697-18.099,7.501l-204.8,204.8			c-4.804,4.796-7.501,11.307-7.501,18.099v256c0,14.14,11.46,25.6,25.6,25.6h409.6c14.14,0,25.6-11.46,25.6-25.6V233.549			l50.432-201.745C513.145,24.158,511.43,16.06,506.583,9.847z M435.202,486.4h-409.6V256h409.6V486.4z M435.202,230.4h-409.6			l204.8-204.8h256L435.202,230.4z"/>	</g></g><g>	<g>		<rect x="332.802" y="281.6" width="76.8" height="25.6"/>	</g></g>
                                    </svg>
                                    <span class="text-light mt-1">
                                        {{car.seats}}
                                    </span>
                                </div>
                                <div  class="col d-flex flex-column align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35"  width="35"fill="#91D475" viewBox="0 -960 960 960" ><path d="M160-120q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-254q-35-12-57.5-43T40-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T200-607v87h240v-87q-35-12-57.5-43T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-607v87h200q17 0 28.5-11.5T760-560v-47q-35-12-57.5-43T680-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-607v47q0 50-35 85t-85 35H520v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87H200v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm0-480q17 0 28.5-11.5T200-720q0-17-11.5-28.5T160-760q-17 0-28.5 11.5T120-720q0 17 11.5 28.5T160-680Zm320 480q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm0-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm320 0q17 0 28.5-11.5T840-720q0-17-11.5-28.5T800-760q-17 0-28.5 11.5T760-720q0 17 11.5 28.5T800-680ZM160-240Zm0-480Zm320 480Zm0-480Zm320 0Z"/></svg>
                                    <span class="text-light mt-1">
                                        {{car.transmission}}
                                    </span>
                                </div>
                                <div class="col d-flex flex-column align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="#91D475" viewBox="0 -960 960 960" width="35">
                                        <path d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-200h240v-280H240v280Zm240 0H240h240Z"/>
                                    </svg>
                                    <span class="text-light mt-1">
                                        {{car.fuel}}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="inquire_btn_container text-center tomorrow">
                        <router-link :to="{ name: 'inquiry', params: { carName: car.name }}" class="inquire_btn_container text-center tomorrow">
                            <button class="inquire-btn">Inquire now</button>
                        </router-link>    
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        Filter: { name: '', transmission: 'All', minPrice: 0, maxPrice: 2000 },
        dailyCars : []
      };
    },
    computed: {
      filterCar() {
        return this.dailyCars.filter(car =>
          (car.name.toLowerCase().includes(this.Filter.name.toLowerCase())) &&
          (car.rate >= this.Filter.minPrice && car.rate <= this.Filter.maxPrice) &&
          (this.Filter.transmission === 'All' || car.transmission === this.Filter.transmission)
        );
      }
    },
    mounted() {
      this.initRangeSliders();
      fetch('JS/JSON/daily.json').then(response => response.json()).then(data => {
        this.dailyCars = data
        console.log(this.dailyCars)
      })
    },
    methods: {
      initRangeSliders() {
        const rangevalue = document.querySelector(".slider-container .price-slider");
        const rangeInputvalue = document.querySelectorAll(".range-input input");
  
        let priceGap = 500;
  
        const priceInputvalue = document.querySelectorAll(".price-input input");
        for (let i = 0; i < priceInputvalue.length; i++) {
          priceInputvalue[i].addEventListener("input", (e) => {
            let minp = parseInt(priceInputvalue[0].value);
            let maxp = parseInt(priceInputvalue[1].value);
            let diff = maxp - minp;
  
            if (minp < 0) {
              alert("minimum price cannot be less than 0");
              priceInputvalue[0].value = 0;
              minp = 0;
            }
  
            if (maxp > 2000) {
              alert("maximum price cannot be greater than 2000");
              priceInputvalue[1].value = 2000;
              maxp = 2000;
            }
  
            if (minp > maxp - priceGap) {
              priceInputvalue[0].value = maxp - priceGap;
              minp = maxp - priceGap;
  
              if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
              }
            }
  
            if (diff >= priceGap && maxp <= 2000) {
              if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
              } else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
              }
            }
          });
  
          for (let i = 0; i < rangeInputvalue.length; i++) {
            rangeInputvalue[i].addEventListener("input", (e) => {
              let minVal = parseInt(rangeInputvalue[0].value);
              let maxVal = parseInt(rangeInputvalue[1].value);
  
              let diff = maxVal - minVal;
  
              if (diff < priceGap) {
                if (e.target.className === "min-range") {
                  rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                  rangeInputvalue[1].value = minVal + priceGap;
                }
              } else {
                priceInputvalue[0].value = minVal;
                this.Filter.minPrice = minVal;
                this.Filter.maxPrice = maxVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
              }
            });
          }
        }
      }
    }
  };

