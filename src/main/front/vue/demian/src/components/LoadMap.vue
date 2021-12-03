<template>
  <div>
    <div id="loadmap-page">
      <p class="custom-header">LoadMap</p>
      <div class="row loadmap-timeline">
        <div class="col custom-col">
          <button class="btn btn-primary custom-btn">Y</button>
          <button class="btn btn-primary custom-btn">M</button>
          <button class="btn btn-primary custom-btn">W</button>
        </div>
        <div class="col custom-col">2019</div>
        <div class="col custom-col">2020</div>
        <div class="col custom-col">2021</div>
        <div class="col custom-col">2022</div>
        <div class="col custom-col">2023</div>
      </div>
      <div class="row loadmap-content">
        <div class="col custom-col">Want 1</div>
        <div class="col custom-col">Job 2019</div>
        <div class="col custom-col">Job 2020</div>
        <div class="col custom-col">Job 2021</div>
        <div class="col custom-col">Job 2022</div>
        <div class="col custom-col">Job 2023</div>
      </div>
      <div class="row loadmap-content">
        <div class="col custom-col">Want 2</div>
        <div class="col custom-col">Job 2019</div>
        <div class="col custom-col">Job 2020</div>
        <div class="col custom-col">Job 2021</div>
        <div class="col custom-col">Job 2022</div>
        <div class="col custom-col">Job 2023</div>
      </div>
      <div class="custom-footer">
          <button class="btn btn-primary custom-btn">Want</button>
          <button class="btn btn-primary custom-btn">Wish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loadmap-timeline {
  background-color: mediumaquamarine;
  display: flex;
  justify-content: center;
}

.loadmap-content {
  background-color: lightskyblue;
  height: 100px;
}

.custom-btn {
  margin: 2px;
}

.custom-footer {
  height: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.custom-col {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loadmap-page {
  width: 100%;
  height: 100%;
}
</style>