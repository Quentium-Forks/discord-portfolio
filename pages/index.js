import ServerNavigation from '../components/navigation/ServerNavigation'
import ChannelContent from '../components/room/ChannelContent'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useAckee from 'use-ackee'

export default function Home() {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      useAckee(url, {
        server: 'https://stats.anthony-adam.fr',
        domainId: '79c45307-311c-4080-8461-84e4d92fcb71'
      }, {
        detailed: false,
        ignoreLocalhost: false,
        ignoreOwnVisits: false
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  console.log("           o                      o       o                                             \n" +
    "          <|>                    <|>     <|>                                            \n" +
    "          / \\                    < >     / >                                            \n" +
    "        o/   \\o       \\o__ __o    |      \\o__ __o      o__ __o    \\o__ __o    o      o  \n" +
    "       <|__ __|>       |     |>   o__/_   |     v\\    /v     v\\    |     |>  <|>    <|> \n" +
    "       /       \\      / \\   / \\   |      / \\     <\\  />       <\\  / \\   / \\  < >    < > \n" +
    "     o/         \\o    \\o/   \\o/   |      \\o/     o/  \\         /  \\o/   \\o/   \\o    o/  \n" +
    "    /v           v\\    |     |    o       |     <|    o       o    |     |     v\\  /v   \n" +
    "   />             <\\  / \\   / \\   <\\__   / \\    / \\   <\\__ __/>   / \\   / \\     <\\/>    \n" +
    "                                                                                 /      \n" +
    "                                                                                o       \n" +
    "                                                                             __/>       \n" +
    "                        o                 o                                \n" +
    "                       <|>               <|>                               \n" +
    "                       / \\               < \\                               \n" +
    "                     o/   \\o        o__ __o/     o__ __o/  \\o__ __o__ __o  \n" +
    "                    <|__ __|>      /v     |     /v     |    |     |     |> \n" +
    "                    /       \\     />     / \\   />     / \\  / \\   / \\   / \\ \n" +
    "                  o/         \\o   \\      \\o/   \\      \\o/  \\o/   \\o/   \\o/ \n" +
    "                 /v           v\\   o      |     o      |    |     |     |  \n" +
    "                />             <\\  <\\__  / \\    <\\__  / \\  / \\   / \\   / \\ \n" +
    "                                                                           \n" +
    "                                                                           \n" +
    "                                                                           \n")
  console.log("%cSi vous êtes là c'est que vous vous y connaissez ne serait-ce qu'un peu en dév. On peut discuter ? (ou vous avez voulu trouver l'easter eggs)", 'background: orange; color: black');
  console.log("%c-> contact@anthony-adam.fr <-", 'background: cyan; color: black');
  return (
    <div className="home">
      <div className="left" >
        <ServerNavigation />
      </div>
      <div className="right">
        <ChannelContent />
      </div>
    </div>
  )
}
