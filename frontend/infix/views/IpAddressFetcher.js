import React,{useEffect} from "react";

const IpAddressFetcher = () => {
    useEffect(() => {

        const pc = new RTCPeerConnection();
        pc.createDataChannel("");
        pc.createOffer()
            .then(offer=>pc.setLocalDescription(offer))
            .catch(e=>console.log(e));
        pc.onicecandidate = (event) => {
            const candidate = event.candidate;
            if(candidate){
                const ipAddress = candidate.address;
                console.log("Local Ip Address: ", ipAddress);
            }
        }
    }
    , []);
    return null;
}
export default IpAddressFetcher;

