import logoKepco from 'assets/img/logo/logo_kepco_long.png';
//import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdInsertChart,
  MdPerson,
  MdFlag,
  MdSettings,
  MdSearch,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  //backgroundImage: `url("${sidebarBgImage}")`,
  //backgroundImage: 'black',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/stat', name: '종합 통계', exact: false, Icon: MdInsertChart },
  { to: '/talent', name: '인재 추천', exact: false, Icon: MdPerson },
  { to: '/position', name: '보직 추천', exact: false, Icon: MdFlag },
  { to: '/setting', name: '보직 설정', exact: false, Icon: MdSettings },
  { to: '/search', name: '직원 검색', exact: false, Icon: MdSearch },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside
        className={bem.b()} //data-image={sidebarBgImage}
      >
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar className="text-center">
            <div className="w-100 icon-wrapper"></div>
            <h3 className="w-100 text-white ">인재관리시스템</h3>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
