<template>
<h1>
    {{ total }}
</h1>

<label for="inputGroupPoints">Points for each kill/capture/etc.</label>
<div id="inputGroupPoints" class="input-group mb-3">
    <input
    type="range"
    class="form-control w-75"
    step="1"
    min="0"
    max="100"
    v-model="points"
    @input="computePoints" />
    <input
    type="number"
    class="form-control w-25"
    min="0"
    max="100"
    v-model="points"
    @change="computePoints" />
</div>

<label for="inputGroupCounts">Number of kill/capture/etc.</label>
<div id="inputGroupCounts" class="input-group mb-3">
    <input
    type="range"
    class="form-control w-75"
    step="1"
    min="0"
    max="1000"
    v-model="counts"
    @input="computePoints" />
    <input
    type="number"
    class="form-control w-25"
    min="0"
    max="1000"
    v-model="counts"
    @change="computePoints" />
</div>

<div class="form-check">
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" id="teamBonus" value="30" v-model="bonus[0]" @change="computePoints">
    Prematch Team Bonus (+30%)
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" id="bpBonus" value="20" v-model="bonus[1]" @change="computePoints">
    Battle Pass Bonus (+20%)
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" id="keyBonus" value="30" v-model="bonus[2]" @change="computePoints">
    Key Goal Bonus (+30%)
    </label>
</div>
<div class="form-check">
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" id="dailyBonus" value="200" v-model="bonus[3]" @change="computePoints">
    Daily Bonus (+200%)
    </label>
</div>

<br>
<strong>Tasks include:</strong>
<br>
<ul>
    <li>
        Be Sieged: Kill zombies in Undead Siege - Hard. Each kill earns 3 points.
    </li>
    <li>
        Domination: Capture objectives in Ranked or Normal Domination. Each capture earns 20 points.
    </li>
    <li>
        Private Custom: Pick up a customized weapon from the Airdrop in Battle Royale - Classic. Each pickup earns 30 points.
    </li>
    <li>
        Summer Knockdown: Kill enemies with a melee weapon in Summer Showdown. Each kill earns 15 points.
    </li>
    <li>
        King of Gun Game: Kill enemies in Gun Game Moshpit. Each kill earns 10 points.
    </li>
    <li>
        And so on...
    </li>
</ul>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const bonus = ref([0, 0, 0, 0])
        const total = ref(0)
        const points = ref(10)
        const counts = ref(10)

        const computePoints = () => {
            let b0 = bonus.value[0] == true ? 0.3 : 0
            let b1 = bonus.value[1] == true ? 0.2 : 0
            let b2 = bonus.value[2] == true ? 0.3 : 0
            let b3 = bonus.value[3] == true ? 2.0 : 0

            let tBonus = b0 + b1 + b2 + b3
            let tTotal = points.value * counts.value

            total.value = Math.floor(tTotal + (tTotal * tBonus))
        }

        return {
            bonus,
            total,
            points,
            counts,
            computePoints
        }
    }
}
</script>

<style>

</style>