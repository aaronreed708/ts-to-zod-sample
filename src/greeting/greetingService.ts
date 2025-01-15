import { Greeting, GreetingCreate } from "./greeting";

let gService: GreetingService;

export class GreetingService {

  private greetingStore = new Map<string, Greeting>();

  public static getInstance() : GreetingService {
    if (!gService) {
      gService = new GreetingService();
    }

    return gService;
  }

  public GreetingService() {}

  public getAll() : Greeting[] {

    return Array.from(this.greetingStore.values());

  }

  public getById(id: string): Greeting | undefined {

    if (!this.greetingStore.has(id)) {
      return;
    }

    return this.greetingStore.get(id);
  }

  public create(greetingCreateParams: GreetingCreate): Greeting {

    // create random id for new greeting
    const newGreetingId = Math.floor(Math.random() * 100000);
    const newGreeting = { id: newGreetingId.toString(), ...greetingCreateParams };

    this.greetingStore.set(newGreetingId.toString(), newGreeting);

    return newGreeting;

  }

}
