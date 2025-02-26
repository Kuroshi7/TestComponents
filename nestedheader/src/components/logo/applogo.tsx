import { Link } from '@chakra-ui/react';

type Props = {
    variant?: 'DARK' | 'DEFAULT';
}

export function AppLogo(props: Props) {

	return (
		<Link 
        display={'flex'}
        textDecoration={'none'}
        fontSize={25}
        fontWeight={700}
        background={'none'}
        //href={RoutesConstants.PAGINA_INICIAL_PATH}
        >
			<img 
                src={props.variant === 'DARK' 
                ? 'https://files.abdconst.com.br/images/logos/logo-abdconst-main.svg'
                : 'https://files.abdconst.com.br/images/logos/logo-abdconst-main-red.webp'}
                alt='Logo oficial ABDConst'
                title='Logo oficial ABDConst' 
                width={150} 
                height={25}
            />
		</Link>
	);
}