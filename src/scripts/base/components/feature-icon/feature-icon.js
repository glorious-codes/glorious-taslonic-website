import '@styles/feature-icon.styl';
import template from './feature-icon.html';

export const tcFeatureIcon = {
  name: 'tc-feature-icon',
  props: ['name'],
  data(){
    return {
      cssClasses: ''
    };
  },
  created(){
    this.setCssClasses(this.buildCssClasses(this.name));
  },
  methods: {
    buildCssClasses(name){
      const baseCssClass = 'tc-feature-icon';
      const classes = [baseCssClass];
      if(name) classes.push(`${baseCssClass}-${name}`);
      return classes.join(' ');
    },
    setCssClasses(cssClasses){
      this.cssClasses = cssClasses;
    }
  },
  template
};
