import styled from 'styled-components'

const SModal = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.9s ease-in-out;
  overflow: hidden;
  z-index: 999;
  backdrop-filter: blur(2px);
`

const SModalContent = styled.div`
  min-width: 40%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  display: flex;
  font-size: 1.3rem;
  backdrop-filter: blur(2px);
  /* padding: 0.5em 1em; */
`
const SModalHeader = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: space-between;
  flex: 1;

  span {
    cursor: pointer;
  }
`

function Modal({
  children,
  isOpen,
  handleClose,
  width = '400px',
  height = '400px',
}) {
  if (!isOpen) return null

  return (
    <SModal>
      <SModalContent>
        <SModalHeader>
          <div>dupa</div>
        </SModalHeader>
        <div style={{flex: 8}}>{children}</div>
      </SModalContent>
    </SModal>
  )
}
export default Modal
