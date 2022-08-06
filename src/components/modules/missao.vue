<template>
  <v-list-item v-if="item" :ripple="{ class: 'primary--text' }" @click="open = !open">
    <v-list-item-avatar tile>
      <img
        :src="`${$baseURL}/achievements/${item.gfx}.png`"
        alt=""
        @error="$event.target.src = `${$baseURL}/achievements/1.png`"
      />
    </v-list-item-avatar>
    <v-list-item-content>
      <div>
        <Tooltip label="Repetível">
          <v-icon v-if="item.repeatable" small>bi-arrow-counterclockwise</v-icon>
        </Tooltip>
        {{ item.name }}
        <span v-if="!!item.lvl" class="body-2">(Nível {{ item.lvl }})</span>
        <v-chip v-if="tempo" x-small label color="grey darken-4" class="px-2 ml-1">
          <v-icon x-small class="mr-1">bi-clock</v-icon>
          {{ tempo }}
        </v-chip>
      </div>

      <v-expand-transition>
        <div v-if="open">
          <Criteria :criterio="item.activation_criterion" />
          <p class="caption grey--text text--lighten-1 my-1" v-html="item.desc" />
          <v-card v-if="(item.goals || []).length > 0" outlined rounded="lg" class="mt-2">
            <v-card-text class="pa-1 caption">
              <ol>
                <li v-for="(goal, i) in item.goals" :key="`g${i}`">
                  {{ goal.text }}
                </li>
              </ol>
            </v-card-text>
          </v-card>

          <template v-if="(item.rewards || []).length > 0">
            <h2 class="body-2 font-weight-medium my-1">Recompensas</h2>
            <Reward v-for="(reward, i) in item.rewards" :key="`c${i}`" :reward="reward" />
          </template>
        </div>
      </v-expand-transition>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { Duration } from 'luxon';
import Reward from './reward';
import Tooltip from '../layout/tooltip';
import Criteria from './criteria';

export default {
  name: 'Missao',
  components: { Criteria, Tooltip, Reward },
  props: {
    item: { type: Object, default: null }
  },
  data: () => ({
    open: false
  }),
  computed: {
    duration() {
      if (!this.item.duration) return null;
      return Duration.fromMillis(this.item.duration).toFormat('hh:mm');
    },
    cooldown() {
      if (!this.item.cooldown) return null;
      return Duration.fromMillis(this.item.cooldown * 1000).toFormat('hh:mm');
    },
    period() {
      if (!this.item.period) return null;
      return Duration.fromMillis(this.item.period * 1000).toFormat('hh:mm');
    },
    tempo() {
      return (this.period || this.duration || this.cooldown || '').replace(':00', 'h');
    }
  }
};
</script>
