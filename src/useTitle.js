import { useEffect } from "react"

const useTitle = title => {
	useEffect(() => {
		document.title = `Desh Career | ${title}`;
	}, [title])
}

export default useTitle;