import {useEffect} from 'react';
import Safe from 'react-safe';
import schema from '../schema';
import injectSchema from 'schema_injector';

export default function WithInjection() {
    useEffect(() => {
        injectSchema(schema);
    }, []);

    return (
        <>
            <h1>With Injection</h1>
            <Safe.script type="application/ld+json">
                {JSON.stringify(schema)}
            </Safe.script>
        </>
    );
};