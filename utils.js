export const canUseDOM = typeof window === "object";

export function injectSchema(schema) {
    try {
        if (canUseDOM) {
            const script = document.createElement('script');
            script.id = 'json_ld_schema';
            script.type = 'application/ld+json';
            script.innerText = JSON.stringify(schema);

            document.body.appendChild(script);
        }
    }
    catch (err) {
        console.error('Unable to inject the schema : ', err);
    }
};

export function ejectSchema() {
    try {
        document.getElementById('json_ld_schema').remove();
    }
    catch(err) {
        console.error('Unable to eject the schema : ', err);
    }
};

export function injectAndEject(schema) {
    try {
        injectSchema(schema);
        setTimeout(() => {
            ejectSchema();
        }, 10000);
    }
    catch(err) {
        console.error('Unable to injectAndEject the schema : ', err);
    }
};