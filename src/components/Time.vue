<template>

<table class="table table-dark" style="max-width: 720px; margin: 50px auto;">
    <thead>
        <tr>
            <th></th>
            <th>
                <select class="form-select form-select-sm mb-3" @change="on_gun_change($event, 0)">
                    <option value="DEFAULT_OPTION">Choose a gun</option>
                    <option v-for="gun in guns" :key="gun.name" :value="gun.name" :disabled="check(gun.name)">{{ gun.name }}</option>
                </select>
            </th>
            <th>
                <select class="form-select form-select-sm mb-3" @change="on_gun_change($event, 1)">
                    <option value="DEFAULT_OPTION">Choose a gun</option>
                    <option v-for="gun in guns" :key="gun.name" :value="gun.name" :disabled="check(gun.name)">{{ gun.name }}</option>
                </select>
            </th>
            <th>
                <select class="form-select form-select-sm mb-3" @change="on_gun_change($event, 2)">
                    <option value="DEFAULT_OPTION">Choose a gun</option>
                    <option v-for="gun in guns" :key="gun.name" :value="gun.name" :disabled="check(gun.name)">{{ gun.name }}</option>
                </select>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>TTK</th>
            <td>{{ ttk[0] }} ms</td>
            <td>{{ ttk[1] }} ms</td>
            <td>{{ ttk[2] }} ms</td>
        </tr>
        <tr>
            <th>STK</th>
            <td>{{ stk[0] }} shots</td>
            <td>{{ stk[1] }} shots</td>
            <td>{{ stk[2] }} shots</td>
        </tr>
        <tr>
            <th>Health</th>
            <td class="items-radio" colspan="3">
                <input type="radio" id="hp-100" class="form-check-input" v-model="hp_selected" @click="on_hp_change" value="100">
                <label class="form-check-label" for="hp-100">100 HP</label>
                <input type="radio" class="form-check-input" v-model="hp_selected" @click="on_hp_change" value="150">150 HP
                <input type="radio" class="form-check-input" v-model="hp_selected" @click="on_hp_change" value="250">250 HP
            </td>
        </tr>
        <tr>
            <th>Vest</th>
            <td class="items-radio" colspan="3">
                <input type="radio" class="form-check-input" v-model="vest_selected" @click="on_vest_change" value="0">No Vest
                <input type="radio" class="form-check-input" v-model="vest_selected" @click="on_vest_change" value="25">Level 1
                <input type="radio" class="form-check-input" v-model="vest_selected" @click="on_vest_change" value="35">Level 2
                <input type="radio" class="form-check-input" v-model="vest_selected" @click="on_vest_change" value="45">Level 3
            </td>
        </tr>
        <tr>
            <th>Range</th>
            <td colspan="3">
                <div class="input-group">
                    <input type="range" class="form-control form-range" v-model="range_selected" @input="calculate" min="0" max="50" step="1">
                    <input type="number" clss="form-control" v-model="range_selected" @input="calculate" min="0" max="50">
                </div>
            </td>
        </tr>
    </tbody>
</table>

</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const guns = ref([
            { name: 'AK-47', type: 'AR', damage: [33, 26, 19], range: [29, 36], firerate: 548 },
            { name: 'BK57', type: 'AR', damage: [27, 22, 19], range: [19, 31], firerate: 659 },
            { name: 'HBRa3', type: 'AR', damage: [26, 22, 17], range: [14, 36], firerate: 697 },
            { name: 'HVK-30', type: 'AR', damage: [23, 18, 16], range: [21, 34], firerate: 711 },
            { name: 'HVK-30 (LC)', type: 'AR', damage: [34, 24, 19], range: [7, 46], firerate: 711 },
            { name: 'M16', type: 'AR', damage: [34, 24, 19], range: [16, 30], firerate: 800, burst: 3, delay: 200 }
        ])
        const guns_selected = ref(['', '', ''])
        const damage_range_profile = ref([
            { name: '', dr: [0] },
            { name: '', dr: [0] },
            { name: '', dr: [0] }
        ])
        const hp_selected = ref(100), vest_selected = ref(0), range_selected = ref(25)
        const stk_ttk = ref([
            { id: 0, ttk: 0, stk: 0 },
            { id: 1, ttk: 0, stk: 0 },
            { id: 2, ttk: 0, stk: 0 }
        ])
        const ttk = ref([0, 0, 0]), stk = ref([0, 0, 0]), firerate = ref([0, 0, 0])

        const rof_burst_delay = ref([

        ])
        
        const on_gun_change = (event, index) => {
            let gun_name = event.target.value
            let gun = guns.value.find(g => g.name === gun_name)

            if (gun_name != 'DEFAULT_OPTION') {
                guns_selected.value[index] = gun.name
                firerate.value[index] = gun.firerate
                set_damage_range(gun_name, index)
                calculate()
            }
            else {
                // guns_selected.value[index] = ''
                // firerate.value[index] = 0
                // set_damage_range.value[index].name = ''
                // set_damage_range.value[index].dr = null
            }
        }

        const check = (gun) => {
            return guns_selected.value.includes(gun)
        }

        const set_damage_range = (gun_name, index) => {
            let temp_gun = guns.value.find(g => g.name === gun_name)
            temp_gun.range.push(50)
            let temp_damage_range = [
                { name: null, dr: [] },
                { name: null, dr: [] },
                { name: null, dr: [] }
            ]

            let ctr = 0
            for (let x = 0; x < temp_gun.damage.length; x++)
            {
                let temp_range = temp_gun.range[x] + 1
                let temp_damage = temp_gun.damage[x]
                for (let y = ctr; y < temp_range; y++)
                {
                    temp_damage_range[index].dr.push(temp_damage)
                    ctr++
                }
                temp_damage_range[index].name = gun_name
            }

            damage_range_profile.value[index].name = temp_damage_range[index].name
            damage_range_profile.value[index].dr = temp_damage_range[index].dr
        }

        const calculate = () => {
            let total_health = hp_selected.value / ((100 - vest_selected.value) / 100)

            for (let x = 0; x < 3; x++)
            {
                stk.value[x] = Math.ceil(total_health / damage_range_profile.value[x].dr[range_selected.value])
                ttk.value[x] = Math.trunc(1000 / firerate.value[x] * 60 * (stk.value[x] - 1))
            }
        }

        const on_hp_change = () => {
            calculate()
        }

        const on_vest_change = () => {
            calculate()
        }

        return {
            guns, guns_selected, hp_selected, vest_selected, range_selected, damage_range_profile, ttk, stk, stk_ttk,
            on_gun_change, check, set_damage_range, calculate, on_hp_change, on_vest_change
        }
    }
}
</script>

<style>

</style>