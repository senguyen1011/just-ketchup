import { useEffect, useState } from 'react';
import styled from 'styled-components';

const useImageImport = (name: string) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  useEffect(() => {
    setLoading(true);
    const importImage = async (): Promise<void> => {
      try {
        let res;
        if (name.includes('.png')) {
          res = await import(`../../assets/${name.replace('.png', '')}.png`);
        } else {
          res = await import(`../../assets/${name.replace('.jpg', '')}.jpg`);
        }
        setImage(res.default);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    importImage();
  }, [name]);

  return { loading: loading, imageImport: image };
};

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  name: string;
  alt: string;
  widthAuto?: boolean;
}

const Image = ({ name, alt, widthAuto = false, style, className, }: ImageProps) => {
  const { loading, imageImport } = useImageImport(name);

  return imageImport && !loading ? (
    <ImageWrapper
      src={imageImport}
      alt={alt}
      widthAuto={widthAuto}
      style={style}
      className={className}
    />
  ) : null;
};

const ImageWrapper = styled('img').withConfig({
  shouldForwardProp: prop => 'widthAuto' !== prop,
})<{ widthAuto: boolean }>`
  ${props =>
    props.widthAuto ? 'max-height: 100%; width: auto;' : 'max-width: 100%; height: auto;'}
  display: block;
  object-fit: cover;
  border-style: none;
`;

export { Image };
