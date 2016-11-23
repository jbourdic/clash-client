import {Component} from "@angular/core";
import {BattleService} from "./battle.service";
import {Battle} from "./battle";

@Component({
  selector: 'battles',
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    BattleService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./battle.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './battle.component.html'
})

export class BattleComponent {

  battles: Battle[];

  newDetected: Boolean;

  constructor(
    private battleService: BattleService
  ) {}
    ngOnInit() {
      console.log('hello `Battle` component');
      this.getBattles();
      // this.title.getData().subscribe(data => this.data = data);
    }

    getBattles(): void {
      this.battleService.getBattles().then(battles => {
        this.battles = battles;
        console.log(battles);
      });
    }

    newBattle(): void {
      this.newDetected = true;
      console.log('new battle detected');
    }

    add(title: string, user: string): void {
      if (!title || !user) { return ;}

      var data = {
        title: title,
        user1: user
      };

      this.battleService.createBattle(data).then(battle => {
        console.log(battle);
        this.battles.push(battle);
        this.newDetected = false;
      });
    }
}
