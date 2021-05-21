const AgentsContent = [
  {
    id: 0,
    name: 'VIPER',
    link: '/pages/agents.html?agent=viper',
    image: '/assets/images/viper.png',
    quote: 'The American chemist',
    bio: "Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will",
    ability: [
      {
        id: 0,
        ability_name: 'snake bite',
        ability_logo: '/assets/images/viper-snake-bite.png',
        ability_description:
          'Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages enemies and applies Vulnerable, doubling incoming damage. Vulnerable lasts for 2 seconds upon leaving the area of effect.',
      },
      {
        id: 1,
        ability_name: 'poison cloud',
        ability_logo: '/assets/images/viper-poison-cloud.png',
        ability_description:
          'Equip a gas emitter. Fire to throw the emitter that perpetually remains throughout the round. Re-use the ability to create a toxic gas cloud at the cost of fuel. This ability can be re-used more than once and can be picked up to be redeployed. Poison Orb goes on a 6 second cooldown after being deactivated.',
      },
      {
        id: 2,
        ability_name: 'toxic screen',
        ability_logo: '/assets/images/viper-toxic-screen.png',
        ability_description:
          'Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be re-used more than once. Toxic Screen burns through walls, placing emitters at all valid locations (e.g., the ground) over its length.',
      },
      {
        id: 3,
        ability_name: "viper's pit",
        ability_logo: '/assets/images/viper-vipers-pit.png',
        ability_description:
          'Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. Hold the ability key to disperse the cloud early. Lasts forever if Viper returns to refuel it every 15 seconds, or remains inside.',
      },
    ],
  },
  {
    id: 1,
    name: 'SAGE',
    link: '/pages/agents.html?agent=sage',
    image: '/assets/images/sage.png',
    quote: 'The stronghold of china',
    bio: 'Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight',
    ability: [
      {
        id: 0,
        ability_name: 'barrier orb',
        ability_logo: '/assets/images/sage-barrier-orb.png',
        ability_description:
          'Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter. The wall "fortifies" after a 3-second delay, increasing its health. Shortly before expiring, the wall rapidly loses health',
      },
      {
        id: 1,
        ability_name: 'Slow Orb',
        ability_logo: '/assets/images/sage-slow-orb.png',
        ability_description:
          'Equip a Slowing Orb. Fire to launch the Orb, which expands upon hitting the ground, creating a zone that slows players who walk on it.',
      },
      {
        id: 2,
        ability_name: 'Healing Orb',
        ability_logo: '/assets/images/sage-healing-orb.png',
        ability_description:
          'Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time. The heal will stop upon taking damage.',
      },
      {
        id: 3,
        ability_name: 'Resurrection',
        ability_logo: '/assets/images/sage-resurrection.png',
        ability_description:
          "Equip a resurrection ability. Fire with your crosshairs placed over an ally's corpse to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      },
    ],
  },
  {
    id: 2,
    name: 'JETT',
    link: '/pages/agents.html?agent=jett',
    image: '/assets/images/jett.png',
    quote: 'The Korean Tornado',
    bio: "Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    ability: [
      {
        id: 0,
        ability_name: 'Cloudburst',
        ability_logo: '/assets/images/jett-cloudburst.png',
        ability_description:
          'Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.',
      },
      {
        id: 1,
        ability_name: 'updraft',
        ability_logo: '/assets/images/jett-updraft.png',
        ability_description: 'Instantly propel Jett high into the air.',
      },
      {
        id: 2,
        ability_name: 'tailwind',
        ability_logo: '/assets/images/jett-tailwind.png',
        ability_description:
          'Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.',
      },
      {
        id: 3,
        ability_name: 'blade storm',
        ability_logo: '/assets/images/jett-blade-storm.png',
        ability_description:
          'Equip a set of 5 highly accurate throwing knives. Fire to throw a single knife. Alternative Fire to throw all remaining daggers at once. Restocks upon killing an enemy.',
      },
    ],
  },
  {
    id: 3,
    name: 'SKYE',
    link: '/pages/agents.html?agent=skye',
    image: '/assets/images/skye.png',
    quote: 'The Guardian Of Australia',
    bio: "Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
    ability: [
      {
        id: 0,
        ability_name: 'Regrowth',
        ability_logo: '/assets/images/skye-regrowth.png',
        ability_description:
          'Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.',
      },
      {
        id: 1,
        ability_name: 'trailblazer',
        ability_logo: '/assets/images/skye-trailblazer.png',
        ability_description: 'Instantly propel Jett high into the air.',
      },
      {
        id: 2,
        ability_name: 'guiding light',
        ability_logo: '/assets/images/skye-guiding-light.png',
        ability_description:
          'Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.',
      },
      {
        id: 3,
        ability_name: 'seekers',
        ability_logo: '/assets/images/skye-seekers.png',
        ability_description:
          'Equip a set of 5 highly accurate throwing knives. Fire to throw a single knife. Alternative Fire to throw all remaining daggers at once. Restocks upon killing an enemy.',
      },
    ],
  },
  {
    name: 'VIEW ALL AGENTS',
    link: '/pages/agents.html',
  },
];

export default AgentsContent;
