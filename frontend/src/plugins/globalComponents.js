import Badge from "../components/Temp/Badge";
import BaseAlert from "../components/Temp/BaseAlert";
import BaseButton from "../components/Temp/BaseButton";
import BaseCheckbox from "../components/Temp/BaseCheckbox";
import BaseInput from "../components/Temp/BaseInput";
import BasePagination from "../components/Temp/BasePagination";
import BaseProgress from "../components/Temp/BaseProgress";
import BaseRadio from "../components/Temp/BaseRadio";
import BaseSlider from "../components/Temp/BaseSlider";
import BaseSwitch from "../components/Temp/BaseSwitch";
import Card from "../components/Temp/Card";
import Icon from "../components/Temp/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
