<template>
  <div class="home p-4 md:p-8">
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <div class="col-span-1 hover:shadow rounded-xl">
        <img src="https://picsum.photos/600/400" alt="Image" class="rounded-xl mb-2 w-full h-auto"/>
        <div class="p-4">
          <h3 class="text-xl text-left mb-2">Item</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum eget nisl at ipsum tempor dignissim. Vestibulum eget
            nisl at ipsum tempor dignissim.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>
