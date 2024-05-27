import { Spin } from 'antd';
import './index.scss'
import {useEffect, useMemo, useState} from "react";
import {LoadService} from "./LoadService";
export default() => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const loadService = new LoadService({
          enableSandbox: true
        })
        const res = await loadService.importScript('/playground/index.umd.js');
        console.log(res);
        if (!document.querySelector('#playgroundStyle')) {
          const style = await loadService.importStyle('/playground/style.css');
          console.log(style);
          style.id='playgroundStyle'
          document.querySelector('body').appendChild(style);
        }

        console.log(window)

      }catch (e) {
        setError(e)
        console.log(e)
      }

      setLoading(false);
    })()

  }, []);


  const initPlayground = () => {
    const {ReactDOM, React, SchemaOnLinePlayground} = window as any

    ReactDOM.createRoot(document.getElementById('playgroundView')!).render(React.createElement(SchemaOnLinePlayground.SchemaPreviewOnline))
  }

  const mounted = useMemo(() => {
    return !loading && !error
  }, [loading, error])

  useEffect(() => {
    console.log("mounted", mounted)
    if (mounted) {
      setTimeout(() => {
        initPlayground()
      })
    }
  }, [mounted]);

  if (!mounted) {
    return  <Spin className={'loading'} spinning={true} />
  }
  return (
    <div className={'playgroundView'} id={'playgroundView'}></div>
  )
}