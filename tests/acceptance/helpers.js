export function cleanRegister(context, name, value) {
    if (typeof(context) === 'string') {
        throw 'You need to use test context as the first property instead of string for cleanRegister.';
    }

    const { application } = context.owner || context;

    application.unregister(name);

    application.register(name, value);
}