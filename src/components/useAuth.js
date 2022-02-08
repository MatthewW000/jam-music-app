import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth(code) {
  const [accesstoken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()


  useEffect(() => {
    axios.post('http://localhost:3002/login', {
      code,
    }).then(res => {
      console.log(res.data)
      window.history.pushState({}, null, '/')
    })
    .catch(() => {
      window.location = '/'
    })
  }, [code])
}