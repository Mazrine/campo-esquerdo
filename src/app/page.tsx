import {Button} from "@/base/components/Button";
import React from "react";

// Updated homepage using the component
export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Button
            size={'large'}>
                ENTRAR
            </Button>
        </div>
    );
}