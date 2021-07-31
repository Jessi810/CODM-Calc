<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <label for="" class="form-label">Range to target</label>
                <div class="input-group">
                    <input type="range" class="form-range w-75" style="height: auto;" id="range-slider" v-model="range" @input="rangeChanged" min="0" max="100" step="1">
                    <input type="number" class="form-control w-25" id="range-number" v-model="range" @input="rangeChanged" min="0" max="100">
                </div>

                <br><br>

                <div class="btn-group">
                    <input type="radio" class="btn-check" id="hp30" v-model="hp" @change="hpChanged" value="30">
                    <label for="hp30" class="btn btn-secondary">30 HP</label>
                    <input type="radio" class="btn-check" id="hp100" v-model="hp" @change="hpChanged" value="100">
                    <label for="hp100" class="btn btn-secondary">100 HP</label>
                    <input type="radio" class="btn-check" id="hp150" v-model="hp" @change="hpChanged" value="150">
                    <label for="hp150" class="btn btn-secondary">150 HP</label>
                    <input type="radio" class="btn-check" id="hp250" v-model="hp" @change="hpChanged" value="250">
                    <label for="hp250" class="btn btn-secondary">250 HP</label>
                </div>

                <br><br>

                <div class="btn-group">
                    <input type="radio" class="btn-check" id="vest0" v-model="vest" @change="vestChanged" value="0">
                    <label for="vest0" class="btn btn-secondary">No Vest</label>
                    <input type="radio" class="btn-check" id="vest25" v-model="vest" @change="vestChanged" value="25">
                    <label for="vest25" class="btn btn-secondary">Lv 1</label>
                    <input type="radio" class="btn-check" id="vest35" v-model="vest" @change="vestChanged" value="35">
                    <label for="vest35" class="btn btn-secondary">Lv 2</label>
                    <input type="radio" class="btn-check" id="vest45" v-model="vest" @change="vestChanged" value="45">
                    <label for="vest45" class="btn btn-secondary">Lv 3</label>
                </div>

                <br><br>

                <div class="btn-group">
                    <input type="radio" class="btn-check" id="hb-head" v-model="hitbox" @change="hitboxChanged" value="head">
                    <label for="hb-head" class="btn btn-secondary">Head</label>
                    <input type="radio" class="btn-check" id="hb-chest" v-model="hitbox" @change="hitboxChanged" value="chest">
                    <label for="hb-chest" class="btn btn-secondary">Chest</label>
                    <input type="radio" class="btn-check" id="hb-stomach" v-model="hitbox" @change="hitboxChanged" value="stomach">
                    <label for="hb-stomach" class="btn btn-secondary">Stomach</label>
                </div>
                <div class="btn-group">
                    <input type="radio" class="btn-check" id="hb-arms" v-model="hitbox" @change="hitboxChanged" value="arms">
                    <label for="hb-arms" class="btn btn-secondary">Arms</label>
                    <input type="radio" class="btn-check" id="hb-legs" v-model="hitbox" @change="hitboxChanged" value="legs">
                    <label for="hb-legs" class="btn btn-secondary">Legs</label>
                    <input type="radio" class="btn-check" id="hb-groin" v-model="hitbox" @change="hitboxChanged" value="groin">
                    <label for="hb-groin" class="btn btn-secondary">Groin</label>
                </div>

                <br><br>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <table class="table table-hover table-bordered table-sm table-responsive">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Type</th>
                            <th>TTK</th>
                            <th>STK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="gun in guns" :key="gun.id">
                            <td>
                                {{ gun.name }}
                            </td>
                            <td>{{ parseGunType(gun.type) }}</td>
                            <td>{{ gun.ttk }} ms</td>
                            <td>{{ gun.stk }} {{ gun.stk < 2 ? 'shot' : 'shots' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
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

        const parseGunType = (value) => {
            switch (value) {
                case 'AR':
                    return 'Assault Rifle'
                case 'SMG':
                    return 'Submachine Gun'
                case 'LMG':
                    return 'Light Machine GUn'
                case 'HG':
                    return 'Handgun'
                default:
                    return 'Other'
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
            rangeChanged,
            parseGunType
        }
    }
}
</script>

<style>

</style>