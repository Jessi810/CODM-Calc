<template>
    <div class="container">
        <!-- HP and Vest -->
        <div class="row justify-content-center my-3">
            <div class="col-sm-10 col-md-8">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Options ({{ hp }} HP,  {{ vest }}% dmg reduction,  {{ hitbox }} shots)
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                                
                                <!-- HP and Vest -->
                                <div class="row mb-3 justify-content-center">
                                    <div class="col-6">
                                        <strong>Target HP</strong>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp30" v-model="hp" @change="hpChanged" value="30">
                                            <label for="hp30" class="form-check-label">30 HP</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp100" v-model="hp" @change="hpChanged" value="100">
                                            <label for="hp100" class="form-check-label">100 HP</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp150" v-model="hp" @change="hpChanged" value="150">
                                            <label for="hp150" class="form-check-label">150 HP</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="hp250" v-model="hp" @change="hpChanged" value="250">
                                            <label for="hp250" class="form-check-label">250 HP</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <strong>Target Vest</strong>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="vest0" v-model="vest" @change="vestChanged" value="0">
                                            <label for="vest0" class="form-check-label">No Vest</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="vest25" v-model="vest" @change="vestChanged" value="25">
                                            <label for="vest25" class="form-check-label">Lv 1</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="vest35" v-model="vest" @change="vestChanged" value="35">
                                            <label for="vest35" class="form-check-label">Lv 2</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="vest45" v-model="vest" @change="vestChanged" value="45">
                                            <label for="vest45" class="form-check-label">Lv 3</label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Body shot -->
                                <div class="row justify-content-center">
                                    <div class="col-6">
                                        <strong>Body shot</strong>
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
                                    <div class="col-6">
                                        <strong>Assault Rifles:</strong>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" id="cbSelectAllAR" @click="showOrHideGun('AR', $event)" checked>
                                                Select all AR
                                            </label>
                                        </div>
                                        <div v-for="gun in guns" :key="gun.id">
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
                                        <div v-for="gun in guns" :key="gun.id">
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
                                        <div v-for="gun in guns" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'HG'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideLMG" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllHG')" checked>
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
                                        <div v-for="gun in guns" :key="gun.id">
                                            <div class="form-check" v-if="gun.type === 'LMG'">
                                                <label class="form-check-label">
                                                    <input type="checkbox" class="form-check-input" :id="'cb' + gun.type + gun.id" name="cbShowHideHG" @click="showOrHideGun(gun.type + gun.id, $event, 'cbSelectAllLMG')" checked>
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
        </div>

        <!-- Range -->
        <div class="row justify-content-center my-3">
            <div class="col-sm-10 col-md-8">
                <strong>Range to target</strong>
                <div class="input-group">
                    <input type="range" class="form-control w-50" style="height: auto;" id="range-slider" v-model="range" @input="rangeChanged" min="0" max="100" step="1">
                    <input type="number" class="form-control w-25" id="range-number" v-model="range" @input="rangeChanged" min="0" max="100">
                    <span class="input-group-text">meters</span>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="row justify-content-center my-3">
            <div class="col-sm-10 col-md-8">
                <!-- <div class="table-responsive"> -->
                    <table class="table table-hover table-bordered table-sm" id="cheatsheet-table">
                        <thead>
                            <tr>
                                <th hidden></th>
                                <th>Gun</th>
                                <!-- <th>Type</th> -->
                                <th>TTK</th>
                                <th>STK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="gun in guns" :key="gun.id" :id="gun.type + gun.id" :name="'rowGun' + gun.type">
                                <th hidden>{{ gun.id }}</th>
                                <td>
                                    {{ gun.name }}
                                </td>
                                <!-- <td>{{ parseGunType(gun.type) }}</td> -->
                                <td>{{ gun.ttk }} ms</td>
                                <td>{{ gun.stk }} {{ gun.stk < 2 ? 'shot' : 'shots' }}</td>
                            </tr>
                        </tbody>
                    </table>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gunStats } from '@/gun-stats.js'
import { Gun } from '@/assets/js/gun.js'
import $ from 'jquery'

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

        /*
            @param id = ID attribute of element that called this method
            @param event = Event object
        */
        const showOrHideGun = (id, event, idSelectAll) => {
            if (id === 'AR' || id === 'SMG' || id === 'LMG' || id === 'HG') {
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

        onMounted(() => {

            initializeTable()

            $(document).ready(function () {
                $('#cheatsheet-table').DataTable({
                    paging: false,
                    searching: false,
                    order: [0, 'asc']
                })
            })
        })

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
            parseGunType,
            showOrHideGun
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