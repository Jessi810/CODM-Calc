<template>

<div class="container-main container-sm p-3 mt-3" style="min-width: 360px; max-width: 720px;">
    <h1>STK & TTK</h1>
    <hr />

    <!-- Gun selections -->
    <div class="row my-3 justify-content-center">
        <div class="col-6 col-sm-4">
            <select class="form-select" @change="onGunChange(0, $event.target.value)">
                <option value="">Select Gun</option>
                <option v-for="gun in guns" :key="gun.id" :value="gun.id" :hidden="!(gun.firerate > 0)">{{ gun.type }} | {{ gun.name }}</option>
            </select>
        </div>
        <div class="col-6 col-sm-4">
            <select class="form-select" @change="onGunChange(1, $event.target.value)">
                <option value="">Select Gun</option>
                <option v-for="gun in guns" :key="gun.id" :value="gun.id" :hidden="!(gun.firerate > 0)">{{ gun.type }} | {{ gun.name }}</option>
            </select>
        </div>
    </div>

    <!-- STK and TTK values -->
    <div class="row my-3">
        <div class="row justify-content-center">
            <div class="col-6 col-sm-4 text-center">
                {{ format(sttk[0].stk) }} <i :class="caretStyle1"></i>
            </div>
            <div class="col-6 col-sm-4 text-center">
                <i :class="caretStyle2"></i> {{ format(sttk[1].stk) }}
            </div>
        </div>

        <div class="row justify-content-center text-center">
            <div class="col-6 col-sm-4">
                {{ format(sttk[0].ttk) }} <i :class="caretStyle3"></i>
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
                                <div class="col-6 col-sm-6">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-30" v-model="hpSelected" @change="onHpChange" value="30">
                                        <label for="hp-30" class="form-label">30 HP (Hardcore)</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-100" v-model="hpSelected" @change="onHpChange" value="100">
                                        <label for="hp-100" class="form-label">100 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-150" v-model="hpSelected" @change="onHpChange" value="150">
                                        <label for="hp-150" class="form-label">150 HP</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="hp-250" v-model="hpSelected" @change="onHpChange" value="250">
                                        <label for="hp-250" class="form-label">250 HP</label>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="vest-0" v-model="vestSelected" @change="onVestChange" value="0">
                                        <label for="vest-0" class="form-label">No Vest</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="vest-1" v-model="vestSelected" @change="onVestChange" value="25">
                                        <label for="vest-1" class="form-label">Level 1</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="vest-2" v-model="vestSelected" @change="onVestChange" value="35">
                                        <label for="vest-2" class="form-label">Level 2</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="vest-3" v-model="vestSelected" @change="onVestChange" value="45">
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
                            <p class="o">
                                <i class="bi bi-info-square-fill text-info"></i>
                                &nbsp;If you have or knows someone who can provide stats of guns, I'd be grateful if you can share it to me. Send me a message on <a href="https://www.reddit.com/user/CrazyAmount5">reddit</a>
                            </p>
                            <p class="">
                                <i class="bi bi-exclamation-square-fill text-warning"></i>
                                &nbsp;Note: This app is still on early stage of development. Stats are still highly inaccurate.
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
                id: 1010,
                name: 'Type 25',
                type: 'AR'
            },
            {
                id: 1020,
                name: 'M16',
                type: 'AR', 
                damage: [30, 23, 21, 19],
                range: [25, 36, 45],
                firerate: 788,
                burst_round: 3,
                burst_delay: 266
            },
            {
                id: 1030,
                name: 'AK117',
                type: 'AR'
            },
            {
                id: 1040,
                name: 'AK-47',
                type: 'AR',
                damage: [33, 26, 19],
                range: [29, 36],
                firerate: 548
            },
            {
                id: 1050,
                name: 'ASM10',
                type: 'AR'
            },
            {
                id: 1060,
                name: 'M4',
                type: 'AR'
            },
            {
                id: 1070,
                name: 'BK57',
                type: 'AR', 
                damage: [27, 22, 19],
                range: [19, 30],
                firerate: 665,
                hitbox: {
                    head: 1.2
                }
            },
            {
                id: 1080,
                name: 'LK24',
                type: 'AR'
            },
            {
                id: 1090,
                name: 'ICR-1',
                type: 'AR'
            },
            {
                id: 1100,
                name: 'Man-O-War',
                type: 'AR'
            },
            {
                id: 1110,
                name: 'KN-44',
                type: 'AR'
            },
            {
                id: 1120,
                name: 'HBRa3',
                type: 'AR', 
                damage: [26, 22, 17],
                range: [14, 36],
                firerate: 697
            },
            {
                id: 1130,
                name: 'HVK-30',
                type: 'AR', 
                damage: [23, 18, 16],
                range: [21, 34],
                firerate: 711
            },
            {
                id: 1131,
                name: 'HVK-30 (LC)',
                type: 'AR', 
                damage: [34, 24, 19],
                range: [7, 46],
                firerate: 711
            },
            {
                id: 1140,
                name: 'DR-H',
                type: 'AR'
            },
            {
                id: 1150,
                name: 'Peacekeeper MK2',
                type: 'AR'
            },
            {
                id: 1160,
                name: 'FR .556',
                type: 'AR'
            },
            {
                id: 1170,
                name: 'AS VAL',
                type: 'AR', 
                damage: [28, 25, 22, 19],
                range: [7, 20, 30],
                firerate: 800,
                hitbox: {
                    head: 1.5, upper_torso: 1.1, lower_torso: 1,
                    groin: 1, arms: 1, legs: 1
                },
                credits: {
                    name: 'Mrroey', link: 'https://discordapp.com/users/265688979880280064'
                }
            },
            {
                id: 1180,
                name: 'CR-56 AMAX',
                type: 'AR', 
                damage: [25, 24, 20, 16],
                range: [13, 18, 26],
                firerate: 710,
                hitbox: {
                    head: 1.5, upper_torso: 1.3, lower_torso: 1.1,
                    groin: 1, arms: { upper: 1.1, lower: 1 }, legs: 1
                }
            },
            {
                id: 3010,
                name: 'S36',
                type: 'LMG'
            },
            {
                id: 3020,
                name: 'UL736',
                type: 'LMG'
            },
            {
                id: 3030,
                name: 'RPD',
                type: 'LMG'
            },
            {
                id: 3040,
                name: 'M4 LMG',
                type: 'LMG'
            },
            {
                id: 3050,
                name: 'Chopper',
                type: 'LMG'
            },
            {
                id: 3060,
                name: 'Holger 26',
                type: 'LMG',
                damage: [31, 25, 21, 19],
                range: [17, 25, 51],
                firerate: 706,
                hitbox: {
                    head: 1.2, upper_torso: 1, lower_torso: 1,
                    groin: 1, arms: 1, legs: 1
                },
                credits: {
                    name: 'Mrroey', link: 'https://discordapp.com/users/265688979880280064'
                }
            },
            {
                id: 4010,
                name: 'RUS-79U',
                type: 'SMG'
            },
            {
                id: 4020,
                name: 'Chicom',
                type: 'SMG'
            },
            {
                id: 4030,
                name: 'PDW-57',
                type: 'SMG'
            },
            {
                id: 4040,
                name: 'Razorback',
                type: 'SMG'
            },
            {
                id: 4050,
                name: 'MSMC',
                type: 'SMG',
                damage: [25, 21, 18, 17],
                range: [9, 15, 19],
                firerate: 878,
                hitbox: {
                    head: 1.1, upper_torso: 1, lower_torso: 1,
                    groin: 1, arms: 1, legs: 0.9
                },
                credits: {
                    name: 'READ ABOUT ME AND RETWEET#2590', link: 'https://discordapp.com/users/302829483075829761'
                }
            },
            {
                id: 4060,
                name: 'HG 40',
                type: 'SMG'
            },
            {
                id: 4070,
                name: 'Pharo',
                type: 'SMG'
            },
            {
                id: 4080,
                name: 'GKS',
                type: 'SMG'
            },
            {
                id: 4090,
                name: 'Cordite',
                type: 'SMG'
            },
            {
                id: 4100,
                name: 'QQ9',
                type: 'SMG'
            },
            {
                id: 4110,
                name: 'Fennec',
                type: 'SMG',
                damage: [23, 18, 13, 12],
                range: [16, 21, 29],
                firerate: 1110,
                hitbox: {
                    head: 1.1, upper_torso: 1.1, lower_torso: 1,
                    groin: 0.9, arms: 0.9, legs: 0.9
                }
            },
            {
                id: 4120,
                name: 'AGR 556',
                type: 'SMG'
            },
            {
                id: 4130,
                name: 'QXR',
                type: 'SMG',
                damage: [22, 19, 16, 12],
                range: [9, 16, 26],
                firerate: 860,
                hitbox: {
                    head: 1.3, upper_torso: 1.3, lower_torso: 0.9,
                    groin: 0.9, arms: 0.9, legs: 0.9
                }
            },
            {
                id: 4131,
                name: 'QXR (EB)',
                type: 'SMG',
                damage: [22, 19, 16, 12],
                range: [9, 16, 26],
                firerate: 1000,
                hitbox: {
                    head: 1.3, upper_torso: 1.1, lower_torso: 0.9,
                    groin: 0.9, arms: 0.9, legs: 0.9
                }
            },
            {
                id: 4140,
                name: 'PP19 Bizon',
                type: 'SMG',
                damage: [26, 24, 22, 16],
                range: [15, 21, 31],
                firerate: 650,
                hitbox: {
                    head: 1.2, upper_torso: 1, lower_torso: 1,
                    groin: 0.8, arms: 1, legs: 0.8
                }
            },
            {
                id: 4141,
                name: 'PP19 Bizon (LC)',
                type: 'SMG',
                damage: [26, 24, 22, 16],
                range: [12, 17, 25],
                firerate: 650,
                hitbox: {
                    head: 1.2, upper_torso: 1, lower_torso: 1,
                    groin: 1, arms: 1, legs: 1
                }
            },
            {
                id: 7010,
                name: 'J358',
                type: 'HG'
            },
            {
                id: 7020,
                name: 'MW11',
                type: 'HG'
            },
            {
                id: 7030,
                name: '.50 GS',
                type: 'HG'
            },
            {
                id: 7040,
                name: 'Renetti',
                type: 'HG',
                damage: [30, 23, 21, 19],
                range: [25, 36, 45],
                firerate: 720,
                burst_round: 3,
                burst_delay: 333,
                hitbox: {
                    head: 2, upper_torso: 1.6, lower_torso: 1,
                    groin: 1, arms: 1.6, legs: 1
                },
                credits: {
                    name: 'Mrroey', link: 'https://discordapp.com/users/265688979880280064'
                }
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
        const calculate = () => {
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
                if (value == 0)
                    return value + ' ms'
                else if (value < 50)
                    return value + ' shots'
                else
                    return value + ' ms'
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