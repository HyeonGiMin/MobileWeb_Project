<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Detail</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Photo</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "testNav.vue"
    }
</script>

<style scoped>
    nav {
        display: block;
    }
    .navbar-brand {
        float: left;
        height: 50px;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
    }
    .navbar-brand:hover,
    .navbar-brand:focus {
        text-decoration: none;
    }
    .navbar-brand > img {
        display: block;
    }

    .navbar-default navbar-form {
        border-color: #e7e7e7;
    }.navbar-nav {
         margin: 7.5px -15px;
     }
    .navbar-nav > li > a {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 20px;
    }
    @media (max-width: 767px) {
        .navbar-nav .open .dropdown-menu {
            position: static;
            float: none;
            width: auto;
            margin-top: 0;
            background-color: transparent;
            border: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
</style>