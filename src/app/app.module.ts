import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationsComponent } from './components/formations/formations.component';
import { DirectorWordComponent } from './components/director-word/director-word.component';
import { TopHeaderComponent } from './layout/header/top-header/top-header.component';
import { ServicesPartyComponent } from './layout/services-party/services-party.component';
import { LoginComponent } from './components/auth/login/login.component';
import { GestureConfig, MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatTabsModule,
  MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatToolbarModule,
  MatSidenavModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule,
  MatIconModule, MatExpansionModule, MatListModule, MatBadgeModule } from '@angular/material';
import { NewsAllComponent } from './components/details/news-all/news-all.component';
import { ActualityComponent } from './components/details/news-all/actuality/actuality.component';
import { EventsComponent } from './components/details/news-all/events/events.component';

@NgModule({
  entryComponents: [
		LoginComponent
	],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    FormationsComponent,
    DirectorWordComponent,
    TopHeaderComponent,
    ServicesPartyComponent,
    LoginComponent,
    NewsAllComponent,
    ActualityComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
		ReactiveFormsModule,
    MatCardModule,
		MatTabsModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatPaginatorModule,
		MatSelectModule,
		MatToolbarModule,
		MatSidenavModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatAutocompleteModule,
		MatIconModule,
		MatExpansionModule,
		MatListModule,
		MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
