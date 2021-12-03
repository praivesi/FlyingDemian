<template>
  <div>
    <div class="custom-header">Wants</div>
    <ul class="list-group m-1">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <div id="div-btns">
      <button class="btn btn-primary custom-btn">Add</button>
      <button class="btn btn-primary custom-btn">Update</button>
      <button class="btn btn-primary custom-btn">Remove</button>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';

export default {};

// $('#wnt-modal').modal('toggle');
</script>

<style>
#wnt-modal {
  display: block;
  background-color: firebrick;
  width: 300px;
  height: 200px;
}

.custom-header {
  margin-bottom: 10px;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;

  font-weight: bold;
  font-size: 20px;
}

.custom-btn {
  margin: 2px;
}

#div-btns {
  float: right;
}
</style>