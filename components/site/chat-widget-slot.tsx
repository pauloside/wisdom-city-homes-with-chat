import Script from 'next/script'

/**
 * Chatbase embed. Uses the official snippet from Chatbase → Deploy → Website widget,
 * with the bot ID filled in below.
 */
const CHATBASE_BOT_ID = 'JacL6Am47XLw14yPKhfI2'

const snippet = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="${CHATBASE_BOT_ID}";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`

export function ChatWidgetSlot() {
  if (!CHATBASE_BOT_ID) return null
  return (
    <Script
      id="chatbase-widget-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  )
}
