import {WindowControls} from "#components";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {TRASH_LOCATION} from "#constants/index.js"
const Trash=()=>{
    const trash=TRASH_LOCATION.children?? [];
    const {setActiveLocation} = useLocationStore();
    const { openWindow } = useWindowStore();
    const handleOpenItem=(item)=>{
        if (item.kind === "folder") {
            setActiveLocation(item);
            openWindow("finder");
        } else {
            openWindow(`${item.fileType}${item.kind}`, item);
        }
    };
    return(<>
            <div id="window-header">
                <WindowControls target="trash"/>
                <h2>Trash</h2>
            </div>
            <div className="p-5 bg-white h-full">
                <ul className="flex flex-wrap gap-8">
                    {trash.map((item)=>(
                        <li key={item.id} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => handleOpenItem(item)}>
                            <img src={item.icon} alt={item.name} className="size-12 object-contain group-hover:scale-110 transition-transform" />
                            <p className="text-xs text-center w-20 truncate">{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const TrashWindow=WindowWrapper(Trash,"trash");
export default TrashWindow;