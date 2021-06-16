// Tried to implement TS decorator based approach, but can't handle initialization of wrappee property. It is not initialized
export function fragile(target: Object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDesciptor.value;

  propertyDesciptor.value = () => `${method.apply(target)}
**MARK FRAGILE**`;

  return propertyDesciptor;
}
