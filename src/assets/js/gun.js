
class Gun
{
    constructor(gun)
    {
        this.id = gun.id
        this.name = gun.name
        this.type = gun.type
        this.damage = gun.damage
        this.range = gun.range
        this.firerate = gun.firerate
        this.hitbox = gun.hitbox
        if ('burst' in gun)
            this.burst = gun.burst
        if ('updated' in gun)
            this.updated = gun.updated
    }

    sttk(params)
    {
        let multiplier = (params.hitbox in this.hitbox) ? this.hitbox[params.hitbox] : 1
        
        let sttk = {
            stk: [],
            ttk: []
        }

        if (this.range.length < this.damage.length)
            this.range.push(params.maxRange ?? 100)

        let c = 0
        for (let x = 0; x < this.damage.length; x++)
        {
            // If Golden Long Range mod is selected and headshot (adds x0.75 damage to head)
            let damage = ('addHeadshotMultiplier' in params && params.hitbox === 'head')
                ? damage = Math.trunc(this.damage[x] * (multiplier + params.addHeadshotMultiplier))
                : damage = Math.trunc(this.damage[x] * multiplier)
            let tMissed = parseInt('missed' in params ? params.missed : 0)
            let stk = Math.ceil(params.hp / damage) + tMissed
            let burstCount, burstDelay

            let tRange = params.longrange === 0 ? this.range[x] : this.range[x] * (params.longrange / 100 + 1)
            for (let y = c; y <= tRange; y++)
            {
                sttk.stk.push(stk)

                if ('burst' in this)
                {
                    burstCount = Math.ceil(stk / this.burst.rounds)
                    burstDelay = this.burst.delay * (burstCount - 1)
                    
                    sttk.ttk.push(Math.trunc(60000 / this.firerate * (stk - burstCount)) + burstDelay)
                }
                else
                    sttk.ttk.push(Math.trunc(60000 / this.firerate * (stk - 1)))
                
                c++
            }
        }

        return sttk
    }

    // Pre-season 8
    // sttk(params)
    // {
    //     let reduction = (100 - params.vest) / 100
    //     let multiplier = (params.hitbox in this.hitbox) ? this.hitbox[params.hitbox] : 1

    //     let sttk = {
    //         stk: [],
    //         ttk: []
    //     }

    //     if (this.range.length < this.damage.length)
    //         this.range.push(params.maxRange ?? 100)

    //     let c = 0
    //     for (let x = 0; x < this.damage.length; x++)
    //     {
    //         let damage = Math.trunc(this.damage[x] * multiplier * reduction)
    //         let stk = Math.ceil(params.hp / damage)
    //         let burstCount, burstDelay

    //         if ('burst' in this)
    //         {
    //             burstCount = Math.ceil(stk / this.burst.rounds)
    //             burstDelay = this.burst.delay * (burstCount - 1)
    //         }

    //         for (let y = c; y <= this.range[x]; y++)
    //         {
    //             sttk.stk.push(stk)

    //             if ('burst' in this)
    //                 sttk.ttk.push(Math.trunc(60000 / this.firerate * (stk - burstCount)) + burstDelay)
    //             else
    //                 sttk.ttk.push(Math.trunc(60000 / this.firerate * (stk - 1)))
                
    //             c++
    //         }
    //     }

    //     return sttk
    // }
}

export { Gun }
