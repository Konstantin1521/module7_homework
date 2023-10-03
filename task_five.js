class ElectricalDevice{
    constructor(name, power){
      this.name = name
      this.power = power
    }
  
    plugIn(){
      console.log(`${this.name} включен в розетку`)
    }
  
    unplug(){
      console.log(`${this.name} выключен из розетки`)
    }
  
  }
  
  class Lamp extends ElectricalDevice{
    constructor(power,name , color){
      super(name)
      super(power)
      this.color = color
    }
    changeColor(newColor) {
      this.color = newColor;
      console.log('Цвет лампы изменен на ' + this.color)
    }
  }
  
  const deskLamp = new Lamp('Настольная лампа', 25, 'белый')
  deskLamp.plugIn()
  deskLamp.changeColor('зеленый')
  
  class Computer extends ElectricalDevice{
    constructor(power, name, operatingSystem){
      super(name)
      super(power)
      this.operatingSystem = operatingSystem
    }
  
    installSoftware(software) {
      console.log('Установлено программное обеспечение: ' + software)
    }
  }
  
  const desktopComputer = new Computer('Настольный компьютер', 350, 'Windows')
  
  desktopComputer.plugIn()
  desktopComputer.installSoftware('spotify')
  
  
  console.log(deskLamp)
  console.log(desktopComputer)