import { useLocation } from "react-router-dom";
import { routeList } from "../../constants/route";
import { Navigate, StyledLink } from "./GlobalNavigationBar.style";

const GlobalNavigationBar = () => {
  const navigate = useLocation();
  return (
    <Navigate>
      <StyledLink $active={navigate.pathname !== routeList.HOME} to={routeList.HOME}>
        메인 화면
      </StyledLink>
      <StyledLink
        $active={navigate.pathname !== routeList.ScrollPhoneNumber}
        to={routeList.ScrollPhoneNumber}
      >
        스크롤 입력기
      </StyledLink>
      <StyledLink
        $active={navigate.pathname !== routeList.GivenNumberCalculator}
        to={routeList.GivenNumberCalculator}
      >
        계산기 입력기
      </StyledLink>
      <StyledLink
        $active={navigate.pathname !== routeList.RandomNumberCalculator}
        to={routeList.RandomNumberCalculator}
      >
        랜덤 입력기
      </StyledLink>
    </Navigate>
  );
};

export default GlobalNavigationBar;
