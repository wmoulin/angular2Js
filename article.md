# Angular2 et pourquoi pas avec EcmaScript ?

## Petite intro

Après avoir mis le nez dans JavaScript (oui je sais EcmaScript pour les puristes) il y a que peu de temps et c'est surtout avec l'essort de la plateforme Node.JS,
 car avant, pour moi, ça se résumait juste à manipuler le DOM, dynamiser dans des pages web ou des appels Ajax.
Faut dire que petit à petit, il devient de plus en plus séduisant.

Bon revenons à nos moutons, je ne suis pas là pour faire l'apologie de JS. Après une étude de la version Beta d'Angular2 et à force de voir l'utilisation du TypeScript
 juste pour son transpilateur dans différentes présentations, et oui, quit à utiliser une technologie, autant le faire vraiment et profiter de son grand avantage, "le typage".

Pour moi, le grand intérêt d'Angular2 est de pouvoir l'utiliser sur des classes en posant des décorateurs. A partir de là, pourquoi ne pas faire de l'ES6 et d'utiliser
 un transpilateur dans le même principe que TypeScript. Et là, développeur chevroné que tu es, connaissant TypeScript sur le bout des doigts, tu te dis 'Ouch !! c'est mal parti', et oui
 côté décorateur, JavaScript n'offre pas la possibilté de poser un décorateur directement sur un paramètre de méthode. Et bien, attends un peu, tout n'est peut être pas perdu.

## On pose quelques bases

Tout d'abord, pour la transpilation j'ai utilisé, comme vous devez vous en douter, Babel (http://babeljs.io). Personnellement, je me suis fait un petit 'booster' (https://github.com/wmoulin/joobster)
 avec Gulp pour faciliter la gestion de mes projets JS (transpilation, tests unitaires...) et les dépendances nécessaires à Babel sont à un seul endroit, donc
 lors d'une évolution de plugins, je mets à jour que ce dernier. La configuration de Babel se trouve dans le fichier 'joobster.json' et j'utilise
 'transform-decorators-legacy' car le plugin de transformation des décorateurs de Babel 6, était en cours au moment de rédiger cet article. C'est NodeJs avec lite-server
  qui me servent de serveur http. Le code avant transpilation est dans le répertoire src. Le transpilé est donc celui réellement exécuté dans le répertoire app.

## Et maintenant le vif du sujet

Si nous regardons la configuration du transpilateur TypeScript du quickstart d'Angular2 (https://angular.io/docs/ts/latest/quickstart.html)
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

 l'option "emitDecoratorMetadata" sort du lot, elle permet d'ajouter des
 informations sur la cible du décorateur (type des paramètres...). Angular2 s'appuit sur ces informations dans certains cas, notamment sur l'injection de dépendances.
 Pour pouvoir remplacer cette option du transpilateur, il nous suffit d'utiliser un décorateur fourni par le module "reflect-metadata" (https://www.npmjs.com/package/reflect-metadata) et le tour est joué. A ce moment là, toujours aussi chevroné que tu es, tu te dis, mais c'est ce que fait exactement le transpilateur TypeScript en activant cette fonction. Et oui, je n'ai rien inventé. Voici un exemple d'injection dans un constructeur.


```javascript
  @Reflect.metadata('design:paramtypes', [RouteParams, ArtistManager])
  export default class Page {

    constructor(routeParams, am) {
      this.am = am;
      this.routeParams = routeParams;
      this.album = new Album();
    }
  }  
```

Bien sur, ce n'est pas tout beau tout rose, il y a cette limitation, tu te souviens, tu y as pensé dés le début. Oui je parle de la possibilité de poser des décorateurs
 sur les paramètres des fonctions, donc certains décorateurs ne peuvent pas être utilisés. Pour le moment leur nombre est faible (Attribut, Inject, Optional, Host, SkipSelf, Query et ViewQuery).
 Il faut donc soit les remplacer par d'autres décorateurs sur des attributs, soit passer par des concepts fournis par Angular2, ou dans le cas échéant surcharger ces
 décorateurs pour qu'ils acceptent d'autres paramètres (indice du paramètre) vu leur nombre restreint.

Vous me pardonnerez de la qualité du code ou de certaines implémentations, mais le second but était de tester Angular 2 (injection, navigation, validation, communication entre composants). D'ailleurs, le plus gros problème que j'ai rencontré est sur la validation, que j'ai contourné en l'activant/désactivant en ajoutant un attribut sur le groupe, car certains indicateurs de ce dernier ne se mettaient pas à jour et il faut vérifier ceux de tous les contrôles pour savoir s'ils
 ont été modifiés, mais c'est une version Beta d'Angular, donc à revoir en version finale.
  D'ailleurs dans certains cas au vu des différents problèmes rencontrés, personnellement je me tournerai vers un module externe spécialement dédié à la
 validation de bean JavaScript et je pense que ça pourrait simplifier la gestion de cette dernière. Personnelement je m'en suis fait un que je vous laisse découvrir sous
 https://github.com/wmoulin/iwalid (Et oui un peu de pub ca fait pas de mal).
