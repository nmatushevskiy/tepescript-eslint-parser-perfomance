import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeComponentOneComponent } from './components/some-components/some-component-one/some-component-one.component';
import { SomeComponentTwoComponent } from './components/some-components/some-component-two/some-component-two.component';
import { SomeComponentThreeComponent } from './components/some-components/some-component-three/some-component-three.component';
import { SomeComponentFourComponent } from './components/some-components/some-component-four/some-component-four.component';
import { SomeComponentFiveComponent } from './components/some-components/some-component-five/some-component-five.component';
import { SomeComponentSixComponent } from './components/some-components/some-component-six/some-component-six.component';
import { SomeComponentSevenComponent } from './components/some-components/some-component-seven/some-component-seven.component';
import { SomeComponentEightComponent } from './components/some-components/some-component-eight/some-component-eight.component';
import { SomeComponentNineComponent } from './components/some-components/some-component-nine/some-component-nine.component';
import { SomeComponentTenComponent } from './components/some-components/some-component-ten/some-component-ten.component';
import { AnotherComponentOneComponent } from './components/another-components/another-component-one/another-component-one.component';
import { AnotherComponentTwoComponent } from './components/another-components/another-component-two/another-component-two.component';
import { AnotherComponentThreeComponent } from './components/another-components/another-component-three/another-component-three.component';
import { AnotherComponentFourComponent } from './components/another-components/another-component-four/another-component-four.component';
import { AnotherComponentFiveComponent } from './components/another-components/another-component-five/another-component-five.component';
import { AnotherComponentSixComponent } from './components/another-components/another-component-six/another-component-six.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentOneComponent,
    SomeComponentTwoComponent,
    SomeComponentThreeComponent,
    SomeComponentFourComponent,
    SomeComponentFiveComponent,
    SomeComponentSixComponent,
    SomeComponentSevenComponent,
    SomeComponentEightComponent,
    SomeComponentNineComponent,
    SomeComponentTenComponent,
    AnotherComponentOneComponent,
    AnotherComponentTwoComponent,
    AnotherComponentThreeComponent,
    AnotherComponentFourComponent,
    AnotherComponentFiveComponent,
    AnotherComponentSixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
