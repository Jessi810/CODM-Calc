<template>
  <div class="container">
    <div class="row justify-content-center my-3">
      <div class="col-sm-10 col-md-8">
        <!-- Pills navs -->
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="ex3-tab-1"
              data-mdb-toggle="pill"
              href="#ex3-pills-1"
              role="tab"
              aria-controls="ex3-pills-1"
              aria-selected="true">
              Task: For each kill/capture/etc.
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex3-tab-2"
              data-mdb-toggle="pill"
              href="#ex3-pills-2"
              role="tab"
              aria-controls="ex3-pills-2"
              aria-selected="false">
              Task: For each match
            </a>
          </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content" id="ex2-content">
          <div
            class="tab-pane fade show active"
            id="ex3-pills-1"
            role="tabpanel"
            aria-labelledby="ex3-tab-1">

            <Task1 />

          </div>
          <div
            class="tab-pane fade"
            id="ex3-pills-2"
            role="tabpanel"
            aria-labelledby="ex3-tab-2">
            
            <Task2 />

          </div>
        </div>
        <!-- Pills content -->
      </div>
    </div>
  </div>
</template>

<script>
import Task1 from '@/components/CWNode/Task1.vue'
import Task2 from '@/components/CWNode/Task2.vue'

export default {
  components: {
    Task1,
    Task2
  }
}
</script>

<style>
</style>