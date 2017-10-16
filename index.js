export default function fullApplicationProxy(fn, collectedArgs = []) {
  return new Proxy((...args) => fn(...collectedArgs)(...args), {
    get: (target, property, receiver) => {
      return fullApplicationProxy(fn, [...collectedArgs, property]);
    }
  })
}