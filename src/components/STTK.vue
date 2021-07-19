<template>

<div class="container-main container-sm p-3 mt-3" style="min-width: 360px; max-width: 720px;">
    <h1>STK & TTK</h1>
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
                <i :class="caretStyle1"></i> {{ format(sttk[0].stk) }}
            </div>
            <div class="col-6 col-sm-4 text-center">
                <i :class="caretStyle2"></i> {{ format(sttk[1].stk) }}
            </div>
        </div>

        <div class="row justify-content-center text-center">
            <div class="col-6 col-sm-4">
                <i :class="caretStyle3"></i> {{ format(sttk[0].ttk) }}
            </div>
            <div class="col-6 col-sm-4">
                <i :class="caretStyle4"></i> {{ format(sttk[1].ttk) }}
            </div>
        </div>
    </div>

    <!-- Range selection -->
    <div class="row my-3 justify-content-center">
        <div class="col-12 col-sm-8">
            <label for="input-group-range">Range to target</label>
            <div class="input-group" id="input-group-range">
                <input type="range" class="form-control w-50" v-model="rangeSelected" @input="onRangeChange" min="0" :max="maxRange" step="1">
                <input type="number" class="form-control w-25" v-model="rangeSelected" @input="onRangeChange" min="0" :max="maxRange" step="1">
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
                                        <input type="radio" class="form-check-input" id="hp-100" v-model="hpSelected" @change="onHpChange" value="100">
                                        <label for="100" class="form-label">100 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-150" v-model="hpSelected" @change="onHpChange" value="150">
                                        <label for="150" class="form-label">150 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-250" v-model="hpSelected" @change="onHpChange" value="250">
                                        <label for="250" class="form-label">250 HP</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-4">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vestSelected" @change="onVestChange" value="0">
                                        <label for="vest-0" class="form-label">No Vest</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vestSelected" @change="onVestChange" value="25">
                                        <label for="vest-1" class="form-label">Level 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vestSelected" @change="onVestChange" value="35">
                                        <label for="vest-2" class="form-label">Level 2</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" v-model="vestSelected" @change="onVestChange" value="45">
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
                            <ul class="list-group">
                                <li class="list-group-item">Attachments with range/damage modifiers</li>
                                <li class="list-group-item">Hitbox multipliers</li>
                                <!-- <li class="list-group-item"></li> -->
                            </ul>
                            <br />
                            <p>
                                If you have or knows someone who can provide stats of guns, I'd be grateful if you can share it to me. Send a message to me on <a href="https://www.reddit.com/user/CrazyAmount5">reddit</a>
                            </p>
                            <p>
                                Note: This app is still on early stage of development. Stats are still highly inaccurate.
                            </p>
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
                damage: [30, 23, 21, 19],
                range: [25, 36, 45],
                firerate: 788,
                burst_round: 3,
                burst_delay: 266
            }
        ])
        const gunsSelected = ref([{}, {}])
        const hpSelected = ref(100)
        const vestSelected = ref(0)
        const rangeSelected = ref(25)
        const rangeDamage = ref([{}, {}])
        const maxRange = ref(50)
        const sttk = ref([{}, {}])
        const caretStyle1 = ref(), caretStyle2 = ref(), caretStyle3 = ref(), caretStyle4 = ref()

        // COMPUTED PROPERTIES
        const onGunChange = (index, id) => {
            if (id == '') {
                gunsSelected.value[index] = {}
                rangeDamage.value[index] = {}
                sttk.value[index] = {}
                caretStyle1.value = ''
                caretStyle2.value = ''
                caretStyle3.value = ''
                caretStyle4.value = ''
            }
            else {
                gunsSelected.value[index] = guns.value.find(g => g.id == id)
                gunsSelected.value[index].index = index
                setRangeDamage(index, id)
                calculate()
            }
        }
        const setRangeDamage = (index, id) => {
            let tempGun = gunsSelected.value[index]
            let tempRangeDamage = {}
            tempRangeDamage.index = index
            tempRangeDamage.id = id
            tempRangeDamage.profile = []

            let ctr = 0
            let ctx = 0
            let tempDamage

            for (let x = 0; x < tempGun.range.length; x++)
            {
                tempDamage = tempGun.damage[x]
                for (let y = ctr; y <= tempGun.range[x]; y++)
                {
                    tempRangeDamage.profile.push(tempDamage)
                    ctr++
                }
                ctx++
            }

            tempRangeDamage.profile.push(tempGun.damage[ctx])
            rangeDamage.value[index] = tempRangeDamage
        }
        const calculate = () => { // todo fix calculation for burst type guns
            let rd = rangeDamage.value
            let gs = gunsSelected.value
            let totalHp = hpSelected.value / ((100 - vestSelected.value) / 100)

            for (let x = 0; x < gs.length; x++)
            {
                if (isValid(gs[x])) // Check if gun is selected
                {
                    let tempDamage

                    if (rangeSelected.value < rd[x].profile.length - 1)
                        tempDamage = rd[x].profile[rangeSelected.value]
                    else
                        tempDamage = rd[x].profile.slice(-1)[0]

                    sttk.value[x].stk = Math.ceil(totalHp / tempDamage)

                    if ('burst_delay' in gs[x])
                    {
                        let burstCount = Math.ceil( sttk.value[x].stk / gs[x].burst_round ) // stk: 5, bc: 2
                        let burstDelayTotal = gs[x].burst_delay * (burstCount - 1) // 266ms, 76ms/shot, 152+266=418+76=496

                        sttk.value[x].ttk = Math.trunc(
                            ( 60000 / gs[x].firerate * (sttk.value[x].stk - burstCount) ) + burstDelayTotal
                        )
                    }
                    else
                        sttk.value[x].ttk = Math.trunc(60000 / gs[x].firerate * (sttk.value[x].stk - 1))
                }
            }

            setCaretStyle()
        }
        const onHpChange = () => {
            calculate()
        }
        const onVestChange = () => {
            calculate()
        }
        const onRangeChange = () => {
            if (rangeSelected.value > maxRange.value) {
                rangeSelected.value = 50
            }
            if (rangeSelected.value < 0) {
                rangeSelected.value = 0
            }
            calculate()
        }
        const isValid = (value) => {
            if (value === null || value === undefined)
                return false

            return Object.keys(value).length > 0 && value.constructor === Object
        }
        const format = (value) => {
            // This need some fix later on. The returned value just depends on value of passed parameters
            if (value != null && value !== 'undefined')
                if (value < 50)
                    return value + ' shots'
                else return value + ' ms'
        }
        const setCaretStyle = () => {
            if (isValid(sttk.value[0]) && isValid(sttk.value[1]))
            {
                if (sttk.value[0].stk == sttk.value[1].stk) {
                    caretStyle1.value = 'bi bi-dash'
                    caretStyle2.value = 'bi bi-dash'
                }
                else if (sttk.value[0].stk > sttk.value[1].stk) {
                    caretStyle1.value = 'bi bi-caret-down-fill text-danger'
                    caretStyle2.value = 'bi bi-caret-up-fill text-success'
                } else {
                    caretStyle1.value = 'bi bi-caret-up-fill text-success'
                    caretStyle2.value = 'bi bi-caret-down-fill text-danger'
                }

                if (sttk.value[0].ttk == sttk.value[1].ttk) {
                    caretStyle3.value = 'bi bi-dash'
                    caretStyle4.value = 'bi bi-dash'
                }
                else if (sttk.value[0].ttk > sttk.value[1].ttk) {
                    caretStyle3.value = 'bi bi-caret-down-fill text-danger'
                    caretStyle4.value = 'bi bi-caret-up-fill text-success'
                } else {
                    caretStyle3.value = 'bi bi-caret-up-fill text-success'
                    caretStyle4.value = 'bi bi-caret-down-fill text-danger'
                }
            }
        }

        return {
            guns, gunsSelected, hpSelected, vestSelected, rangeSelected, rangeDamage, maxRange, sttk, caretStyle1, caretStyle2, caretStyle3, caretStyle4,
            onGunChange, onHpChange, onVestChange, onRangeChange, calculate, setRangeDamage, format, setCaretStyle
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