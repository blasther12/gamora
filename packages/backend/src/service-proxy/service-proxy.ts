export class ServiceProxy<T> {
  constructor(private readonly service: T) {}
  getInstance(): T {
    return this.service;
  }
}
