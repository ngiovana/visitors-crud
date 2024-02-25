import { useState } from 'react';
import { DefaultButton, OkButtonIcon, PhotoButtonIcon, CancelButtonIcon, AddButtonIcon } from './styles'

interface ButtonProps {
  isConfirm: boolean;
  isCancel: boolean;
  isImg: boolean;
}

export function Button({ isConfirm, isCancel, isImg }: ButtonProps) {
  
  return (
    <DefaultButton isImg={isImg}>
      { isConfirm ? (
        <>
          <OkButtonIcon fontSize="smaller" />
          Ok
        </>
      ) : isCancel ? (
        <>
          <CancelButtonIcon fontSize="smaller" />
          Cancelar
        </>
      ) : isImg ? (
        <>
          <PhotoButtonIcon fontSize="small" />
          Foto
        </>
      ) : (
        <>
          <AddButtonIcon fontSize="small" />
          Adicionar
        </>
      )
      }
      
    </DefaultButton>
  )
}