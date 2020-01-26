export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  onToActive() {
    this.inactiveToActiveCounter++;
    console.log('Active: ' + this.inactiveToActiveCounter);
  }

  onToInactive() {
    this.activeToInactiveCounter++;
    console.log('Inactive: ' + this.activeToInactiveCounter);
  }
}
