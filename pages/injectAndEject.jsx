import { useEffect } from "react";
import schema from "../schema";
import {injectAndEject} from "../utils";

export default function InjectAndEject() {
    useEffect(() => {
        injectAndEject(schema);
    }, []);

    return (
        <>
            <h1>Inject and Eject</h1>
        </>
    );
};