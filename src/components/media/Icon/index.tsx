import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ThemeColor, FontSize } from '../../../styles';

const useSvgImport = (name: string) => {
  const [loading, setLoading] = useState(false);
  const iconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        iconRef.current = (await import(`./icons/${name}.svg?react`)).default;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    importSvgIcon();
  }, [name]);

  return {
    loading: loading,
    SvgIcon: iconRef.current,
  };
};

interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
  name: 'expandLess' | 'expandMore';
  size?: FontSize;
  color?: ThemeColor;
}

const Icon = ({ name, size, color }: IconProps) => {
  const { loading, SvgIcon } = useSvgImport(name);
  
  return !loading && SvgIcon ? (
    <IconWrapper
      size={size}
      color={color}
    >
      {/* {SvgIcon.default} */}
      <SvgIcon />
    </IconWrapper>
  ) : (
    <>
      <Loading
        size={size ? size : '4'}
        color={color ? color : 'text'}
      />
    </>
  );
};

const IconWrapper = styled('span').withConfig({
  shouldForwardProp: prop => !['size', 'color'].includes(prop),
})<{ size?: FontSize; color?: ThemeColor }>`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;

  svg {
    ${props =>
      props.size
        ? `
      height: ${props.theme.fontSize[props.size]};
      width: ${props.theme.fontSize[props.size]};
    `
        : ''}
    fill: ${props => (props.color ? props.theme.color[props.color] : 'currentColor')}
  }
`;

const Loading = styled.span<{ size: FontSize; color: ThemeColor }>`
  ${props => `
    height: ${props.theme.fontSize[props.size]};
    width: ${props.theme.fontSize[props.size]};
  `}
  background-color: ${props => props.theme.color[props.color!]};
  border-radius: 999px;
  opacity: 0.5;
`;

export { Icon };
