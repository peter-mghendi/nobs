<template>
  <div class="col-span-1 hover:shadow rounded-xl">
    <img
      :src="game.imageUrl"
      :alt="game.name"
      class="rounded-xl mb-2 w-full h-auto"
    />
    <div class="p-4">
      <h3 class="text-xl text-left mb-2">{{ game.name }}</h3>
      <p class="mb-2">
                <strong>Platform:</strong> {{ game.platform }}
                <strong>Genres:</strong> {{ game.genres.join(", ") }}
                <strong>Price:</strong> ${{ game.price }}
                <strong>Rating:</strong> {{ game.rating.toFixed(2) }}
                <strong>Reviews:</strong> {{ game.reviews.toLocaleString() }}
        </p>
        <a :href="game.storeUrl" class="px-3 py-2 w-full rounded-xl hover:shadow-inner">
            Get it in the store
        </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Game } from "@/client";
import { PropType } from "vue";

@Options({
  props: {
    game: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
})
export default class GameItem extends Vue {
  game!: Game;
}
</script>