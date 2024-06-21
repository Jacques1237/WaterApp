import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterTankComponent } from './water-tank/water-tank.component'; // Import the WaterTankComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WaterTankComponent], // Add WaterTankComponent to the imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure this is `styleUrls` instead of `styleUrl`
})
export class AppComponent {
  title = 'WaterlevelApp';
}
