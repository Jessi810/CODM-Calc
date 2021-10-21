const gunStats = [
    {
        id: 1010,
        name: 'Type 25',
        type: 'AR',
        damage: [24, 22, 19, 16],
        range: [10, 17, 25],
        firerate: 769,
        bv: 563,
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
        bv: 692,
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
        bv: 529,
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
        bv: 692,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1041,
        name: 'AK-47 (5.45)',
        type: 'AR',
        damage: [25, 21, 16, 15],
        range: [14, 24, 35],
        firerate: 674,
        bv: 692,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1050,
        name: 'ASM10',
        type: 'AR',
        damage: [34, 26, 20],
        range: [15, 33],
        firerate: 550,
        bv: 692,
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
        bv: 563,
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
        bv: 600,
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
        bv: 600,
        hitbox: {
            head: 1.2,
            chest: 1.1
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 1090,
        name: 'ICR-1',
        type: 'AR',
        damage: [26, 24, 20, 19],
        range: [16, 26, 36],
        firerate: 630,
        bv: 600,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1100,
        name: 'Man-O-War',
        type: 'AR',
        damage: [37, 30, 24],
        range: [23, 43],
        firerate: 500,
        bv: 692,
        hitbox: {
            head: 1.1
        }
    },
    {
        id: 1110,
        name: 'KN-44',
        type: 'AR',
        damage: [28, 24, 19],
        range: [20, 33],
        firerate: 633,
        bv: 563,
        hitbox: {
            head: 1.2,
            chest: 1.1,
            arms: 1.1
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 1120,
        name: 'HBRa3',
        type: 'AR', 
        damage: [26, 22, 17],
        range: [14, 36],
        firerate: 697,
        bv: 563,
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
        bv: 600,
        hitbox: {
            head: 1.3
        }
    },
    {
        id: 1131,
        name: 'HVK-30 (LC)',
        type: 'AR', 
        damage: [27, 24, 17],
        range: [5, 26],
        firerate: 711,
        bv: 600,
        hitbox: {
            head: 2,
            chest: 1.3,
            stomach: 1.3,
            arms: {
                lower: 1.3
            }
        }
    },
    {
        id: 1140,
        name: 'DR-H',
        type: 'AR',
        damage: [32, 31, 25, 24, 19],
        range: [14, 17, 25, 35],
        firerate: 570,
        bv: 600,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 1141,
        name: 'DR-H (OTM)',
        type: 'AR',
        damage: [32, 31, 25, 24, 19],
        range: [14, 17, 25, 35],
        firerate: 570,
        bv: 600,
        hitbox: {
            head: 1.2,
            chest: 1.2
        }
    },
    {
        id: 1150,
        name: 'Peacekeeper MK2',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [11, 26, 41],
        firerate: 652,
        bv: 643,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1151,
        name: 'Peacekeeper MK2 (Rapid Fire)',
        type: 'AR',
        damage: [31, 29, 18, 16],
        range: [6, 16, 26],
        firerate: 728,
        bv: 643,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1152,
        name: 'Peacekeeper MK2 (Well-Forged)',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [16, 39, 61],
        firerate: 652,
        bv: 643,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1153,
        name: 'Peacekeeper MK2 (Taskforce)',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [16, 39, 61],
        firerate: 709,
        bv: 643,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1154,
        name: 'Peacekeeper MK2 (Long-Range)',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [22, 52, 82],
        firerate: 652,
        bv: 643,
        hitbox: {
            head: 1.2,
            chest: 1.1
        }
    },
    {
        id: 1155,
        name: 'Peacekeeper MK2 (Integral Suppressor)',
        type: 'AR',
        damage: [26, 24, 19, 18],
        range: [13, 32, 51],
        firerate: 652,
        bv: 643,
        hitbox: {
            head: 1.2,
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
        bv: 692,
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
        bv: 450,
        hitbox: {
            head: 1.5,
            chest: 1.1
        }
    },
    {
        id: 1171,
        name: 'AS VAL (FMJ)',
        type: 'AR',
        damage: [48, 44, 35, 30],
        range: [25, 38, 75],
        firerate: 257,
        bv: 1000,
        hitbox: {
            head: 2.1,
            chest: 1.3,
            stomach: 1.3,
            groin: 1.3,
            arms: 1.3
        }
    },
    {
        id: 1180,
        name: 'CR-56 AMAX',
        type: 'AR', 
        damage: [25, 24, 20, 16],
        range: [13, 18, 26],
        firerate: 710,
        bv: 643,
        hitbox: {
            head: 1.5,
            chest: 1.3,
            stomach: 1.1,
            arms: {
                upper: 1.1
            }
        }
    },
    {
        id: 1181,
        name: 'CR-56 AMAX (M67)',
        type: 'AR', 
        damage: [48, 44, 35, 31],
        range: [30, 42, 60],
        firerate: 280,
        bv: 1000,
        hitbox: {
            head: 2.1,
            chest: 1.3,
            stomach: 1.1,
            arms: {
                lower: 1.3
            }
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 1190,
        name: 'M13',
        type: 'AR', 
        damage: [24, 18, 16],
        range: [25, 39],
        firerate: 880,
        bv: 563,
        hitbox: {
            head: 1.5
        }
    },
    {
        id: 1200,
        name: 'Swordfish',
        type: 'AR', 
        damage: [24, 22],
        range: [20],
        firerate: 900,
        bv: undefined,
        burst: {
            rounds: 4,
            delay: 250
        },
        hitbox: {
            head: 1.4,
            chest: 1.2,
            stomach: 1.1,
            groin: 1.1,
            arms: 1.2,
            legs: 0.9
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 1201,
        name: 'Swordfish (5-rounds Burst)',
        type: 'AR', 
        damage: [24, 22],
        range: [40],
        firerate: 900,
        bv: undefined,
        burst: {
            rounds: 5,
            delay: 250
        },
        hitbox: {
            head: 1.4,
            chest: 1.2,
            stomach: 1.1,
            groin: 1.1,
            arms: 1.2,
            legs: 0.9
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    // {
    //     id: 2010,
    //     name: 'M21 EBR',
    //     type: 'SR',
    //     damage: [91, 71],
    //     range: [65],
    //     firerate: 350,
    //     hitbox: {
    //     }
    // },
    {
        id: 2080,
        name: 'Rytec',
        type: 'SR', 
        damage: [80, 70],
        range: [51],
        firerate: 120,
        bv: 750,
        hitbox: {
            head: 2.0,
            chest: 1.5,
            stomach: 1.3,
            arms: 1.5
        }
    },
    {
        id: 2081,
        name: 'Rytec (Thermite)',
        type: 'SR', 
        damage: [60, 40],
        thermite: {
            damage: 10,
            ticks: 4,
            ticks_per_second: undefined
        },
        range: [51],
        firerate: 120,
        bv: 750,
        hitbox: {
            head: 5.25,
            chest: 1.85,
            stomach: 1.5,
            arms: {
                upper: 1.85,
                lower: 2.35
            }
        }
    },
    {
        id: 2082,
        name: 'Rytec (Explosive)',
        type: 'SR', 
        damage: [80, 60],
        explosive: undefined,
        range: [51],
        firerate: 120,
        bv: 750,
        hitbox: {
            head: 2.5,
            chest: 2.0,
            stomach: 2.0,
            arms: 2.0
        }
    },
    {
        id: 3010,
        name: 'S36',
        type: 'LMG',
        damage: [30, 23, 18],
        range: [16, 38],
        firerate: 750,
        bv: 600,
        hitbox: {

        }
    },
    {
        id: 3020,
        name: 'UL736',
        type: 'LMG',
        damage: [28, 24, 20, 19],
        range: [26, 36, 56],
        firerate: 620,
        bv: 643,
        hitbox: {
            head: 1.2
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 3030,
        name: 'RPD',
        type: 'LMG',
        damage: [31, 23, 18],
        range: [21, 56],
        firerate: 666,
        bv: 692,
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
        bv: 692,
        hitbox: {
            head: 1.1
        }
    },
    {
        id: 3050,
        name: 'Chopper',
        type: 'LMG',
        damage: [25, 21, 17],
        range: [14, 36],
        firerate: 750,
        bv: 692,
        hitbox: {
            head: 1.2
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 3060,
        name: 'Holger 26',
        type: 'LMG',
        damage: [31, 25, 21, 19],
        range: [16, 20, 50],
        firerate: 710,
        bv: 692,
        hitbox: {
            head: 1.2
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 3070,
        name: 'Hades',
        type: 'LMG',
        damage: [29, 22, 19],
        range: [24, 36],
        firerate: 650,
        bv: 692,
        hitbox: {
            head: 1.1
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 3071,
        name: 'Hades (RFB)',
        type: 'LMG',
        damage: [31, 22, 19],
        range: [17, 25],
        firerate: 730,
        bv: 728,
        hitbox: {
            head: 1.1
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 4010,
        name: 'RUS-79U',
        type: 'SMG',
        damage: [28, 24, 18, 15],
        range: [5, 19, 33],
        firerate: 769,
        bv: 529,
        hitbox: {
            head: 1.1,
            chest: 1.1,
            legs: 0.9
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 4020,
        name: 'Chicom',
        type: 'SMG',
        damage: [27, 24, 20, 17],
        range: [9, 16, 21],
        firerate: 788,
        bv: 563,
        burst: {
            rounds: 3,
            delay: 150
        },
        hitbox: {
            head: 1.4,
            chest: 1.3,
            groin: 0.9,
            legs: 0.9
        }
    },
    {
        id: 4030,
        name: 'PDW-57',
        type: 'SMG',
        damage: [27, 22, 17, 15],
        range: [6, 15, 28],
        firerate: 745,
        bv: 529,
        hitbox: {
            head: 1.2,
            chest: 1.1,
            legs: 0.9
        },
        updated: {
            at: new Date('September 21, 2021'),
            desc: 'Season 8 (2021)'
        }
    },
    {
        id: 4040,
        name: 'Razorback',
        type: 'SMG',
        damage: [30, 23, 19],
        range: [16, 29],
        firerate: 630,
        bv: 529,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4041,
        name: 'Razorback (RF)',
        type: 'SMG',
        damage: [30, 23, 19],
        range: [16, 29],
        firerate: 693,
        bv: 529,
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
        bv: 529,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4060,
        name: 'HG 40',
        type: 'SMG',
        damage: [26, 24, 20, 17],
        range: [10, 16, 25],
        firerate: 670,
        hitbox: {
            head: 1.2,
            chest: 1.1,
            arms: 1.1,
            legs: 0.95
        },
        updated: {
            at: new Date('September 21, 2021'),
            desc: 'Season 8 (2021)'
        }
    },
    {
        id: 4070,
        name: 'Pharo',
        type: 'SMG',
        damage: [34, 26, 21, 19, 16],
        range: [12, 19, 24, 30],
        firerate: 790,
        bv: 500,
        burst: {
            rounds: 4,
            delay: 155
        },
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4080,
        name: 'GKS',
        type: 'SMG',
        damage: [28, 24, 19],
        range: [20, 30],
        firerate: 600,
        bv: 600,
        hitbox: {
            head: 1.3,
            chest: 1.1
        }
    },
    {
        id: 4090,
        name: 'Cordite',
        type: 'SMG',
        damage: [24, 22, 19, 18, 16],
        range: [8, 19, 26, 33],
        firerate: 800,
        bv: 500,
        hitbox: {
            head: 1.2,
            legs: 0.9
        }
    },
    {
        id: 4100,
        name: 'QQ9',
        type: 'SMG',
        damage: [25, 23, 17, 15],
        range: [11, 16, 21],
        firerate: 830,
        bv: 563,
        hitbox: {
            head: 1.1,
            legs: 0.9
        }
    },
    {
        id: 4101,
        name: 'QQ9 (10mm)',
        type: 'SMG',
        damage: [26, 23, 17, 15],
        range: [12, 18, 24],
        firerate: 747,
        bv: 563,
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
        range: [12, 17, 24],
        firerate: 1110,
        bv: 529,
        hitbox: {
            head: 1.1,
            chest: 1.1,
            stomach: 1.05,
            groin: 0.9,
            arms: 0.9,
            legs: 0.8
        },
        updated: {
            at: new Date('August 26, 2021'),
            desc: 'Season 7 (2021)'
        }
    },
    {
        id: 4120,
        name: 'AGR 556',
        type: 'SMG',
        damage: [25, 21, 17, 15],
        range: [12, 16, 24],
        firerate: 755,
        bv: 529,
        hitbox: {
            head: 1.05,
            legs: 0.9
        }
    },
    {
        id: 4121,
        name: 'AGR 556 (5.56)',
        type: 'SMG',
        damage: [27, 23, 20, 18],
        range: [15, 20, 30],
        firerate: 675,
        bv: 529,
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
        bv: 529,
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
        firerate: 983,
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
        bv: 529,
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
        bv: 529,
        hitbox: {
            head: 1.2
        }
    },
    {
        id: 4150,
        name: 'MX9 (MP)',
        type: 'SMG',
        damage: [30, 24, 16, 15],
        range: [12, 16, 21],
        firerate: 850,
        bv: 529,
        hitbox: {
            head: 1.1,
            groin: 0.9,
            legs: 0.7
        }
    },
    {
        id: 4151,
        name: 'MX9 (MP+LC)',
        type: 'SMG',
        damage: [30, 24, 16, 15],
        range: [12, 16, 21],
        firerate: 850,
        bv: 529,
        hitbox: {
            head: 1.4,
            chest: 1.15,
            legs: 0.9
        }
    },
    {
        id: 4152,
        name: 'MX9 (BR)',
        type: 'SMG',
        damage: [25, 21, 18, 16],
        range: [12, 16, 21],
        firerate: 850,
        bv: 529,
        hitbox: {
            head: 1.1,
            groin: 0.9,
            legs: 0.7
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 4153,
        name: 'MX9 (BR+LC)',
        type: 'SMG',
        damage: [25, 21, 18, 16],
        range: [12, 16, 21],
        firerate: 850,
        bv: 529,
        hitbox: {
            head: 1.4,
            chest: 1.15,
            legs: 0.9
        },
        updated: {
            at: new Date('October 21, 2021'),
            desc: 'Season 9 (2021)'
        }
    },
    {
        id: 7010,
        name: 'J358',
        type: 'HG',
        damage: [60, 40, 34, 25],
        range: [19, 21, 35],
        firerate: 380,
        bv: 600,
        hitbox: {
            head: 1.5
        }
    },
    {
        id: 7020,
        name: 'MW11',
        type: 'HG',
        damage: [26, 20, 17, 16],
        range: [21, 25, 28],
        firerate: 440,
        hitbox: {
            head: 1.4
        }
    },
    {
        id: 7030,
        name: '.50 GS',
        type: 'HG',
        damage: [70, 55, 48],
        range: [11, 26],
        firerate: 330,
        hitbox: {
            head: 1.5
        }
    },
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
    },
    {
        id: 7050,
        name: 'Crossbow',
        type: 'HG',
        damage: [80],
        range: [],
        firerate: 25.5,
        hitbox: {
            head: 2,
            chest: 1.5,
            stomach: 1.3,
            arms: 1.5
        }
    }
]

export { gunStats }
