import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {
       document.title = `${title} - Shutter Blender`;
    },[title])
};

export default useTitle;