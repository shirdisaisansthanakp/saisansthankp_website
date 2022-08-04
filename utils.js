export const canUseDOM = typeof window === "object";

export function injectSchema(schema) {
    try {
        if(canUseDOM) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.innerText = JSON.stringify(schema);

            document.body.appendChild(script);
        }
    }
    catch(err) {
        console.error('Unable to inject the schema : ', err);
    }
};