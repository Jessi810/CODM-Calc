const gunStats = [
    {
        id: 1010,
        name: 'Type 25',
        type: 'AR',
        damage: [24, 22, 19, 16],
        range: [10, 17, 25],
        firerate: 769,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1020,
        name: 'M16',
        type: 'AR', 
        damage: [30, 27, 22],
        range: [21, 41],
        firerate: 788,
        burst: {
            rounds: 3,
            delay: 266
        },
        hitbox: {
            head: 1.4,
            chest: 1.4,
            arms: 1.2
        }
    },
    {
        id: 1030,
        name: 'AK117',
        type: 'AR',
        damage: [24, 20, 16],
        range: [20, 36],
        firerate: 769,
        hitbox: {
            head: 1.15,
            legs: 0.9
        }
    },
    {
        id: 1040,
        name: 'AK-47',
        type: 'AR',
        damage: [33, 26, 23, 21],
        range: [20, 30, 55],
        firerate: 550,
        hitbox: {
            head: 1.16
        }
    },
    {
        id: 1050,
        name: 'ASM10',
        type: 'AR',
        damage: [34, 26, 20],
        range: [15, 33],
        firerate: 500,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1060,
        name: 'M4',
        type: 'AR',
        damage: [24, 20, 19],
        range: [16, 36],
        firerate: 682,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1070,
        name: 'BK57',
        type: 'AR', 
        damage: [27, 22, 19],
        range: [18, 30],
        firerate: 665,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1080,
        name: 'LK24',
        type: 'AR',
        damage: [26, 22, 18],
        range: [23, 38],
        firerate: 633,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1090,
        name: 'ICR-1',
        type: 'AR',
        damage: [26, 24, 20, 19],
        range: [16, 26, 36],
        firerate: 600,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    // {
    //     id: 1100,
    //     name: 'Man-O-War',
    //     type: 'AR'
    // },
    {
        id: 1110,
        name: 'KN-44',
        type: 'AR',
        firerate: 633,
        damage: [26, 24, 19],
        range: [20, 33],
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1120,
        name: 'HBRa3',
        type: 'AR', 
        damage: [26, 22, 17],
        range: [14, 36],
        firerate: 697,
        hitbox: {

        }
    },
    {
        id: 1130,
        name: 'HVK-30',
        type: 'AR', 
        damage: [23, 18, 16],
        range: [22, 34],
        firerate: 711,
        hitbox: {
            head: 1.3
        }
    },
    {
        id: 1131,
        name: 'HVK-30 (LC)',
        type: 'AR', 
        damage: [35, 24, 19],
        range: [5, 26],
        firerate: 711,
        hitbox: {
            head: 1.6,
            legs: 0.8
        }
    },
    // {
    //     id: 1140,
    //     name: 'DR-H',
    //     type: 'AR'
    // },
    {
        id: 1150,
        name: 'Peacekeeper MK2 (LRB)',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [22, 52, 82],
        firerate: 652,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1151,
        name: 'Peacekeeper MK2 (RFB)',
        type: 'AR',
        damage: [31, 29, 18, 16],
        range: [6, 16, 26],
        firerate: 740,
        hitbox: {
            head: 1.23,
            chest: 1.1
        }
    },
    {
        id: 1160,
        name: 'FR .556',
        type: 'AR',
        damage: [25, 19],
        range: [26],
        firerate: 675,
        hitbox: {
            head: 1.2,
            chest: 1.2
        }
    },
    {
        id: 1170,
        name: 'AS VAL',
        type: 'AR', 
        damage: [28, 25, 22, 19],
        range: [7, 20, 30],
        firerate: 800,
        hitbox: {
            head: 1.5,
            chest: 1.1
        }
    },
    { // need verification
        id: 1180,
        name: 'CR-56 AMAX',
        type: 'AR', 
        damage: [32, 31, 26, 20],
        range: [13, 18, 26],
        firerate: 710,
        hitbox: {
            head: 1.16,
            stomach: 0.84,
            arms: 0.84,
            legs: 0.79
        }
    },
    // {
    //     id: 3010,
    //     name: 'S36',
    //     type: 'LMG'
    // },
    // {
    //     id: 3020,
    //     name: 'UL736',
    //     type: 'LMG'
    // },
    {
        id: 3030,
        name: 'RPD',
        type: 'LMG',
        damage: [31, 23, 18],
        range: [21, 56],
        firerate: 666,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 3040,
        name: 'M4LMG',
        type: 'LMG',
        damage: [32, 23, 19],
        range: [21, 51],
        firerate: 633,
        hitbox: {
            head: 1.1
        }
    },
    // {
    //     id: 3050,
    //     name: 'Chopper',
    //     type: 'LMG'
    // },
    {
        id: 3060,
        name: 'Holger 26',
        type: 'LMG',
        damage: [31, 25, 21, 19],
        range: [17, 25, 51],
        firerate: 710,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 4010,
        name: 'RUS-79U',
        type: 'SMG',
        damage: [28, 24, 18, 15],
        range: [5, 19, 33],
        firerate: 769,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    // {
    //     id: 4020,
    //     name: 'Chicom',
    //     type: 'SMG'
    // },
    {
        id: 4030,
        name: 'PDW-57',
        type: 'SMG',
        damage: [27, 22, 17, 15],
        range: [6, 15, 28],
        firerate: 600,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    // {
    //     id: 4040,
    //     name: 'Razorback',
    //     type: 'SMG'
    // },
    {
        id: 4040,
        name: 'Razorback (RF)',
        type: 'SMG',
        damage: [30, 23, 19],
        range: [16, 29],
        firerate: 703,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4050,
        name: 'MSMC',
        type: 'SMG',
        damage: [25, 21, 18, 16],
        range: [8, 14, 19],
        firerate: 916,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    // {
    //     id: 4060,
    //     name: 'HG 40',
    //     type: 'SMG'
    // },
    // {
    //     id: 4070,
    //     name: 'Pharo',
    //     type: 'SMG'
    // },
    // {
    //     id: 4080,
    //     name: 'GKS',
    //     type: 'SMG'
    // },
    // {
    //     id: 4090,
    //     name: 'Cordite',
    //     type: 'SMG'
    // },
    {
        id: 4100,
        name: 'QQ9',
        type: 'SMG',
        damage: [25, 23, 17, 15],
        range: [11, 16, 21],
        firerate: 850,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4110,
        name: 'Fennec',
        type: 'SMG',
        damage: [23, 18, 13, 12],
        range: [16, 21, 28],
        firerate: 1110,
        hitbox: {
            head: 1.1,
            chest: 1.1,
            groin: 0.9,
            arms: 0.9,
            legs: 0.9
        }
    },
    // {
    //     id: 4120,
    //     name: 'AGR 556',
    //     type: 'SMG',
    // },
    {
        id: 4120,
        name: 'AGR 556 (5.56)',
        type: 'SMG',
        damage: [27, 23, 20, 18],
        range: [15, 20, 30],
        firerate: 682,
        hitbox: {
            head: 1.05,
            legs: 0.9
        }
    },
    {
        id: 4130,
        name: 'QXR',
        type: 'SMG',
        damage: [22, 19, 16, 12],
        range: [8, 15, 25],
        firerate: 889,
        hitbox: {
            head: 1.3,
            chest: 1.3,
            legs: 0.9
        }
    },
    {
        id: 4131,
        name: 'QXR (EB)',
        type: 'SMG',
        damage: [22, 19, 16, 12],
        range: [8, 15, 20],
        firerate: 1029,
        hitbox: {
            head: 1.3,
            chest: 1.1,
            legs: 0.9
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
            head: 1.2,
            groin: 0.8,
            legs: 0.8
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
            head: 1.2
        }
    },
    {
        id: 4150,
        name: 'MX9',
        type: 'SMG',
        damage: [30, 24, 16, 15],
        range: [12, 16, 21],
        firerate: 850,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    // {
    //     id: 7010,
    //     name: 'J358',
    //     type: 'HG'
    // },
    // {
    //     id: 7020,
    //     name: 'MW11',
    //     type: 'HG'
    // },
    // {
    //     id: 7030,
    //     name: '.50 GS',
    //     type: 'HG'
    // },
    {
        id: 7040,
        name: 'Renetti',
        type: 'HG',
        damage: [30, 23, 21, 19],
        range: [25, 36, 45],
        firerate: 720,
        burst: {
            rounds: 3,
            delay: 333
        },
        hitbox: {
            head: 2,
            chest: 1.6,
            arms: 1.6,
        }
    }
]

export { gunStats }
