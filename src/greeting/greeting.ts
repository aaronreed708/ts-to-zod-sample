export interface GreetingCreate {
  message: string;
}

export interface Greeting extends GreetingCreate {
  id: string;
}

