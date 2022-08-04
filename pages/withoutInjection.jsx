import Safe from 'react-safe';
import schema from '../schema';

export default function WithoutInjection() {
    return (
        <>
            <h1>Without Injection</h1>
            <Safe.script type="application/ld+json">
                {JSON.stringify(schema)}
            </Safe.script>
        </>
    );
};