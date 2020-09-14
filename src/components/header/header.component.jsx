import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.styles.scss";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { OptionsContainer, OptionLink, OptionDiv, HeaderContainer, LogoContainer } from './header.styles';

const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? 
          (<OptionDiv className="option" onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>):
          (<OptionDiv className="option" to="/signin">SIGN IN</OptionDiv>)
        }
        <CartIcon/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser ,
  hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
