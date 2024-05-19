import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function TabButtons(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return(
        <button>{props.children}</button>
    )
}