import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const ProfilePage = () => {
  const { t } = useTranslation();
  const username = localStorage.getItem("USERNAME") || "";
  const password = localStorage.getItem("PASSWORD");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !(
        process.env.REACT_APP_USERNAME === username &&
        process.env.REACT_APP_PASSWORD === password
      )
    ) {
      navigate("/");
    }
  }, [navigate, password, username]);

  return (
    <Layout>
      <Typography component="h2" sx={{ fontWeight: 700, fontSize: 26 }}>
        {t("profile.title", { name: username })}
      </Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus sem
      nec condimentum dictum. Praesent porttitor aliquam finibus. Praesent
      tempus, nulla in pulvinar elementum, felis tortor vestibulum urna,
      malesuada congue diam nisl nec nisl. Donec eget ultrices ligula. Proin
      suscipit elementum diam, ut pretium nunc ultrices vitae. Proin feugiat
      faucibus blandit. Nunc neque turpis, maximus ut lacus ut, facilisis
      pulvinar metus. Nam a feugiat nibh. Proin rhoncus vestibulum quam pretium
      pellentesque. Suspendisse malesuada finibus turpis ut convallis. Donec
      bibendum aliquam semper. Nullam elementum leo non lorem venenatis, vitae
      cursus dolor sagittis. Quisque pharetra enim neque. In dui odio, rhoncus
      iaculis faucibus sit amet, sagittis vel magna. Pellentesque feugiat quis
      ante quis tincidunt. Phasellus nulla lectus, posuere vitae dolor id,
      tempus venenatis risus. In hac habitasse platea dictumst. Vestibulum
      dignissim semper cursus. Quisque sollicitudin metus ac sapien placerat
      molestie. Fusce dolor ligula, dignissim at urna tempus, blandit bibendum
      nisl. Curabitur sit amet sagittis metus. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Nunc
      ullamcorper lacus vitae dolor ornare, at rutrum nisl elementum. Vestibulum
      semper metus ligula, sed pulvinar augue vulputate nec. Pellentesque
      euismod luctus massa, vitae sollicitudin magna euismod vitae. Donec eu
      velit a diam varius tincidunt sit amet non tortor. Ut vitae quam cursus,
      fermentum odio nec, imperdiet dolor. Sed consequat ipsum id ex sagittis
      semper. Sed eget mi blandit, condimentum massa a, molestie nulla. Fusce
      semper sem vitae orci pretium dapibus. Curabitur ultrices gravida sem,
      vehicula ultrices ante maximus vel. Proin laoreet sapien ac sollicitudin
      rutrum. Nullam vehicula ipsum quis euismod posuere. Sed nisi orci,
      suscipit ut pellentesque id, condimentum pellentesque est. Phasellus porta
      nisl eu ornare ullamcorper. Morbi consectetur sapien vitae interdum
      elementum. Nullam malesuada a lectus quis sollicitudin. Sed tellus nulla,
      aliquet non semper vulputate, sollicitudin id neque. Phasellus ut justo
      sed nulla pulvinar blandit. Fusce lobortis mattis purus, sit amet placerat
      ipsum iaculis eget. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Etiam ac facilisis lacus. Orci
      varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Sed molestie eget neque sed vestibulum. Pellentesque ac
      laoreet est. Curabitur posuere lobortis sapien a aliquet. Phasellus
      consectetur est purus, a scelerisque lacus imperdiet ut. Donec blandit
      congue odio vel accumsan. Phasellus sit amet malesuada lacus, vel auctor
      mauris. Nam rutrum sem nisl, at posuere odio fringilla sed. Nulla
      facilisi. Fusce dolor justo, volutpat vitae faucibus ullamcorper,
      convallis sit amet magna. Nunc aliquam consequat purus. Integer ut sodales
      lacus. Vestibulum a mi non quam sodales ultricies a eu sapien. Sed
      facilisis purus eu mauris mattis sodales. Vestibulum velit nibh, consequat
      id tortor ac, tincidunt vulputate mi. Mauris et fringilla libero. Maecenas
      ipsum arcu, elementum non nisl sit amet, vehicula vulputate lectus. Mauris
      ligula neque, mattis vitae porttitor id, condimentum vitae libero.
      Suspendisse potenti. Duis blandit justo felis, eget consequat enim
      vehicula eu. Etiam scelerisque leo vitae tristique pulvinar. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Nullam commodo mauris nisl, non convallis est sagittis non. Vivamus
      lobortis mauris nisi, a facilisis enim pharetra rutrum. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Fusce efficitur vulputate placerat. Cras molestie nibh non elementum
      scelerisque. In sit amet rhoncus quam, et egestas mi. Donec quam nisl,
      tempor elementum venenatis ut, porttitor ac dolor. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Phasellus laoreet pulvinar eros, nec tempor tortor hendrerit malesuada.
      Curabitur dignissim suscipit sem ut ultrices. Nulla bibendum maximus
      ipsum, non lacinia ipsum aliquam vitae. Fusce ullamcorper justo eu nibh
      vestibulum, eu placerat magna tincidunt. Sed sodales sodales massa, sed
      tincidunt est ullamcorper a. Vivamus at semper magna, nec consectetur
      tortor. Nam rutrum arcu vel pellentesque tincidunt. Nullam eget pharetra
      orci. Donec augue dui, tristique eu lacinia at, sodales accumsan est.
      Suspendisse eu risus ligula. Nulla ornare tempus ligula in sodales. Aenean
      quis dui at nibh lobortis consequat. Duis accumsan consequat diam.
      Suspendisse tempus blandit egestas. Proin neque ipsum, bibendum nec
      aliquet hendrerit, consectetur vel mauris. Pellentesque a tempus lectus.
      Donec pharetra neque eget bibendum mattis. Etiam nec felis arcu. Nulla ac
      lectus eu sapien consequat rhoncus. Integer nec faucibus nunc, eget
      efficitur felis. In ornare scelerisque bibendum. Suspendisse vel sem
      molestie, viverra tellus non, condimentum sapien. Etiam condimentum
      dignissim lorem non euismod. Nunc pulvinar risus non sem venenatis, ut
      rhoncus dolor gravida. Nam vitae eleifend nibh. Integer eget consectetur
      lorem. Fusce id arcu eu urna commodo volutpat at ut erat. Fusce rhoncus
      lorem at diam porttitor, a posuere mauris aliquet. Donec risus nisl,
      scelerisque at nibh eu, pulvinar vehicula ipsum. Curabitur condimentum
      fringilla nunc, sit amet ultrices massa lobortis sed. Vivamus sem libero,
      hendrerit at magna eu, tristique aliquam lacus. Quisque pulvinar dui ut
      dignissim rhoncus. Pellentesque egestas velit id dictum scelerisque.
      Nullam cursus ultricies velit eget mattis. Ut gravida, magna ac luctus
      rutrum, nulla metus rhoncus quam, eu luctus eros tellus a ipsum. Sed mi
      tellus, tempor id fermentum at, tincidunt eget nibh. Donec dictum
      elementum urna sit amet consectetur. Nulla lacus sem, dapibus eu dapibus
      eu, elementum eget urna. In id faucibus metus. Pellentesque habitant morbi
      tristique senectus et netus et malesuada fames ac turpis egestas. Sed a
      mauris vitae dolor commodo rhoncus. Fusce lobortis ipsum ut congue
      commodo. Vivamus vehicula fermentum sagittis.
    </Layout>
  );
};

export default ProfilePage;
