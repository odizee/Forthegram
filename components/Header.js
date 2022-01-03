// import Image from 'next/image';
// import Link  from 'next/link';
import styled from 'styled-components';
// import Nav from './Nav';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const HeaderStyle = styled.div`
    padding: 2rem 20rem;
    display: grid;
    grid-template-columns: 30% auto 20%;
    background: var(--color-grey-light-1);
    align-items: center;
`;

const Logo = styled.div`
    font-size: 3rem;
    background: var(--color-primary-dark);
    font-weight: 600;
    justify-self: start;
    --x-offset: -0.0625em;
    --y-offset: 0.0625em;
    --stroke: 0.025em;
    --stroke-color: lightblue;
    padding: .5rem;
    box-shadow: 
    -0.225em
    0.225em
    0px
    var(--color-secondary);
    text-shadow: 
    
    var(--x-offset)
    var(--y-offset)
    0px
    var(--color-primary), 
    
    calc( var(--x-offset) - var(--stroke) )
    calc( var(--y-offset) + var(--stroke) )
    0px
    var(--color-grey-light-1);
  
    a {
        text-decoration: none;
        color: var(--color-secondary);
        font-family: var(--font-display);
    }
    
`;

const Menu = styled.div`
    
    
`;

const Phone = styled.div`

    a {
        text-decoration: none;
        font-size: 1.8rem;
        color: var(--color-primary);
    }
`;





export default function Header() {
    return (
        <HeaderStyle>
                Header
        </HeaderStyle>
    )
}