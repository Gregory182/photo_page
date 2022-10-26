import styled from 'styled-components'

const SModal = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
`

const SModalContent = styled.div`
  width: 40%;
  height: 40%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  font-size: 1.3rem;
  padding: 0.5em 1em;
`
const SModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  span {
    cursor: pointer;
  }
`

function Modal({ children, isOpen, handleClose }) {
  if (!isOpen) return null

  return (
    <SModal className='modal'>
      <SModalContent className='modal-content'>
        <SModalHeader>
          <div>Dodaj sesje</div>
          <div>
            <span onClick={handleClose}>X</span>
          </div>
        </SModalHeader>
        <div style={{ flex: 8 }}>{children}</div>
      </SModalContent>
    </SModal>
  )
}
export default Modal
