<template>
  <div class="home p-4 md:p-8">
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" v-if="games">
      <GameItem v-for="game in games.data" :key="game.id" :game="game" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { Game, getGamesAsync, Response } from "@/client";
import GameItem from "@/components/GameItem.vue";
import { Options, Vue } from "vue-class-component";

@Options({ components: { GameItem } })
export default class Home extends Vue {
  games = null as Response<Game[]> | null;

  async created() {
    this.games = await getGamesAsync();
  }
}
</script>
