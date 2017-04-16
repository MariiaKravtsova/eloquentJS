const dragonEvents = [
    {type: 'attack', value: 12, target: 'player-dorkman'},
    {type: 'yawn', value: 40},
    {type: 'eat', target: 'horse'},
    {type: 'attack', value: 23, target: 'player-fluffykins'},
    {type: 'attack', value: 12, target: 'player-dorkman'}
]

const totalDamageOnDorkman = dragonEvents
    .filter(event => event.type === 'attack')
    .filter(event => event.target === 'player-dorkman')
    .map(event =>  event.value)
    .reduce((prev, value) => (prev || 0) + value)

    console.log('total damage: ', totalDamageOnDorkman);