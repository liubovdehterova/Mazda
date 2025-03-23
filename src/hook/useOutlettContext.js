import {useContext} from "react";
import {OutletContext} from "../hoc/OutletProvider";

export function useOutletContext() {
    useContext(OutletContext);
}