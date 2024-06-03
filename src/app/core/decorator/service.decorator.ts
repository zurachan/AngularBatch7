export function ServicePath(servicePath: string) {
  return (constructor: any) => {
    constructor.prototype.servicePath = servicePath;
  };
}
