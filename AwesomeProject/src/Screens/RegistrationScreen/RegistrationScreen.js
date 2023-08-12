import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
} from "react-native";

import {
  defaultStyles,
} from "../../defaultStyles/defaultStyles.js";

const RegistrationScreen = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
      
          <View style={[defaultStyles.container]}>
              <View style={[defaultStyles.formwrap]}>
               
                <Text style={defaultStyles.header}>Реєстрація</Text>

                <TextInput
                  placeholder="Логін"
                  
                  style={[defaultStyles.input]}
                  placeholderTextColor={"#BDBDBD"}
                />

                <TextInput
                  placeholder="Адреса електронної пошти"
                  
                  style={[defaultStyles.input]}
                  placeholderTextColor={"#BDBDBD"}
                />

                <View>
                  <TextInput
                    placeholder="Пароль"
                    
                    style={[defaultStyles.input]}
                    placeholderTextColor={"#BDBDBD"}
                    
                  />
                    <View style={defaultStyles.showPassButton}>
                      <Text style={defaultStyles.showPassAreaText}>
                        {!isShowPassword ? "Показати" : "Cховати"}
                      </Text>
                    </View>
                </View>
                
                  <View style={defaultStyles.button}><Text style={defaultStyles.buttonText}> Зареєстуватися </Text></View>
                
                  <View style={defaultStyles.isExistAccount}>
                    <Text style={defaultStyles.isExistAccountText}>
                      Вже є акаунт? Увійти
                    </Text>
                  </View>
                
              </View>
          </View>
  );
}

export default RegistrationScreen;