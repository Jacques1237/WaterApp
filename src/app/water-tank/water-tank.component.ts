import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-tank',
  templateUrl: './water-tank.component.html',
  imports: [CommonModule],
  styleUrls: ['./water-tank.component.scss'],
  standalone: true, // Mark this component as standalone
})
export class WaterTankComponent {
  waterLevel: number = 50; // initial water level, can be set dynamically

  constructor() { 
    this.simulateWaterLevel();
  }

  simulateWaterLevel() {
    setInterval(() => {
      this.waterLevel = Math.floor(Math.random() * 101); // random level between 0-100%
    }, 3000); // change water level every 3 seconds
  }

  getPercentageLines() {
    const lines = [];
    for (let i = 0; i <= Math.floor(this.waterLevel / 20); i++) {
      lines.push(i * 20);
    }
    return lines;
  }
}
