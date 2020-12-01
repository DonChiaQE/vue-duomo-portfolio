<template>
  <div class="vstack">
    <div class="hstack">
      <div class="my-96"><h1>Photos</h1></div>
    </div>
    <!--div class="image-grid p-8">
      <img  src="../static/Analog1.jpg" />
      <img  src="../static/Analog2.jpg" />
      <img  src="../static/Analog3.jpg" />
      <img src="../static/Analog4.jpg" />
      <img src="../static/Analog5.jpg" />
      <img  src="../static/Analog6.jpg" />
      <img  src="../static/Analog7.jpg" />
      <img  src="../static/Analog8.jpg" />
      <img  src="../static/Analog9.jpg" />
    </div-->
    <div class="grid gap-8 p-8" style="grid-template-columns: repeat(auto-fill, minmax(448px, 1fr))">
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
	</div>
	<div style="--aspect-ratio: 16 / 9">
		<img class="radius-4 shadow-sm" src="https://images.unsplash.com/photo-1601758174039-617983b8cdd9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80">
	</div>
</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/*.image-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: 300px;
	gap: 0px;
}

.image-grid > * {
	width: 100%;
	height: 100%;
}*/

img {
	object-fit: cover;
}
</style>