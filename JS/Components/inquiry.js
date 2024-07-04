

const Inquiry = {
    template:`
    <div class="container border p-3" id="inquiry">
        <h1 class="text-center tomorrow">Inquiry Form</h1>
        <div class="row">
            <div class="col">
                <form method="post" action="thankyou.html">
                        <h3>User Details</h3>
                        <div class="row my-3">
                            <div class="col">
                                <div class="input-field">
                                    <input required="" id="email" name="email" type="text" v-model="email" @input="emailCheck"/>
                                    <label for="email" class="tomorrow">Enter your email 
                                        <div v-if="errors.email" class="text-danger">
                                            {{ errors.email }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col-md-6">
                                <div class="input-field">
                                    <input required="" id="name" name="name" type="text" v-model="name"  @input="nameCheck"/>
                                    <label for="name" class="tomorrow">Enter your name
                                        <div v-if="errors.name" class="text-danger">
                                            {{ errors.name }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-field">
                                    <input required="" id="number" name="number" type="text"  v-model="number"  @input="numberCheck"/>
                                    <label for="number"  class="tomorrow">Enter your phone number
                                        <div v-if="errors.number" class="text-danger">
                                            {{ errors.number }}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col text-center select-type my-3">
                            <label class="tomorrow h4">Select Inquiry Type</label>
                            <br>
                            <select name="inquiry_type" id="inquiry_type" class="w-100 fs-5 text-center" v-model="selectedInquiryType">
                                <option value="General Inquiry" selected>General Inquiry</option>
                                <option value="Rental">Rental</option>
                                <option value="Feedback">Feedback</option>
                            </select>
                            </div>
                        </div>
                        <div class="row" v-if="selectedInquiryType === 'Rental'">
                            <div class="col-12 text-center select-type my-3">
                            <label class="tomorrow h4">Rental Models</label>
                            <br>
                            <select name="car" id="car" class="car-options w-50" v-model="rental_model">
                                <option v-for="car in allCars" :selected="selectedCarName === car.name" :value="car.name">{{ car.name }} - RM{{car.rate}}/day</option>
                            </select>
                            </div>
                            
                            <div class="col-6 text-center">
                                <label for="rental_date" class="tomorrow">Rental Date</label>
                                <br>
                                <input required="" id="rental_date" v-model="rental_date" name="rental_date" type="date"/>
                            </div>
                            <div class="col-6 text-center">
                                <label for="return_date" class="tomorrow">Return Date</label>
                                <br>
                                <input required="" id="return_date" v-model="return_date"  name="return_date" type="date"/>
                            </div>
                            <div class="col my-3 text-center">
                                <label for="collection_time" class="tomorrow">Collection Time 
                                </label>
                                <br>
                                <input required="" id="collection_time" name="collection_time" type="time" v-model="collection_time"/>
                            </div>
                            <div class="col my-3 text-center">
                                <label for="Return Time" class="tomorrow">Return Time</label>
                                <br>
                                <input required="" id="return_time" name="Return Time" type="time" v-model="return_time"/>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p><strong>Terms & Conditions:</strong></p>
                                    <p>This agreement represents the customer's desired rental terms:</p>
                                    <ul>
                                        <li>Rental Model: {{ rental_model }}</li>
                                        <li>Rental Date: {{ rental_date }}</li>
                                        <li>Return Date: {{ return_date }}</li>
                                        <li>Collection Time: {{ collection_time }}</li>
                                        <li>Return Time: {{ return_time }}</li>
                                    </ul>
                                    <p>The company will contact the customer using the provided information to confirm the availability of the rental.</p>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col select-type my-3 text-center">
                                <label for="comment" class="tomorrow h4">Comments</label><br>
                                <textarea name="comment" id="comment" rows="5" class="w-100 comment" placeholder="Leave blank if no comment. Our team will reach out to you through the provided details."></textarea>
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-center">
                                <div v-if="!hasErrors()">
                                    <input type="submit" class="btn btn-primary" value="Submit">
                                </div>
                                <div v-else>
                                    <input type="submit" class="btn btn-primary" value="Submit" disabled>
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </div>
        
    </div>
    `,
    data() {
        return {
            allCars: [],
            rental_model: "",
            name: "",
            email: "",
            number: "",
            comments: "",
            selectedInquiryType: 'General Inquiry',
            rental_date: "",
            return_date: "",
            collection_time: "",
            return_time: "",
            selectedCarName: "",
            errors: {}
        };
    },
    mounted() {
        fetch('JS/JSON/allCars.json')
            .then(response => response.json())
            .then(data => {
                this.allCars = data;
            });

            

        this.$nextTick(() => {
            if (this.$route.params.carName) {
                this.selectedInquiryType = 'Rental';
                this.selectedCarName = this.$route.params.carName;
                this.rental_model = this.$route.params.carName;
            }
            rentalInit();
        });
    },
    methods: {
        emailCheck() {
            if (!this.email.trim()) {
                this.errors.email = 'Email is required';
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(this.email.trim())) {
                this.errors.email = 'Invalid email format';
            } else {
                this.errors.email = null;
            }
        },
        nameCheck() {
            if (!this.name.trim()) {
                this.errors.name = 'Name is required';
            } else if (!/^[A-Za-z\s]+$/.test(this.name.trim())) {
                this.errors.name = 'Name must contain letters only';
            } else {
                this.errors.name = null;
            }
        },
        numberCheck() {
            if (!this.number.trim()) {
                this.errors.number = 'Mobile Number is required';
            } else if (!/\d{8,15}$/.test(this.number.trim())) {
                this.errors.number = 'Mobile number must be between 8 and 15 digits';
            } else {
                this.errors.number = null;
            }
        },
        hasErrors() {
            for (let key in this.errors) {
                if (this.errors[key] !== null) {
                    return true;
                }
            }
            return false;
        }
    }
}

function getParameter(name) {
    
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function limitDate(minDate, elementId, limit) {
    document.getElementById(elementId).setAttribute(limit, minDate);
}
function rentalInit(){
    var rentalDateChangeHandler = function() {
        var rentalDateValue = document.getElementById("rental_date").value;
        var rentalDate = new Date(rentalDateValue);
        rentalDate.setDate(rentalDate.getDate() + 1);
        var nextDay = rentalDate.toISOString().split("T")[0];
        limitDate(nextDay, "return_date", 'min');
    };

    var returnDateChangeHandler = function() {
        var returnDateValue = document.getElementById("return_date").value;
        var returnDate = new Date(returnDateValue);
        returnDate.setDate(returnDate.getDate() - 1);
        var dayBefore = returnDate.toISOString().split("T")[0];
        limitDate(dayBefore, "rental_date", 'max');
    };

    var updateDateLimits = function() {
        var today = new Date().toISOString().split("T")[0];
        limitDate(today, "rental_date", 'min');
        limitDate(today, "return_date", 'min');

        if (document.getElementById("inquiry_type").value === "Rental") {
            document.getElementById("rental_date").addEventListener("change", rentalDateChangeHandler);
            document.getElementById("return_date").addEventListener("change", returnDateChangeHandler);
        } else {
            document.getElementById("rental_date").removeEventListener("change", rentalDateChangeHandler);
            document.getElementById("return_date").removeEventListener("change", returnDateChangeHandler);
        }
    };

    document.getElementById("inquiry_type").addEventListener("change", updateDateLimits);
    updateDateLimits();
}

