import { useState, useEffect } from 'react';
import { getCurrentUserInfo } from "../../firebase/user";

export const DisplayNote = () => {

    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
      const loadUserInfo = async () => {
        const results = await getCurrentUserInfo();
        setUserInfo(results);
      }
      loadUserInfo();
    }, []);
    return (<div></div>)
}