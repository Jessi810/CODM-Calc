<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-9">
                <h1>Errors</h1>
                <ul>
                    <li v-for="gun of guns" :key="gun.id" :hidden="!(gun.errors.length > 0)">
                        {{ gun.name }}
                        <ul>
                            <li v-for="error of gun.errors" :key="error">
                                {{ error }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { gunStats } from '@/gun-stats.js'

export default {
    setup() {
        const guns = ref(gunStats)

        let idArr = []
        for (let [index, gun] of gunStats.entries())
        {
            gun.errors = []

            // ID
            switch (false)
            {
                case gun.hasOwnProperty('id'):
                    gun.errors.push('ID doesn\'t exist')
                    break
                case !(gun.id === undefined):
                    gun.errors.push('ID is undefined')
                    break
                case typeof gun.id === 'number':
                    gun.errors.push('ID is not a number')
                    break
            }

            if (idArr.includes(gun.id))
                gun.errors.push('ID is not unique')
            idArr.push(gun.id)

            // Damage Profile
            switch (false)
            {
                case gun.hasOwnProperty('damage'):
                    gun.errors.push('Damage profile doesn\'t exist')
                    break
                case !(gun.damage === undefined):
                    gun.errors.push('Damage profile is undefined')
                    break
                case Array.isArray(gun.damage):
                    gun.errors.push('Damage profile is not an array')
                    break
                case gun.damage.every((element) => { return typeof element === 'number' }):
                    gun.errors.push('Some element/s of damage profile is not a number')
                    break
                case gun.damage.length - 1 === gun.range.length:
                    gun.errors.push('Damage profile length is not correct')
                    break
            }

            // Range Profile
            switch (false)
            {
                case gun.hasOwnProperty('range'):
                    gun.errors.push('Range profile doesn\'t exist')
                    break
                case !(gun.range === undefined):
                    gun.errors.push('Range profile is undefined')
                    break
                case Array.isArray(gun.range):
                    gun.errors.push('Range profile is not an array')
                    break
                case gun.range.every((element) => { return typeof element === 'number' }):
                    gun.errors.push('Some element/s of range profile is not a number')
                    break
                case gun.damage.length - 1 === gun.range.length:
                    gun.errors.push('Range profile length is not correct')
                    break
            }

            // Firerate
            switch (false)
            {
                case gun.hasOwnProperty('firerate'):
                    gun.errors.push('Firerate doesn\'t exist')
                    break
                case !(gun.firerate === undefined):
                    gun.errors.push('Firerate is undefined')
                    break
                case typeof gun.firerate === 'number':
                    gun.errors.push('Firerate is not a number')
                    break
                case gun.firerate > 0:
                    gun.errors.push('Firerate is not valid number')
                    break
            }

            // Burst
            if (gun.hasOwnProperty('burst'))
            {
                switch (false)
                {
                    case gun.burst.hasOwnProperty('rounds'):
                        gun.errors.push('Burst Rounds doesn\'t exist')
                        break
                    case !(gun.burst.rounds === undefined):
                        gun.errors.push('Burst Rounds is undefined')
                        break
                    case typeof gun.burst.rounds === 'number':
                        gun.errors.push('Burst Rounds is not a number')
                        break
                    case gun.burst.rounds > 0:
                        gun.errors.push('Burst Rounds is not valid number')
                        break
                }

                switch (false)
                {
                    case gun.burst.hasOwnProperty('delay'):
                        gun.errors.push('Burst Delay doesn\'t exist')
                        break
                    case !(gun.burst.rounds === undefined):
                        gun.errors.push('Burst Delay is undefined')
                        break
                    case typeof gun.burst.rounds === 'number':
                        gun.errors.push('Burst Delay is not a number')
                        break
                    case gun.burst.rounds > 0:
                        gun.errors.push('Burst Delay is not valid number')
                        break
                }
            }

            // Hitbox/Damage multipliers
            switch (false)
            {
                case gun.hasOwnProperty('hitbox'):
                    gun.errors.push('Hitbox doesn\'t exist')
                    break
                case !(gun.hitbox === undefined):
                    gun.errors.push('Hitbox is undefined')
                    break
                case !(gun.hitbox === 'object'):
                    gun.errors.push('Hitbox is not an object')
                    break
            }

            guns.value[index].errors = gun.errors
            console.log(guns.value[index].errors)

            // if (gun.errors.length > 0) console.log(gun.name, gun.errors)
        }

        return {
            guns
        }
    }
}
</script>

<style>

</style>