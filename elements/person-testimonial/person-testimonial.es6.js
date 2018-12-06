import{html,Polymer}from"./node_modules/@polymer/polymer/polymer-legacy.js";import"./node_modules/@polymer/paper-card/paper-card.js";import"./node_modules/@polymer/iron-image/iron-image.js";import"./node_modules/@polymer/iron-icon/iron-icon.js";import"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";import"./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js";import"./lib/person-testimonial-icon.js";let PersonTestimonial=Polymer({_template:html`
    <style include="materializecss-styles">
      :host {
        display: block;
        font-family: sans-serif;
        color: darkslategray;
      }

      paper-card {
        display: inline-flex;
      }

      iron-image {
        display: block;
        width: 150px;
        height: 100%;
      }
      .image {
        padding-right: 5px;
      }

      iron-icon {
        --iron-icon-height: 15px;
        --iron-icon-width: 15px;
        --iron-icon-fill-color: darkslategray;
      }

      .wrap {
        margin: 15px;
      }

      .testimonial {
        line-height: 24px;
        font-size: 16px;
        font-style: italic;
      }

      .name {
        font-size: 21px;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 20px;
      }

      .position {
        font-size: 14px;
        margin-top: 5px;
      }

      .arrow_right {
        width: 0;
        height: 0;
        border-top: 15px solid white;
        border-bottom: 15px solid white;
        border-left: solid 15px transparent;
        position: relative;
        top: 55px;
      }

      #quotestart {
        display: inline-flex;
        transform: rotateY(180deg);
      }

      #quoteend {
        display: inline-flex;
      }

      @media screen and (max-width: 850px) {
        paper-card {
          display: flex;
          flex-wrap: wrap;
        }
        iron-image {
          display: block;
          border-radius: 50%;
          width: 200px;
          height: 200px;
        }
        .image {
          margin-top: 25px;
          border-radius: 50%;
          padding: 5px;
          margin-left: auto;
          margin-right: auto;
        }
        .arrow_right {
          display: none;
        }
        .name,
        .position {
          text-align: center;
        }
      }
    </style>
    <paper-card elevation="[[elevation]]">
      <div class\$="[[accentColorClass]] image">
        <iron-image
          style\$="background-color: [[accentColor]];"
          src="[[image]]"
          sizing="cover"
          preload=""
          fade=""
        ></iron-image>
      </div>
      <div class\$="arrow_right [[accentColorClass]]"></div>
      <div class="wrap">
        <div class="testimonial">
          <iron-icon
            id="quotestart"
            icon="persontestimonial:format-quote"
          ></iron-icon>
          <slot></slot>
          <iron-icon
            id="quoteend"
            icon="persontestimonial:format-quote"
          ></iron-icon>
        </div>
        <div class="name">[[name]]</div>
        <div class="position">[[position]]</div>
      </div>
    </paper-card>
  `,is:"person-testimonial",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors],properties:{accentColor:{type:String,value:"#e65100"},accentColorClass:{type:String,reflectToAttribute:!0,computed:"_computeColorClass(accentColor)"},elevation:{type:Number,value:1,reflectToAttribute:!0},image:{type:String},name:{type:String},position:{type:String}},attached:function(){let props={canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Testimonial",description:"A person saying a nice thing about us",icon:"editor:format-quote",color:"orange",groups:["Content","Presentation"],handles:[{type:"image",source:"image",title:"name",caption:"position"}],meta:{author:"EberlyODL / LRNWebComponents"}},settings:{quick:[{property:"image",title:"Image",description:"Adds image to this testimonial",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"},{property:"accentColor",title:"Accent color",description:"Select the color for the edge of the photo.",inputMethod:"colorpicker",icon:"editor:format-color-fill"}],configure:[{property:"image",title:"Image",description:"Adds image to testimonial",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"accentColor",title:"Accent color",description:"Select the color for the edge of the photo.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{slot:"",title:"User's testimonial:",description:"This is where you enter your testimonial.",inputMethod:"code-editor",required:!0},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"}],advanced:[]}};this.setHaxProperties(props)},_computeColorClass:function(color){if(null!=color&&"#"==color.substring(0,1)){return this._colorTransform(color.toLowerCase(),"","")}}});export{PersonTestimonial};