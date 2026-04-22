import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {INITIAL_Z_INDEX,WINDOW_CONFIG} from "#constants/index.js";

const useWindowStore = create(
    immer((set) => ({
        windows:WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;

                if (!win.isOpen) {
                    win.isOpen = true;
                }

                win.zIndex = state.nextZIndex++;

                if (data !== undefined) {
                    win.data = data;
                }
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;

                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win || !win.isOpen) return;

                win.zIndex = state.nextZIndex++;
            }),
    }))
);

export default useWindowStore;