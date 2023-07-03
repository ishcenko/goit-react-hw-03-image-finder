import styled from 'styled-components';

export const ImageGalleryCard = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(239, 12, 12, 0.2),
    0px 1px 1px 0px rgba(237, 12, 12, 0.14),
    0px 2px 1px -1px rgba(182, 245, 9, 0.12);
`;

export const GalleryCardImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.08);
    cursor: zoom-in;
  }
`;
