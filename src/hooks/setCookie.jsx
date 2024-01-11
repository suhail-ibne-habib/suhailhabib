import React from 'react';
import Cookie from 'js-cookie'

export default function setCookie( cookieTitle, cookieValue ){
    Cookie.set( cookieTitle, cookieValue )
}