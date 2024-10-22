import { useLocation } from "react-router-dom";
import { routeList } from "../../constants/route";
import {
  CalculatorLinkContainer,
  HomeLinkContainer,
  Navigate,
  StyledLink,
} from "./GlobalNavigationBar.style";

const links = [
  { path: routeList.HOME, label: "메인 화면" },
  { path: routeList.ScrollPhoneNumber, label: "스크롤 입력기" },
  { path: routeList.GivenNumberCalculator, label: "계산기 입력기" },
  { path: routeList.RandomNumberCalculator, label: "랜덤 입력기" },
];

const GlobalNavigationBar = () => {
  const navigate = useLocation();

  return (
    <Navigate>
      <HomeLinkContainer>
        <StyledLink
          key={links[0].path}
          $active={navigate.pathname !== links[0].path}
          to={links[0].path}
        >
          {links[0].label}
        </StyledLink>
      </HomeLinkContainer>
      <CalculatorLinkContainer>
        {links.slice(1).map((link) => (
          <StyledLink key={link.path} $active={navigate.pathname !== link.path} to={link.path}>
            {link.label}
          </StyledLink>
        ))}
      </CalculatorLinkContainer>
    </Navigate>
  );
};

export default GlobalNavigationBar;
