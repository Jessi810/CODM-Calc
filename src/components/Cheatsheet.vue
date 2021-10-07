<template>
    <div class="container">
        <div class="row justify-content-center my-3">

            <!-- HP and Show/Hide Guns -->
            <div class="col-12 col-lg-9 my-1">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Options ({{ hp }} HP, {{ hitbox }} {{ hitbox === 'base' ? 'damage' : 'shots' }})
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                
                                <!-- HP and Vest -->
                                <div class="row justify-content-center mb-3">
                                    <div class="col-12 col-sm-6">
                                        <strong>Target HP</strong>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp30" v-model="hp" @change="hpChanged" value="30">
                                            <label for="hp30" class="form-check-label">30 HP (Hardcore)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp100" v-model="hp" @change="hpChanged" value="100">
                                            <label for="hp100" class="form-check-label">100 HP (MP / No Plate)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp150" v-model="hp" @change="hpChanged" value="150">
                                            <label for="hp150" class="form-check-label">150 HP (1 Plate)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <strong class="d-none d-sm-block">&nbsp;</strong>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp200" v-model="hp" @change="hpChanged" value="200">
                                            <label for="hp200" class="form-check-label">200 HP (2 Plates)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp250" v-model="hp" @change="hpChanged" value="250">
                                            <label for="hp250" class="form-check-label">250 HP (3 Plates)</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp300" v-model="hp" @change="hpChanged" value="300">
                                            <label for="hp300" class="form-check-label">300 HP (Kinetic Armor)</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-check-label">Custom HP</label>
                                        <div class="input-group">
                                            <input type="range" class="form-control w-75" style="height: auto;" v-model="hp" @input="hpChanged" min="1" max="300" step="1">
                                            <input type="number" class="form-control w-25" v-model="hp" @input="hpChanged" min="1" max="300">
                                        </div>
                                    </div>
                                </div>

                                <!-- Body shot -->
                                <div class="row justify-content-center mb-3">
                                    <strong>Body shot</strong>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-base" v-model="hitbox" @change="hitboxChanged" value="base">
                                            <label for="hb-base" class="form-check-label">Base Damage</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-head" v-model="hitbox" @change="hitboxChanged" value="head">
                                            <label for="hb-head" class="form-check-label">Head</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-chest" v-model="hitbox" @change="hitboxChanged" value="chest">
                                            <label for="hb-chest" class="form-check-label">Chest</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-stomach" v-model="hitbox" @change="hitboxChanged" value="stomach">
                                            <label for="hb-stomach" class="form-check-label">Stomach</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        &nbsp;
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-arms" v-model="hitbox" @change="hitboxChanged" value="arms">
                                            <label for="hb-arms" class="form-check-label">Arms</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-legs" v-model="hitbox" @change="hitboxChanged" value="legs">
                                            <label for="hb-legs" class="form-check-label">Legs</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hb-groin" v-model="hitbox" @change="hitboxChanged" value="groin">
                                            <label for="hb-groin" class="form-check-label">Groin</label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Long Range Perk -->
                                <div class="row justify-content-center">
                                    <strong>Long Range Mod (BR)</strong>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="none" checked>
                                                None
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="white">
                                                White Mod (+10% range)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="green">
                                                Green Mod (+20% range)
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="blue">
                                                Blue Mod (+40% range)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="purple">
                                                Purple Mod (+60% range)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="radio" class="form-check-input" name="longrange" @change="longrangeChanged($event.target.value)" value="gold" disabled>
                                                Gold Mod (+60% range) <i class="bi bi-info-square" data-mdb-toggle="tooltip" data-mdb-placement="top" title="Work in Progress"></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Show/Hide
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAll" @click="showOrHideGun('All', $event)" checked>
                                                Select/unselect all guns
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <strong>Assault Rifles:</strong>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAllAR" @click="showOrHideGun('AR', $event)" checked>
                                                Select all AR
                                            </label>
                                        </div>
                                        <div v-for="gun in gunStats" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'AR'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideAR" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllAR')" checked>
                                                    {{ gun.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <strong>Submachine Guns:</strong>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAllSMG" @click="showOrHideGun('SMG', $event)" checked>
                                                Select all SMG
                                            </label>
                                        </div>
                                        <div v-for="gun in gunStats" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'SMG'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideSMG" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllSMG')" checked>
                                                    {{ gun.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <strong>Handguns:</strong>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAllHG" @click="showOrHideGun('HG', $event)" checked>
                                                Select all HG
                                            </label>
                                        </div>
                                        <div v-for="gun in gunStats" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'HG'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideHG" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllHG')" checked>
                                                    {{ gun.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <strong>Light Machine Guns:</strong>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAllLMG" @click="showOrHideGun('LMG', $event)" checked>
                                                Select all LMG
                                            </label>
                                        </div>
                                        <div v-for="gun in gunStats" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'LMG'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideLMG" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllLMG')" checked>
                                                    {{ gun.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Range -->
            <div class="col-12 col-lg-9 my-1">
                <strong>
                    Range to target
                    <span class="d-inline d-sm-none"> (in meters)</span>
                </strong>

                <div class="input-group">
                    <input type="range" class="form-control w-50" style="height: auto;" id="range-slider" v-model="range" @input="rangeChanged" min="0" max="100" step="1">
                    <input type="number" class="form-control w-25" id="range-number" style="max-width: 100px;" v-model="range" @input="rangeChanged" min="0" max="100">
                    <span class="input-group-text d-none d-sm-block">meters</span>
                </div>
            </div>
            
            <!-- Table -->
            <div class="col-12 col-lg-9 my-1">

                <strong>Preset:&nbsp;&nbsp;&nbsp;</strong>
                <select class="form-select" @change="presetChanged($event.target.value)">
                    <option value="MP_DEFAULT">MP / BR (No Plate)</option>
                    <option value="MP_PAYOUT_VEST25">Payout with 25HP Vest</option>
                    <option value="MP_PAYOUT_VEST50">Payout with 50HP Vest</option>
                    <option value="BR_3PLATE">BR with 3 Armor Plates</option>
                    <option value="BR_4PLATE">BR with Kinetic Plate</option>
                </select>
                
                <table class="table table-hover table-bordered table-sm" id="cheatsheet-table">
                    <thead>
                        <tr>
                            <th hidden></th>
                            <th @click="sortColumn('name')">Gun</th>
                            <th @click="sortColumn('ttk')">TTK</th>
                            <th @click="sortColumn('stk')">STK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="gun in guns" :key="gun.id" :id="gun.type + gun.id" :name="'rowGun' + gun.type">
                            <td hidden>{{ gun.id }}</td>
                            <td>
                                <a href="#" data-mdb-toggle="modal" data-mdb-target="#showStatsModal" @click="showStats(gun.id)">
                                    {{ gun.name }}
                                </a>
                            </td>
                            <td>{{ gun.sttk.ttk[range] }} ms</td>
                            <td>{{ gun.sttk.stk[range] }} {{ gun.sttk.stk[range] < 2 ? 'shot' : 'shots' }}</td>
                        </tr>
                    </tbody>
                </table>

                <i class="bi bi-info-square"></i> Click on gun name to see stats
                <br>
                <i class="bi bi-info-square"></i> Click on table header to sort
            </div>

            <Modal :stats="gunShowStats" :longrange="longrange" />

        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gunStats } from '@/gun-stats.js'
import { Gun } from '@/assets/js/gun.js'
import Modal from '@/components/Modal.vue'
import $ from 'jquery'

export default {
    components: {
        Modal
    },
    setup() {
        const hp = ref(100)
        const vest = ref(0)
        const range = ref(0)
        const hitbox = ref('base')
        const currentSort = ref('id')
        const gunShowStats = ref({})
        const longrange = ref(0)
        const addHeadshotMultiplier = ref(0)

        const guns = ref([{}])
        
        for (let [i, val] of gunStats.entries())
        {
            guns.value[i] = new Gun(val)
            guns.value[i].sttk = guns.value[i].sttk({
                hp: hp.value,
                vest: vest.value,
                hitbox: hitbox.value,
                longrange: longrange.value
            })
        }

        const hpChanged = () => {
            computeSttk()
        }

        const vestChanged = () => {
            computeSttk()
        }

        const hitboxChanged = () => {
            computeSttk()
        }

        const rangeChanged = () => {
            computeSttk()
        }

        const longrangeChanged = (val) => {
            switch (val) {
                case 'none':
                    longrange.value = 0
                    addHeadshotMultiplier.value = 0
                    break
                case 'white':
                    longrange.value = 10
                    addHeadshotMultiplier.value = 0
                    break
                case 'green':
                    longrange.value = 20
                    addHeadshotMultiplier.value = 0
                    break
                case 'blue':
                    longrange.value = 40
                    addHeadshotMultiplier.value = 0
                    break
                case 'purple':
                    longrange.value = 60
                    addHeadshotMultiplier.value = 0
                    break
                case 'gold':
                    longrange.value = 60
                    addHeadshotMultiplier.value = 0
                    break
                default:
                    longrange.value = 0
                    break
            }

            computeSttk()
        }

        const computeSttk = () => {
            for (let [i, val] of guns.value.entries())
            {
                guns.value[i] = new Gun(val)
                guns.value[i].sttk = guns.value[i].sttk({
                    hp: hp.value,
                    vest: vest.value,
                    hitbox: hitbox.value,
                    longrange: longrange.value
                })
            }

            guns.value.sort(sortByKey(currentSort.value))
        }

        const sortColumn = (s) => {
            switch (s) {
                case 'name' || '-name':
                    currentSort.value = (currentSort.value === 'name') ? currentSort.value = '-name' : 'name'
                    break
                case 'ttk' || '-ttk':
                    currentSort.value = (currentSort.value === 'ttk') ? currentSort.value = '-ttk' : 'ttk'
                    break
                case 'stk' || '-stk':
                    currentSort.value = (currentSort.value === 'stk') ? currentSort.value = '-stk' : 'stk'
                    break
            }
            
            guns.value.sort(sortByKey(currentSort.value))
        }

        function sortByKey(property) {
            let sortOrder = 1

            if(property[0] === "-") {
                sortOrder = -1
                property = property.substr(1);
            }

            return function (a, b) {
                let result

                if (property === 'ttk' || property === 'stk')
                    result = (a.sttk[property][range.value] < b.sttk[property][range.value]) ? -1 : (a.sttk[property][range.value] > b.sttk[property][range.value]) ? 1 : 0
                else
                    result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0

                return result * sortOrder;
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

        const showOrHideGun = (id, event, idSelectAll) => {
            if (id === 'AR' || id === 'SMG' || id === 'LMG' || id === 'HG' || id === 'All') {
                let checkboxes, rowGuns

                switch (id) {
                    case 'AR':
                        checkboxes = document.getElementsByName('cbShowHideAR')
                        rowGuns = document.getElementsByName('rowGunAR')
                        break
                    case 'SMG':
                        checkboxes = document.getElementsByName('cbShowHideSMG')
                        rowGuns = document.getElementsByName('rowGunSMG')
                        break
                    case 'LMG':
                        checkboxes = document.getElementsByName('cbShowHideLMG')
                        rowGuns = document.getElementsByName('rowGunLMG')
                        break
                    case 'HG':
                        checkboxes = document.getElementsByName('cbShowHideHG')
                        rowGuns = document.getElementsByName('rowGunHG')
                        break
                    case 'All':
                        checkboxes = document.querySelectorAll('[name="cbShowHideAR"], [name="cbShowHideSMG"], [name="cbShowHideLMG"], [name="cbShowHideHG"]')
                        rowGuns = document.querySelectorAll('[name="rowGunAR"], [name="rowGunSMG"], [name="rowGunLMG"], [name="rowGunHG"]')

                        document.getElementById('cbSelectAllAR').checked = event.target.checked
                        document.getElementById('cbSelectAllSMG').checked = event.target.checked
                        document.getElementById('cbSelectAllLMG').checked = event.target.checked
                        document.getElementById('cbSelectAllHG').checked = event.target.checked

                        break
                }

                for (let checkbox of checkboxes) {
                    checkbox.checked = event.target.checked
                }
                for (let rowGun of rowGuns) {
                    rowGun.hidden = !event.target.checked
                }
            }
            else {
                document.getElementById(id).hidden = !event.target.checked

                let checkboxes = document.getElementsByName(event.target.name)

                check_all: {
                    // Uncheck 'Select All AR|SMG|LMG|HG' checkbox if an item/s is unchecked
                    for (let checkbox of checkboxes) {
                        if (checkbox.checked === false) {
                            document.getElementById(idSelectAll).checked = false
                            break check_all
                        }
                    }

                    // Check 'Select All AR|SMG|LMG|HG' checkbox if ALL items is checked
                    let compare = true
                    for (let checkbox of checkboxes) {
                        if (!(compare && checkbox.checked)) {
                            compare = false
                            break
                        }
                    }
                    document.getElementById(idSelectAll).checked = compare
                }
            }
        }

        const showStats = (id) => {
            gunShowStats.value = guns.value.find(g => g.id === id)
        }

        const presetChanged = (value) => {
            switch (value) {
                case 'MP_DEFAULT':
                    hp.value = 100
                    break
                case 'MP_PAYOUT_VEST25':
                    hp.value = 125
                    break
                case 'MP_PAYOUT_VEST50':
                    hp.value = 150
                    break
                case 'BR_3PLATE':
                    hp.value = 250
                    break
                case 'BR_4PLATE':
                    hp.value = 300
                    break
                default:
                    hp.value = 100
                    vest.value = 0
                    range.value = 0
                    hitbox.value = 'chest'
            }

            computeSttk()
        }

        onMounted(() => {
            // $(document).ready(function () {
            //     $('#cheatsheet-table').DataTable({
            //         paging: false,
            //         searching: false,
            //         order: [0, 'asc'],
            //         responsive: true
            //     })
            // })
        })

        return {
            guns,
            hp,
            vest,
            range,
            hitbox,
            currentSort,
            gunShowStats,
            gunStats,
            longrange,
            addHeadshotMultiplier,
            hpChanged,
            vestChanged,
            hitboxChanged,
            rangeChanged,
            computeSttk,
            parseGunType,
            showOrHideGun,
            sortColumn,
            showStats,
            presetChanged,
            longrangeChanged
        }
    }
}
</script>

<style>
table.dataTable thead .sorting { background: url('../assets/img/sort_both.png') no-repeat center right; }
table.dataTable thead .sorting_asc { background: url('../assets/img/sort_asc.png') no-repeat center right; }
table.dataTable thead .sorting_desc { background: url('../assets/img/sort_desc.png') no-repeat center right; }
table.dataTable thead .sorting_asc_disabled { background: url('../assets/img/sort_asc_disabled.png') no-repeat center right; }
table.dataTable thead .sorting_desc_disabled { background: url('../assets/img/sort_desc_disabled.png') no-repeat center right; }
</style>