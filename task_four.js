// Родительская функция для электроприборов

function ElectricalDevice(name, power) {
    this.name = name
    this.power = power
  }
  
  ElectricalDevice.prototype.plugIn = function(){
    console.log(`${this.name} включен в розетку`)
  }
  
  ElectricalDevice.prototype.unplug = function(){
    console.log(`${this.name} выключен из розетки`)
  }
  
  // Дочерний прибор: лампа
  
  function Lamp(name, power, color){
    ElectricalDevice.call(this, name, power)
    this.color = color
  }
  
  Lamp.prototype = new ElectricalDevice()
  
  Lamp.prototype.changeColor = function(newColor) {
    this.color = newColor;
    console.log('Цвет лампы изменен на ' + this.color)
  }
  
  const deskLamp = new Lamp('Настольная лампа', 25, 'белый')
  deskLamp.plugIn()
  deskLamp.changeColor('зеленый')
  
  
  // Дочерний прибор: компьютер
  
  function Computer(name, power, operatingSystem) {
    ElectricalDevice.call(this, name, power)
    this.operatingSystem = operatingSystem
  }
  
  Computer.prototype = new ElectricalDevice()
  
  Computer.prototype.installSoftware = function(software) {
    console.log('Установлено программное обеспечение: ' + software)
  }
  
  const desktopComputer = new Computer('Настольный компьютер', 350, 'Windows')
  
  desktopComputer.plugIn()
  desktopComputer.installSoftware('spotify')
  
  
  console.log(deskLamp)
  console.log(desktopComputer)