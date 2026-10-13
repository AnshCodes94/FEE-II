import { createContext } from "react";
import { Child_gen1 } from "./Components/Child_gen1";

export const LoginContext = createContext();
export const DarkModeContext = createContext();

export function App() {
    return (
        <>
            <LoginContext value={false}>
                <DarkModeContext value={true}>
                    <section className="hf fxc bg50 p2">
                        <div className="w51 fyc b1 p2">
                            <h2>Use Context Demo</h2>
                            <h3>Level-A (Top level)</h3>
                            <h3>
                                Context(global variable) for login status and dark mode have been created here and value also given at its top level
                            </h3>
                            <Child_gen1 />
                        </div>
                    </section>
                </DarkModeContext>
            </LoginContext>
        </>
    );
}