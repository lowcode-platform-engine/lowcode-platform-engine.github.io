import {useEffect, useMemo, useState} from "react";
import {Skeleton} from "antd";
import loader from "../../../utils/loader";
import ExampleCode from "./ExampleCode";

const components = {
  ComponentOne: ExampleCode.ComponentOne,
  Header: ExampleCode.Header,
  Sider: ExampleCode.Sider,
  Content: ExampleCode.Content,
  Footer: ExampleCode.Footer,
  Container: ExampleCode.Container
}

const sdkExampleContainerId = 'OpenReactRenderSdkExample'
export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initRender = () => {
    const {ReactDOM, React} = window as any
    const { RenderView } = window['OpenReactRenderSdk'];

    ReactDOM.createRoot(document.getElementById(sdkExampleContainerId)!).render(React.createElement(RenderView, {
      schema: ExampleCode.schema,
      components: components,
      renderKey: '1.0'
    }))
  }

  useEffect(() => {
    (async () => {
      try {
        await loader.LibOpenReactRenderSdk()
      }catch (e) {
        setError(e)
      }
      setLoading(false)
    })()
  }, []);

  const mounted = useMemo(() => {
    return !loading && !error
  }, [loading, error])

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        initRender()
      })
    }
  }, [mounted]);

  if (loading) {
    return (
      <div className={'loadingFormContainer'}>
        <Skeleton active={true} rootClassName={"skeletonRoot"}/>
      </div>
    )
  }
  if (error) {
    return <ExampleCode.ErrorView />
  }
  const { RenderView } = window['OpenReactRenderSdk'];

  if (!RenderView) {
    return <ExampleCode.ErrorView />
  }
  return (
    <div id={sdkExampleContainerId} className={'exampleItem'} style={{width: '100%'}} />
  )
}