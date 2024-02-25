import styled from 'styled-components'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PortraitIcon from '@mui/icons-material/Portrait'
import CancelOutlined from '@mui/icons-material/CancelOutlined'
import AddIcon from '@mui/icons-material/Add'

interface DefaultButtonProps {
  isImg: boolean;
}

export const DefaultButton = styled.button<DefaultButtonProps>`
  height: 2rem;
  width: ${({ isImg }) => isImg ? "5rem" : "8rem"};

  font-size: 14px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;

  border: none;
  border-radius: 4px;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme.purple};

  button:hover {
    opacity: 0.5;
  }
`

export const OkButtonIcon = styled(CheckCircleIcon)``

export const PhotoButtonIcon = styled(PortraitIcon)``

export const CancelButtonIcon = styled(CancelOutlined)``

export const AddButtonIcon = styled(AddIcon)``