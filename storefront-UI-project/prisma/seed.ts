import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

let data: Product[] = [{
    "id": 321001,
    "name": "DHP485SFE 18V 3.0Ah Li-Ion LXT Brushless Cordless Combi Drill (",
    "manufacturer": "Makita",
    "quantityInStock": 26,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618064911/vue-fundamentals/ae235_pn5koq.jpg",
    "price": 159.99,
    "category": "Drills"
  },
  {
    "id": 321002,
    "name": "GSB 18 V-55 18V 2.0Ah Li-Ion Coolpack Brushless Cordless Combi Drill",
    "manufacturer": "Bosch",
    "quantityInStock": 37,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618064911/vue-fundamentals/ae235_pn5koq.jpg",
    "price": 99.99,
    "category": "Drills"
  },
  {
    "id": 321003,
    "name": "DCD776D2T- GB 18V 2.0Ah Li-Ion XR Cordless Combi Drill ",
    "manufacturer": "Dewalt",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065046/vue-fundamentals/ae235_t5vels.jpg",
    "price": 149.99,
    "category": "Drills"
  },
  {
    "id": 321004,
    "name": "DCS391 165MM 18V LI-ION XR CORDLESS CIRCULAR SAW - BARE",
    "manufacturer": "Dewalt",
    "quantityInStock": 9,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065126/vue-fundamentals/ae235_omg2wz.jpg",
    "price": 114.99,
    "category": "Saws"
  },
  {
    "id": 321005,
    "name": "EMIS254S 254MM ELECTRIC DOUBLE-BEVEL SLIDING MITRE SAW 220-240V",
    "manufacturer": "Erbauer",
    "quantityInStock": 7,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065336/vue-fundamentals/ae235_x4gbi5.jpg",
    "price": 179.99,
    "category": "Saws"
  },
  {
    "id": 321006,
    "name": "DWS773-GB 216MM ELECTRIC SINGLE-BEVEL SLIDING COMPOUND MITRE SAW 240V ",
    "manufacturer": "Dewalt",
    "quantityInStock": 10,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065418/vue-fundamentals/ae235_kawdlk.jpg",
    "price": 199.99,
    "category": "Saws"
  },
  {
    "id": 321007,
    "name": "DHS680Z 165MM 18V LI-ION LXT BRUSHLESS CORDLESS CIRCULAR SAW - BARE",
    "manufacturer": "Makita",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065457/vue-fundamentals/ae235_p0c9if.jpg",
    "price": 159.99,
    "category": "Saws"
  },
  {
    "id": 321008,
    "name": "DCS355N-XJ 18V LI-ION XR BRUSHLESS CORDLESS OSCILLATING MULTI-TOOL - BARE",
    "manufacturer": "Dewalt",
    "quantityInStock": 13,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065567/vue-fundamentals/ae235_lp8e0g.jpg",
    "price": 109.99,
    "category": "Multi tools"
  },
  {
    "id": 321009,
    "name": "DTM50Z 18V LI-ION LXT CORDLESS MULTI-TOOL - BARE ",
    "manufacturer": "Makita",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065663/vue-fundamentals/ae235_rezbvf.jpg",
    "price": 89.99,
    "category": "Multi tools"
  },
  {
    "id": 321010,
    "name": "EMT300-QC 300W ELECTRIC MULTI-TOOL 220-240V",
    "manufacturer": "Erbauer",
    "quantityInStock": 14,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065708/vue-fundamentals/ae235_libjf0.jpg",
    "price": 69.99,
    "category": "Multi tools"
  },
  {
    "id": 321011,
    "name": "MSMT300QC 300W ELECTRIC MULTI-TOOL 220-240V",
    "manufacturer": "MacAllister",
    "quantityInStock": 9,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065831/vue-fundamentals/ae235_xgqpet.jpg",
    "price": 39.98,
    "category": "Multi tools"
  },
  {
    "id": 321012,
    "name": "SP185 46CM 125CC SELF-PROPELLED ROTARY PETROL LAWN MOWER",
    "manufacturer": "Mountfield",
    "quantityInStock": 7,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618065948/vue-fundamentals/ae235_ovlsu8.jpg",
    "price": 249.99,
    "category": "Lawnmowers"
  },
  {
    "id": 321013,
    "name": "HP164 39CM 123CC HAND-PROPELLED ROTARY PETROL LAWN MOWER",
    "manufacturer": "Mountfield",
    "quantityInStock": 6,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066003/vue-fundamentals/ae235_mjhcar.jpg",
    "price": 149.99,
    "category": "Lawnmowers"
  },
  {
    "id": 321014,
    "name": "1600W 38CM ELECTRIC LAWN MOWER 220-240V",
    "manufacturer": "MacAllister",
    "quantityInStock": 9,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066060/vue-fundamentals/ae235_gvll6v.jpg",
    "price": 79.99,
    "category": "Lawnmowers"
  },
  {
    "id": 321015,
    "name": "36V 2.0AH LI-ION CORDLESS 37CM LAWN MOWER",
    "manufacturer": "Bosch",
    "quantityInStock": 8,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066109/vue-fundamentals/ae235_tkxp94.jpg",
    "price": 289.99,
    "category": "Lawnmowers"
  },
  {
    "id": 321016,
    "name": "ERO450 150MM ELECTRIC RANDOM ORBIT SANDER 220-240V",
    "manufacturer": "Erbauer",
    "quantityInStock": 14,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066251/vue-fundamentals/ae235_iep2qo.jpg",
    "price": 69.99,
    "category": "Sanders"
  },
  {
    "id": 321017,
    "name": "DBO180Z 125MM 18V LI-ION LXT CORDLESS RANDOM ORBITAL SANDER - BARE",
    "manufacturer": "Makita",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066305/vue-fundamentals/ae235_faiuon.jpg",
    "price": 99.98,
    "category": "Sanders"
  },
  {
    "id": 321018,
    "name": "ERO400 125MM ELECTRIC RANDOM ORBITAL SANDER 220-240V",
    "manufacturer": "Erbauer",
    "quantityInStock": 14,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066357/vue-fundamentals/ae235_fphqoc.jpg",
    "price": 49.99,
    "category": "Sanders"
  },
  {
    "id": 321019,
    "name": "ER2100 2100W ELECTRIC ROUTER 220-240V ",
    "manufacturer": "Erbauer",
    "quantityInStock": 9,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066430/vue-fundamentals/ae235_i1wbre.jpg",
    "price": 99.98,
    "category": "Routers"
  },
  {
    "id": 321020,
    "name": "EPR710 710W ¼\" ELECTRIC PALM ROUTER 220-240V",
    "manufacturer": "Erbauer",
    "quantityInStock": 3,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066474/vue-fundamentals/ae235_gkk9wx.jpg",
    "price": 69.99,
    "category": "Routers"
  },
  {
    "id": 321021,
    "name": "RT0700CX4/2 710W ¼\" ELECTRIC ROUTER TRIMMER 240V",
    "manufacturer": "Makita",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066550/vue-fundamentals/ae235_mvzjg5.jpg",
    "price": 129.99,
    "category": "Routers"
  },
  {
    "id": 321022,
    "name": "MSR1200 1200W ¼\" ELECTRIC ROUTER 220-240V ",
    "manufacturer": "MacAllister",
    "quantityInStock": 14,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066629/vue-fundamentals/ae235_ooh3kl.jpg",
    "price": 39.99,
    "category": "Routers"
  },
  {
    "id": 321023,
    "name": "MSSD36T-LI 3.6V 1.3AH LI-ION CORDLESS SCREWDRIVER",
    "manufacturer": "MacAllister",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066704/vue-fundamentals/ae235_apjspb.jpg",
    "price": 16.88,
    "category": "Screwdrivers"
  },
  {
    "id": 321024,
    "name": "DCF620P2K-GB 18V 5.0AH LI-ION XR BRUSHLESS CORDLESS COLLATED DRYWALL SCREWDRIVER",
    "manufacturer": "Dewalt",
    "quantityInStock": 11,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066744/vue-fundamentals/ae235_fh03xw.jpg",
    "price": 399.98,
    "category": "Screwdrivers"
  },
  {
    "id": 321025,
    "name": "DFR550Z 18V LI-ION LXT CORDLESS AUTO-FEED SCREWDRIVER - BARE",
    "manufacturer": "Makita",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066879/vue-fundamentals/ae235_yocip7.jpg",
    "price": 199.98,
    "category": "Screwdrivers"
  },
  {
    "id": 321026,
    "name": "M12 BD-202C 12V 2.0AH LI-ION REDLITHIUM CORDLESS SUB-COMPACT SCREWDRIVER",
    "manufacturer": "Milwaukee",
    "quantityInStock": 12,
    "image": "https://res.cloudinary.com/kc-cloud/image/upload/v1618066879/vue-fundamentals/ae235_yocip7.jpg",
    "price": 129.98,
    "category": "Screwdrivers"
  }]

async function main() {
    data.map(async (product) => {
      await prisma.product.create({
          data: {
              ...product
          }
      })
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })