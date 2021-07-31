<template>
    <input type="range" v-model="range" @input="rangeChanged" min="0" max="100" step="1">
    <input type="number" v-model="range" @input="rangeChanged" min="0" max="100">
    <br>
    <input type="radio" v-model="hp" @change="hpChanged" value="30">30 HP
    <input type="radio" v-model="hp" @change="hpChanged" value="100">100 HP
    <input type="radio" v-model="hp" @change="hpChanged" value="150">150 HP
    <input type="radio" v-model="hp" @change="hpChanged" value="250">250 HP
    <br>
    <input type="radio" v-model="vest" @change="vestChanged" value="0">No Vest
    <input type="radio" v-model="vest" @change="vestChanged" value="25">Lv 1
    <input type="radio" v-model="vest" @change="vestChanged" value="35">Lv 2
    <input type="radio" v-model="vest" @change="vestChanged" value="45">Lv 3
    <br>
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="head">Head
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="chest">Chest
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="stomach">Stomach
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="arms">Arms
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="legs">Legs
    <input type="radio" v-model="hitbox" @change="hitboxChanged" value="groin">Groin
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th></th>
                <th>TTK</th>
                <th>STK</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="gun in guns" :key="gun.id">
                <td>
                    {{ gun.name }} <br>
                    {{ hitbox }}: {{ gun.hitbox[hitbox] ?? '1' }}
                </td>
                <td>{{ gun.ttk }} ms</td>
                <td>{{ gun.stk }} {{ gun.stk < 2 ? 'shot' : 'shots' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { gunStats } from '@/gun-stats.js'
import { Gun } from '@/assets/js/gun.js'

export default {
    setup() {
        const hp = ref(100)
        const vest = ref(0)
        const range = ref(25)
        const hitbox = ref('chest')

        let guns = ref([])

        const initializeTable = () => {
            for (let [i, gun] of gunStats.entries())
            {
                guns.value[i] = new Gun(gunStats[i])
                guns.value[i].damageProfile = guns.value[i].generateDamageProfile()
                guns.value[i].stk = guns.value[i].computeStk({
                    hp: hp.value,
                    range: range.value,
                    damageProfile: guns.value[i].damageProfile,
                    vest: vest.value,
                    hitbox: hitbox.value
                })
                guns.value[i].ttk = guns.value[i].computeTtk({
                    stk: guns.value[i].stk
                })
            }
        }

        initializeTable()

        const hpChanged = () => {
            for (let [i, gun] of gunStats.entries())
            {
                guns.value[i].stk = guns.value[i].computeStk({
                    hp: hp.value,
                    range: range.value,
                    damageProfile: guns.value[i].damageProfile,
                    vest: vest.value,
                    hitbox: hitbox.value
                })
                guns.value[i].ttk = guns.value[i].computeTtk({
                    stk: guns.value[i].stk
                })
            }
        }

        const vestChanged = () => {
            for (let [i, gun] of gunStats.entries())
            {
                guns.value[i].stk = guns.value[i].computeStk({
                    hp: hp.value,
                    range: range.value,
                    damageProfile: guns.value[i].damageProfile,
                    vest: vest.value,
                    hitbox: hitbox.value
                })
                guns.value[i].ttk = guns.value[i].computeTtk({
                    stk: guns.value[i].stk
                })
            }
        }

        const hitboxChanged = () => {
            for (let [i, gun] of gunStats.entries())
            {
                guns.value[i].stk = guns.value[i].computeStk({
                    hp: hp.value,
                    range: range.value,
                    damageProfile: guns.value[i].damageProfile,
                    vest: vest.value,
                    hitbox: hitbox.value
                })
                guns.value[i].ttk = guns.value[i].computeTtk({
                    stk: guns.value[i].stk
                })
            }
        }

        const rangeChanged = () => {
            for (let [i, gun] of gunStats.entries())
            {
                guns.value[i].stk = guns.value[i].computeStk({
                    hp: hp.value,
                    range: range.value,
                    damageProfile: guns.value[i].damageProfile,
                    vest: vest.value,
                    hitbox: hitbox.value
                })
                guns.value[i].ttk = guns.value[i].computeTtk({
                    stk: guns.value[i].stk
                })
            }
        }

        return {
            guns,
            hp,
            vest,
            range,
            hitbox,
            initializeTable,
            hpChanged,
            vestChanged,
            hitboxChanged,
            rangeChanged
        }
    }
}
</script>

<style>

</style>