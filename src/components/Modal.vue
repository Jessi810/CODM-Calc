<template>
    <div
        class="modal fade"
        id="showStatsModal"
        tabindex="-1"
        aria-labelledby="showStatsModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="showStatsModalLabel">{{ stats.name }} Stats</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <p>
                        <strong>Damage Profile:</strong> <br>
                        <ul>
                            <li v-for="(damage, index) in stats.damage" :key="damage">
                                {{ damage }} damage
                                <span v-if="index < stats.damage.length - 1"> up to {{ stats.range[index] }}</span>
                                <span v-if="index == stats.damage.length - 1">{{ stats.range[index - 1] + 1 }}+</span> meters
                            </li>
                        </ul>
                    </p>
                    <p>
                        <strong>Fire rate (RPM):</strong> {{ stats.firerate }}
                    </p>
                    <p v-if="'burst' in stats">
                        <strong>Burst Delay:</strong> {{ stats.burst.delay }} ms
                        <br>
                        <strong>Rounds/Burst:</strong> {{ stats.burst.rounds }} shots
                    </p>
                    <p>
                        <strong>Damage Multipliers:</strong> <br>
                        <ul>
                            <li v-for="(value, key) in stats.hitbox" :key="key">
                                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:  {{ value }}x
                            </li>
                        </ul>
                    </p>
                    <p>
                    <strong v-if="'updated' in stats">Updated on {{ stats.updated.desc }} - {{ stats.updated.at.toLocaleString('default', { month: 'long' }) }} {{ stats.updated.at.getDate() }}</strong>
                    </p>
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">
                        Save changes
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stats: Object
    }
}
</script>

<style>
</style>