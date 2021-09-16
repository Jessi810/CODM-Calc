<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light">
                    <div class="container-fluid">
                        <!-- Navbar brand -->
                        <a class="navbar-brand">
                            <router-link :to="{ name: 'Home' }">CODM Calculator</router-link>
                        </a>

                        <!-- Toggle button -->
                        <button
                            class="navbar-toggler" type="button"
                            data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button>

                        <!-- Collapsible wrapper -->
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <router-link :to="{ name: 'Cheatsheet' }">Cheatsheet</router-link>
                                </li>

                                <span class="d-none d-lg-block">&nbsp;|&nbsp;</span>

                                <li class="nav-item">
                                    <router-link :to="{ name: 'Node' }">Clan War Node</router-link>
                                </li>

                                <span class="d-none d-lg-block">&nbsp;|&nbsp;</span>

                                <li class="nav-item">
                                    <router-link :to="{ name: 'Changelog' }">Changelog</router-link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav><!-- Navbar -->
            </div><!-- Column -->
        </div><!-- Row -->
    </div><!-- Container -->
</template>

<script>
export default {};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>