<template>
    <div class="page container bg-dark px-2 mt-3 footer pb-3">
        <div class="row py-5 px-2">
            <div class="col-3">
                <h3 class="h3 section-title text-white mb-1">
                    Company
                </h3>
                <a href="#" class="btn-link text-white mb-05"><font-awesome-icon icon="fa-solid fa-angle-right" /> About Us</a>
                <a href="#" class="btn-link text-white mb-05"><font-awesome-icon icon="fa-solid fa-angle-right" /> Contact Us</a>
                <a href="#" class="btn-link text-white mb-05"><font-awesome-icon icon="fa-solid fa-angle-right" /> Reservation</a>
                <a href="#" class="btn-link text-white mb-05"><font-awesome-icon icon="fa-solid fa-angle-right" /> Terms & Condition</a>
            </div>
            <div class="col-3">
                <h3 class="h3 section-title text-white mb-1">
                    Contact
                </h3>
                <p class="text-white mb-05"><font-awesome-icon icon="fa-solid fa-location-dot" class="me-1"/>123 Street, Ha Noi, VietNam</p>
                <p class="text-white mb-05"><font-awesome-icon icon="fa-solid fa-phone" class="me-1" />+012 345 67890</p>
                <p class="text-white mb-05"><font-awesome-icon icon="fa-solid fa-envelope" class="me-1" />info@example.com</p>
                <div class="d-flex mt-1">
                    <a href="#" class="btn-social"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                    <a href="#" class="btn-social"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                    <a href="#" class="btn-social"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                    <a href="#" class="btn-social"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                </div>
            </div>
            <div class="col-3">
                <h3 class="h3 section-title text-white mb-1">
                    Opening
                </h3>
                <div class="mb-1 text-white">
                    <h3 class="mb-05">Monday - Saturday</h3>
                    <p>09AM - 09PM</p>
                </div>
                <div class="mb-1 text-white">
                    <h3 class="mb-05">Sunday</h3>
                    <p>10AM - 08PM</p>
                </div>
            </div>
            <div class="col-3">
                <h3 class="h3 section-title text-white mb-1">
                    Newsletter
                </h3>
                <p class="text-white mb-1">Dolor amet sit justo amet elitr clita ipsum elitr est</p>
                <div class="d-flex position-relative">
                    <input type="text" class="p-2 w-100 fs-1" placeholder="Your Email">
                    <button class="position-absolute btn-pink btn-signup">Sign Up</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
.position-relative {
    position: relative;
}
.position-absolute {
    position: absolute;
}
.h3 {
    font-size: 24px;
    font-weight: 700;
}
.bg-dark {
    background-color: #0F172B !important;
}
.btn-link {
    text-decoration: none;
    display: block;
    transition: all .3s;
}
.footer .btn-link:hover {
    letter-spacing: 1px;
}

.footer .btn-social {
    margin-right: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 1px solid #FFFFFF;
    border-radius: 35px;
    transition: .3s;
}
.footer .btn-social:hover {
    background-color: #fff;
    color: #f87582;
}
.btn-signup {
    right: 0;
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    margin-top: 8px;
}
</style>