package com.icd11;

import com.facebook.react.ReactActivity;
// for linear gradient
import com.BV.LinearGradient.LinearGradientPackage;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ICD11";
    // added for linear gradient
    //  new LinearGradientPackage();
  }
}
