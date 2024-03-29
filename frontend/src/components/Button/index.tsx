import { DefaultButton, OkButtonIcon, PhotoButtonIcon, CancelButtonIcon, AddButtonIcon } from './styles'

interface ButtonProps {
  isConfirm: boolean;
  isCancel: boolean;
  isImg: boolean;
  onClick: () => void;
}

export function Button({ isConfirm, isCancel, isImg, onClick }: ButtonProps) {
  
  return (
    <DefaultButton isImg={isImg} onClick={onClick}>
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