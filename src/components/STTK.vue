<template>

<div class="container-main container-sm p-3 mt-3" style="min-width: 360px; max-width: 720px;">
    <h1 class="h1">STK & TTK</h1>
    <hr />

    <!-- Gun selections -->
    <div class="row my-3 justify-content-center">
        <div class="col-6 col-sm-4">
            <select class="form-select" @change="onGunChange(0, $event.target.value)">
                <option value="">Select Gun</option>
                <option v-for="gun in guns" :key="gun.id" :value="gun.id">{{ gun.name }}</option>
            </select>
        </div>
        <div class="col-6 col-sm-4">
            <select class="form-select" @change="onGunChange(1, $event.target.value)">
                <option value="">Select Gun</option>
                <option v-for="gun in guns" :key="gun.id" :value="gun.id">{{ gun.name }}</option>
            </select>
        </div>
    </div>

    <!-- STK and TTK values -->
    <div class="row my-3">
        <div class="row justify-content-center">
            <div class="col-6 col-sm-4 text-center">
                {{ stk[0] != null || stk[0] != NaN || stk[0] != undefined ? stk[0] : '0' }} shots
            </div>
            <div class="col-6 col-sm-4 text-center">
                {{ stk[1] != null || stk[0] != NaN || stk[1] != undefined ? stk[1] : '0' }} shots
            </div>
        </div>

        <div class="row justify-content-center text-center">
            <div class="col-6 col-sm-4">
                {{ ttk[0] != null || ttk[0] != NaN || ttk[0] != undefined ? ttk[0] : '0' }} ms
            </div>
            <div class="col-6 col-sm-4">
                {{ ttk[1] != null || ttk[0] != NaN || ttk[1] != undefined ? ttk[1] : '0' }} ms
            </div>
        </div>
    </div>

    <!-- Range selection -->
    <div class="row my-3 justify-content-center">
        <div class="col-12 col-sm-8">
            <label for="input-group-range">Range to target</label>
            <div class="input-group" id="input-group-range">
                <input type="range" class="form-control w-50" v-model="range_selected" @input="onRangeChange" min="0" :max="max_range" step="1">
                <input type="number" class="form-control w-25" v-model="range_selected" @input="onRangeChange" min="0" :max="max_range" step="1">
                <span class="input-group-text" id="basic-addon2">meters</span>
            </div>
        </div>
    </div>

    <!-- HP and Vest selections -->
    <div class="row mt-5 justify-content-center">
        <div class="col-12 col-sm-8">
            <div class="accordion" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            HP and Vest
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="row justify-content-center">
                                <div class="col-6 col-sm-4">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-100" v-model="hp_selected" @change="onHpChange" value="100">
                                        <label for="100" class="form-label">100 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-150" v-model="hp_selected" @change="onHpChange" value="150">
                                        <label for="150" class="form-label">150 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-250" v-model="hp_selected" @change="onHpChange" value="250">
                                        <label for="250" class="form-label">250 HP</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vest_selected" @change="onVestChange" value="0">
                                        <label for="vest-0" class="form-label">No Vest</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vest_selected" @change="onVestChange" value="25">
                                        <label for="vest-1" class="form-label">Level 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vest_selected" @change="onVestChange" value="35">
                                        <label for="vest-2" class="form-label">Level 2</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vest_selected" @change="onVestChange" value="45">
                                        <label for="vest-3" class="form-label">Level 3</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Upcoming features
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Attachments / Hitbox multipliers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        // PROPERTIES
        const guns = ref([
            {
                id: 0,
                name: 'AK-47',
                type: 'AR',
                damage: [33, 26, 19],
                range: [29, 36],
                firerate: 548
            },
            {
                id: 1,
                name: 'BK57',
                type: 'AR', 
                damage: [27, 22, 19],
                range: [19, 31],
                firerate: 659
            },
            {
                id: 2,
                name: 'HBRa3',
                type: 'AR', 
                damage: [26, 22, 17],
                range: [14, 36],
                firerate: 697
            },
            {
                id: 3,
                name: 'HVK-30',
                type: 'AR', 
                damage: [23, 18, 16],
                range: [21, 34],
                firerate: 711
            },
            {
                id: 4,
                name: 'HVK-30 (LC)',
                type: 'AR', 
                damage: [34, 24, 19],
                range: [7, 46],
                firerate: 711
            },
            {
                id: 5,
                name: 'M16',
                type: 'AR', 
                damage: [45, 31, 25],
                range: [16, 30],
                firerate: 800,
                burst_round: 3,
                burst_delay: 200
            }
        ])
        const guns_selected = ref([])
        const hp_selected = ref(100)
        const vest_selected = ref(0)
        const range_selected = ref(25)
        const range_damage = ref([{ id: null, rng_dmg: [null] }, { id: null, rng_dmg: [null] }])
        const max_range = ref(50)
        const stk = ref([])
        const ttk = ref([])

        // COMPUTED PROPERTIES
        const onGunChange = (gun_index, gun_id) => {
            if (gun_id == '') {
                guns_selected.value[gun_index] = null
                stk.value[gun_index] = null
                ttk.value[gun_index] = null
                range_damage.value[gun_index] = null
            }
            else {
                guns_selected.value[gun_index] = guns.value.find(g => g.id == gun_id)
                setDamageRange(gun_index, gun_id)
                calculate()
            }
        }
        const calculate = () => {
            let temp_hp = hp_selected.value
            let temp_vest = vest_selected.value
            let temp_range = range_selected.value
            let temp_range_damage = range_damage.value

            let total_hp = temp_hp / ((100 - temp_vest) / 100)


            for (let x = 0; x < 2; x++) // todo: change # of loop depending on # of guns_selected
            {
            console.log(guns_selected.value[x].firerate)
                if (temp_range_damage[x] != null) {
                    stk.value[x] = Math.ceil(total_hp / temp_range_damage[x].rng_dmg[temp_range])

                    if (guns_selected.value[x].firerate != undefined) {
                        let temp_firerate = guns_selected.value[x].firerate
                        ttk.value[x] = Math.trunc(1000 / temp_firerate * 60 * (stk.value[x] - 1))
                    }
                }
            }
        }
        const onHpChange = () => {
            calculate()
        }
        const onVestChange = () => {
            calculate()
        }
        const onRangeChange = () => {
            calculate()
        }
        const setDamageRange = (gun_index, gun_id) => {
            let temp_gun = guns.value.find(g => g.id == gun_id)
            temp_gun.range.push(max_range.value)

            let temp_range_damage = [
                { id: '', rng_dmg: [] },
                { id: '', rng_dmg: [] }
            ]
            temp_range_damage[gun_index].id = gun_id

            let ctr = 0
            for (let x = 0; x < temp_gun.damage.length; x++) {
                for (let y = ctr; y <= temp_gun.range[x]; y++) {
                    temp_range_damage[gun_index].rng_dmg.push(temp_gun.damage[x])
                    ctr++
                }
            }
            range_damage.value[gun_index] = temp_range_damage[gun_index]
        }

        return {
            guns, guns_selected, hp_selected, vest_selected, range_selected, range_damage, max_range, stk, ttk,
            onGunChange, onHpChange, onVestChange, onRangeChange, calculate, setDamageRange
        }
    }
}
</script>

<style>
.container-main > .row {
    margin-top: 15;
    margin-bottom: 15px;
}
h1 {
    text-align: center;
}
</style>