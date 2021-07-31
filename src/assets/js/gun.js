
function Gun(gun)
{
    this.name = gun.name
    this.type = gun.type
    this.damage = gun.damage
    this.range = gun.range
    this.firerate = gun.firerate
    this.hitbox = gun.hitbox

    this.generateDamageProfile = function()
    {
        if (this.range.length < this.damage.length) this.range.push(100)
    
        let ctr = 0
        let damageProfile = []
        for (let x = 0; x < this.damage.length; x++)
        {
            for (let y = ctr; y <= this.range[x]; y++)
            {
                damageProfile.push(this.damage[x])
                ctr++
            }
        }

        return damageProfile
    }

    this.computeStk = function(params)
    {
        let vestReduction = (100 - params.vest) / 100
        let hitboxMultiplier

        if (params.hitbox in this.hitbox) hitboxMultiplier = this.hitbox[params.hitbox]
        else hitboxMultiplier = 1
        
        let damage = Math.trunc(
            params.damageProfile[params.range] * hitboxMultiplier * vestReduction
        )
        let health = params.hp

        return Math.ceil(
            health / damage
        )
    }

    this.computeTtk = function(params)
    {
        return Math.trunc(
            60000 / this.firerate * (params.stk - 1)
        )
    }
}

export { Gun }
