import styled, {css} from 'styled-components';


const SIZES = {
    sm: css`
        --button-font-size: 0.875rem;
        --button-padding: 8px 12px;
        --button-radius: 4px;
        `,
    md: css`
        --button-font-size: 1rem;
        --button-padding: 12px 16px;
        --button-radius: 8px;
        `,
    lg: css`
        --button-font-size: 1.25rem;
        --button-padding: 16px 20px;
        --button-radius: 12px;
        `,
    };

const AllButton = ({contents, size }) => {
    
    const sizeStyle = SIZES[size];
    
    
    return (
        <>
            { contents ? <Button sizeStyle={sizeStyle}>{contents}</Button> : null }
        </>
        

    );
};

export default AllButton;




const Button =styled.button`
    &:hover,
    &:focus {
    background: var(--button-hover-bg-color, #80558d);
    }
`;
