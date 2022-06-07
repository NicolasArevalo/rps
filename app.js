const $ = q => document.querySelector(q)

const piedra = $("#piedra")
const papel = $("#papel")
const tijera = $("#tijera")

const form = $('form')

const elementos = ['piedra', 'papel', 'tijera']
const res = $('.res')

let pc
const aleatorio = 
() => Math.floor(Math.random() * elementos.length)

function jugar(arma){
  pc = elementos[aleatorio()]
  console.log(`%cLa máquina sacó ${pc}`, 'color: blue; font-weight: 600;') 
  if(arma == 'piedra'){
    if(pc == 'papel'){
      res.innerText = `Ouch, la máquina sacó ${pc}, te envolvieron.😵 Perdiste.`
    }
    if(pc == 'piedra'){
      res.innerText = `Vaya choque, la máquina sacó ${pc}, 🤜🏽🤛🏽 empate.`
    }
    if(pc == 'tijera'){
      res.innerText = `Epa, la máquina sacó ${pc}, la rompiste.winwinwin🏆.`
    }
  }
  if(arma == 'papel'){
    if(pc == 'papel'){
      res.innerText = `😐, la máquina sacó ${pc}, 🤲🏽 empataron.`
    }
    if(pc == 'piedra'){
      res.innerText = `Ojito, la máquina sacó ${pc}, la envolviste.winwinwin🏆.`
    }
    if(pc == 'tijera'){
      res.innerText = `Ouch, la máquina sacó ${pc}, te cortaron pa.✂️.`
    }
  }
  if(arma == 'tijera'){
    if(pc == 'papel'){
      res.innerText = `Epa, la máquina sacó ${pc}, la cortaste pa, cúal era la necesidad?.winiwinwin🏆.`
    }
    if(pc == 'piedra'){
      res.innerText = `Ouch, la máquina sacó ${pc}, te hicieron añicos.😵 Perdiste.`
    }
    if(pc == 'tijera'){
      res.innerText = `😐, la máquina sacó ${pc}, se tijerearon.🤝🏽 empate.`
    }
  }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const arma = e.target.elements.armas.value
    jugar(arma)
})