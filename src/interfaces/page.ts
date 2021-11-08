import React from 'react'

export default interface IPage {
    name: string;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}