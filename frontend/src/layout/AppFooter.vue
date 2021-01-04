<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">

                <div class="col-lg-6 text-lg-center btn-wrapper">
                </div>
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">함께 즐기면 더 재밌는 볼링</h3>
                    <h4 class="mb-0 font-weight-light">More fun bowling when we can enjoy it.</h4>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6 col-6">
                    <div class="copyright">
                        &copy; {{year}}
                    </div>
                </div>
                <div class="col-6  col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/HyeonGiMin" class="nav-link" target="_blank" rel="noopener">About Us</a>
                        </li>
                        <li class="nav-item">

                        </li>
                        <li class="nav-item">

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
