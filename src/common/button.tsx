import styled from 'styled-components';

interface IButton {
  width?: string;
  height?: string;
  left?: string;
  right?: string;
  top?: string;
  isActive?: boolean;
}

export const Button = styled.button<IButton>`
  cursor: pointer;
  position: absolute;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  top: ${({ top }) => top || null};
  left: ${({ left }) => left || null};
  right: ${({ right }) => right || null};
  background-color: 'var(--brand-orange-001)';
  background-color: ${({ isActive }) =>
    isActive ? 'var(--brand-orange-001)' : 'var(--gray-gray-005)'};
  color: var(--gray-white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.08);
`;
