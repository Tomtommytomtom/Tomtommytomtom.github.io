let cpuCounter = 14

const setCpuCounter = () => {
  const counterField = document.querySelector("#cpu-counter")
  counterField.innerHTML = `CPU Usage: ${cpuCounter}%`
}

setInterval(() => {
  const shouldChange = Math.random()
  if(shouldChange < 0.6) {
    return
  }

  const sign = Math.random()
  const amount = Math.floor(Math.random() * 3)

  if(sign >= 0.5){
    cpuCounter += amount
  } else {
    cpuCounter -= amount
  }

  if(cpuCounter < 0){
    cpuCounter = 0
  }
  if(cpuCounter > 100) {
    cpuCounter = 100
  }

  setCpuCounter()
},500)