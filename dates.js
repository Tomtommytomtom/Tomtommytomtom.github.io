const TWO_WEEKS_IN_MS = 12096e5

const startDate = Date.parse("2022-09-30T14:00:00")

const dates = new Array(10).fill(null).map((_,i) => {
  return new Date(startDate + i * TWO_WEEKS_IN_MS)
})

const nextDate = dates.find(d => d.getTime() > Date.now()).toLocaleDateString('de-DE')