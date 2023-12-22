<template>
  <div class="py-5 page container">
    <div class="container">
        <div class="text-center">
            <h5 class="text-pink section-title mb-05">Team Members</h5>
            <h1 class="mb-2">Our Master Chefs</h1>
        </div>
        <div class="row">
            <div class="col-3 fadeInUp animated" animation-delay:0.1s>
                <div class="team-item text-center overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-1">
                        <img src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" class="img-fluid">
                    </div>
                    <h2>Full Name</h2>
                    <small>Designation</small>
                    <div class="d-flex mt-1 justify-content-center">
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-item text-center overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-1">
                        <img src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" class="img-fluid">
                    </div>
                    <h2>Full Name</h2>
                    <small>Designation</small>
                    <div class="d-flex mt-1 justify-content-center">
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-item text-center overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-1">
                        <img src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" class="img-fluid">
                    </div>
                    <h2>Full Name</h2>
                    <small>Designation</small>
                    <div class="d-flex mt-1 justify-content-center">
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="team-item text-center overflow-hidden">
                    <div class="rounded-circle overflow-hidden m-1">
                        <img src="https://themewagon.github.io/restoran/img/team-1.jpg" alt="" class="img-fluid">
                    </div>
                    <h2>Full Name</h2>
                    <small>Designation</small>
                    <div class="d-flex mt-1 justify-content-center">
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                        </a>
                        <a href="" class="btn btn-pink btn-square mx-05">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-title::before {
    position: absolute;
    content: "";
    width: 45px;
    height: 2px;
    top: 50%;
    left: -55px;
    margin-top: -1px;
    background: var(--pink-light);
}
.team-item {
    box-shadow: 0 0 45px rgba(0, 0, 0, .08);
    height: calc(100% - 38px);
    transition: .5s;
}
.team-item:hover {
    height: 100%;
}
.team-item .btn {
    border-radius: 38px 38px 0 0;
}
.btn-square {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 2px;
    width: 38px;
    height: 38px;
}
</style>