export const canUseDOM = typeof window === "object";

export function injectSchema(schema) {
    try {
        if (canUseDOM) {
            const existingScipts = document.querySelectorAll('script');
            const isSchemaAlreadyExists = Array.from(existingScipts).filter(script => script.type === "application/ld+json").length > 0;

            if (!isSchemaAlreadyExists) {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.innerText = JSON.stringify(schema);

                document.body.appendChild(script);
            }
        }
    }
    catch (err) {
        console.error('Unable to inject the schema : ', err);
    }
};