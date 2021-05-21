const AgentsContent = [
  {
    id: 0,
    name: 'VIPER',
    link: '/pages/agents.html?agent=viper',
    image: '/assets/images/viper/viper.png',
    quote: 'The American chemist',
    role: 'CONTROLLER',
    role_symbol: '/assets/images/class/controller-class-symbol.png',
    bio: "Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will",
    ability: [
      {
        id: 0,
        ability_name: 'snake bite',
        ability_logo: '/assets/images/viper/viper-snake-bite.png',
        ability_description:
          'Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages enemies and applies Vulnerable, doubling incoming damage. Vulnerable lasts for 2 seconds upon leaving the area of effect.',
      },
      {
        id: 1,
        ability_name: 'poison cloud',
        ability_logo: '/assets/images/viper/viper-poison-cloud.png',
        ability_description:
          'Equip a gas emitter. Fire to throw the emitter that perpetually remains throughout the round. Re-use the ability to create a toxic gas cloud at the cost of fuel. This ability can be re-used more than once and can be picked up to be redeployed. Poison Orb goes on a 6 second cooldown after being deactivated.',
      },
      {
        id: 2,
        ability_name: 'toxic screen',
        ability_logo: '/assets/images/viper/viper-toxic-screen.png',
        ability_description:
          'Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be re-used more than once. Toxic Screen burns through walls, placing emitters at all valid locations (e.g., the ground) over its length.',
      },
      {
        id: 3,
        ability_name: "viper's pit",
        ability_logo: '/assets/images/viper/viper-vipers-pit.png',
        ability_description:
          'Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. Hold the ability key to disperse the cloud early. Lasts forever if Viper returns to refuel it every 15 seconds, or remains inside.',
      },
    ],
  },
  {
    id: 1,
    name: 'SAGE',
    link: '/pages/agents.html?agent=sage',
    image: '/assets/images/sage/sage.png',
    quote: 'The stronghold of china',
    role: 'SENTINEL',
    role_symbol: '/assets/images/class/sentinel-class-symbol.png',
    bio: 'Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight',
    ability: [
      {
        id: 0,
        ability_name: 'barrier orb',
        ability_logo: '/assets/images/sage/sage-barrier-orb.png',
        ability_description:
          'Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter. The wall "fortifies" after a 3-second delay, increasing its health. Shortly before expiring, the wall rapidly loses health',
      },
      {
        id: 1,
        ability_name: 'Slow Orb',
        ability_logo: '/assets/images/sage/sage-slow-orb.png',
        ability_description:
          'Equip a Slowing Orb. Fire to launch the Orb, which expands upon hitting the ground, creating a zone that slows players who walk on it.',
      },
      {
        id: 2,
        ability_name: 'Healing Orb',
        ability_logo: '/assets/images/sage/sage-healing-orb.png',
        ability_description:
          'Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time. The heal will stop upon taking damage.',
      },
      {
        id: 3,
        ability_name: 'Resurrection',
        ability_logo: '/assets/images/sage/sage-resurrection.png',
        ability_description:
          "Equip a resurrection ability. Fire with your crosshairs placed over an ally's corpse to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      },
    ],
  },
  {
    id: 2,
    name: 'JETT',
    link: '/pages/agents.html?agent=jett',
    image: '/assets/images/jett/jett.png',
    quote: 'The Korean Tornado',
    role: 'DUELIST',
    role_symbol: '/assets/images/class/duelist-class-symbol.png',
    bio: "Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    ability: [
      {
        id: 0,
        ability_name: 'Cloudburst',
        ability_logo: '/assets/images/jett/jett-cloudburst.png',
        ability_description:
          'Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.',
      },
      {
        id: 1,
        ability_name: 'updraft',
        ability_logo: '/assets/images/jett/jett-updraft.png',
        ability_description: 'Instantly propel Jett high into the air.',
      },
      {
        id: 2,
        ability_name: 'tailwind',
        ability_logo: '/assets/images/jett/jett-tailwind.png',
        ability_description:
          'Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.',
      },
      {
        id: 3,
        ability_name: 'blade storm',
        ability_logo: '/assets/images/jett/jett-blade-storm.png',
        ability_description:
          'Equip a set of 5 highly accurate throwing knives. Fire to throw a single knife. Alternative Fire to throw all remaining daggers at once. Restocks upon killing an enemy.',
      },
    ],
  },
  {
    id: 3,
    name: 'SKYE',
    link: '/pages/agents.html?agent=skye',
    image: '/assets/images/skye/skye.png',
    quote: 'The Guardian Of Australia',
    role: 'INITIATOR',
    role_symbol: '/assets/images/class/initiator-class-symbol.png',
    bio: "Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
    ability: [
      {
        id: 0,
        ability_name: 'Regrowth',
        ability_logo: '/assets/images/skye/skye-regrowth.png',
        ability_description:
          'Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.',
      },
      {
        id: 1,
        ability_name: 'trailblazer',
        ability_logo: '/assets/images/skye/skye-trailblazer.png',
        ability_description: 'Instantly propel Jett high into the air.',
      },
      {
        id: 2,
        ability_name: 'guiding light',
        ability_logo: '/assets/images/skye/skye-guiding-light.png',
        ability_description:
          'Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.',
      },
      {
        id: 3,
        ability_name: 'seekers',
        ability_logo: '/assets/images/skye/skye-seekers.png',
        ability_description:
          'Equip a set of 5 highly accurate throwing knives. Fire to throw a single knife. Alternative Fire to throw all remaining daggers at once. Restocks upon killing an enemy.',
      },
    ],
  },
  {
    id: 4,
    name: 'ASTRA',
    link: '/pages/agents.html?agent=astra',
    image: '/assets/images/astra/astra.png',
    quote: 'Ghanaian Predicter',
    role: 'CONTROLLER',
    role_symbol: '/assets/images/class/controller-class-symbol.png',
    bio: 'Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.',
    ability: [
      {
        id: 0,
        ability_name: 'GRAVITY WELL',
        ability_logo: '/assets/images/astra/astra-gravity-well.png',
        ability_description:
          'ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable',
      },
      {
        id: 1,
        ability_name: 'nova pulse',
        ability_logo: '/assets/images/astra/astra-nova-pulse.png',
        ability_description:
          'ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.',
      },
      {
        id: 2,
        ability_name: 'nebula / dissipate',
        ability_logo: '/assets/images/astra/astra-nebula-dissipate.png',
        ability_description:
          'ACTIVATE a Star to transform it into a Nebula (smoke). USE (F) a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.',
      },
      {
        id: 3,
        ability_name: 'astral form',
        ability_logo: '/assets/images/astra/astra-astral-form.png',
        ability_description:
          'ACTIVATE to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into Nova Pulses, Nebula, or Gravity Well.',
      },
    ],
  },
  {
    id: 5,
    name: 'REYNA',
    link: '/pages/agents.html?agent=reyna',
    image: '/assets/images/reyna/reyna.png',
    quote: 'The Mexican Vampire',
    role: 'DUELIST',
    role_symbol: '/assets/images/class/duelist-class-symbol.png',
    bio: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
    ability: [
      {
        id: 0,
        ability_name: 'LEER',
        ability_logo: '/assets/images/reyna/reyna-leer.png',
        ability_description:
          'Equip an ethereal eye. Activate to cast the eye a short distance forward at a fixed range, passing through obstructions in the way. The eye will Nearsight all enemies who can see it. The eye will disappear either after two seconds or receiving any bullet damage.',
      },
      {
        id: 1,
        ability_name: 'DEVOUR',
        ability_logo: '/assets/images/reyna/reyna-devour.png',
        ability_description:
          "Instantly consume a nearby Soul Orb, disabling Reyna's ability to fire for 1 second and creating a tether between Reyna and the Soul Orb whilst rapidly healing for 100 health over 3 seconds. The tether will break if it is caught between any obstacle for more than a second, ending the healing prematurely. This ability can Overheal but Reyna cannot exceed 150 health (including shields). The Overheal will decay after 25 seconds over 1 second, but can be refreshed whenever devour is recast. Excess health will be consumed before excess shield. If an enemy damaged by Reyna is killed within 3 seconds by another player/stimuli then a Soul Orb will be dropped, allowing her to Devour. If Empress is active, this skill will automatically cast, will not consume the Soul Orb, and will not create a tether.",
      },
      {
        id: 2,
        ability_name: 'DISMISS',
        ability_logo: '/assets/images/reyna/reyna-dismiss.png',
        ability_description:
          'Instantly consume a nearby Soul Orb, becoming intangible for 2 seconds and gaining a burst of movement speed for the first second of the duration. Reyna can change what weapon she will equip whilst Dismiss is active, always equipping the last weapon selected during Dismiss. If an enemy damaged by Reyna is killed within 3 seconds by another player/stimuli then a Soul Orb will be dropped, allowing her to Dismiss. If Empress is active, Reyna also becomes invisible.',
      },
      {
        id: 3,
        ability_name: 'EMPRESS',
        ability_logo: '/assets/images/reyna/reyna-empress.png',
        ability_description:
          'Enter a frenzy for 30 seconds, increasing firing, equip and reload speeds by 15%. Grants infinite charges of Soul Harvest abilities. Scoring a kill fully refreshes the duration.',
      },
    ],
  },
  {
    id: 6,
    name: 'KILLJOY',
    link: '/pages/agents.html?agent=killjoy',
    image: '/assets/images/killjoy/killjoy.png',
    quote: 'The genius of Germany',
    role: 'SENTINEL',
    role_symbol: '/assets/images/class/sentinel-class-symbol.png',
    bio: "Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    ability: [
      {
        id: 0,
        ability_name: 'ALARMBOT',
        ability_logo: '/assets/images/killjoy/killjoy-alarmbot.png',
        ability_description:
          'EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.',
      },
      {
        id: 1,
        ability_name: 'TURRET',
        ability_logo: '/assets/images/killjoy/killjoy-turret.png',
        ability_description:
          'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret',
      },
      {
        id: 2,
        ability_name: 'NANOSWARM',
        ability_logo: '/assets/images/killjoy/killjoy-nanoswarm.png',
        ability_description:
          'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots',
      },
      {
        id: 3,
        ability_name: 'LOCKDOWN',
        ability_logo: '/assets/images/killjoy/killjoy-lockdown.png',
        ability_description:
          'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.',
      },
    ],
  },
  {
    id: 7,
    name: 'RAZE',
    link: '/pages/agents.html?agent=raze',
    image: '/assets/images/raze/raze.png',
    quote: 'Explode Queen of Brazil',
    role: 'DUELIST',
    role_symbol: '/assets/images/class/duelist-class-symbol.png',
    bio: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”',
    ability: [
      {
        id: 0,
        ability_name: 'BOOM BOT',
        ability_logo: '/assets/images/raze/raze-boom-bot.png',
        ability_description:
          'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
      },
      {
        id: 1,
        ability_name: 'BLAST PACK',
        ability_logo: '/assets/images/raze/raze-blast-pack.png',
        ability_description:
          "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
      },
      {
        id: 2,
        ability_name: 'PAINT SHELLS',
        ability_logo: '/assets/images/raze/raze-paint-shells.png',
        ability_description:
          'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.',
      },
      {
        id: 3,
        ability_name: 'SHOWSTOPPER',
        ability_logo: '/assets/images/raze/raze-showstopper.png',
        ability_description:
          'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
      },
    ],
  },
  {
    name: 'VIEW ALL AGENTS',
    link: '/pages/agents.html',
  },
];

export default AgentsContent;
