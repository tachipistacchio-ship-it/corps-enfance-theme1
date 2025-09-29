import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Introduction
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Concepts de base et définitions sur le corps et l&apos;enfance préhistorique
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-blue-900 font-semibold mb-2">🎯 Objectifs d&apos;apprentissage</h3>
              <ul className="text-blue-800 space-y-2">
                <li>Comprendre les enjeux de l&apos;étude du corps au Paléolithique supérieur</li>
                <li>Définir les concepts clés de l&apos;enfance préhistorique</li>
                <li>Identifier les sources archéologiques disponibles</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Contexte Historique de la Recherche
            </h2>
            <p>
              La préhistoire s&apos;est longtemps écrite au masculin. Lorsque la femme était évoquée, 
              c&apos;était pour la peindre en position de domination - vision traditionnelle d&apos;une 
              femme écrasée sous le joug masculin contre vision d&apos;une femme chasseresse égale à 
              l&apos;homme (lecture féministe années 1970).
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">🔄 Évolution de la recherche</h4>
              <p className="text-yellow-800">
                <strong>Féminisation du métier d&apos;archéologue depuis 1970 :</strong> repense les traces du passé. 
                Les découvertes scientifiques nouvelles permettent de revoir la place de la femme dans le groupe, 
                de la mère à la préhistoire.
              </p>
            </div>

            <p>
              Les recherches actuelles montrent que les choses sont bien plus nuancées que ces 2 représentations, 
              mais les constructions tenaces persistent : hommes préhistoriques incarnent la virilité, la force, 
              la domination (peintures, religions, chasse...) dans l&apos;enseignement de la préhistoire à l&apos;école 
              primaire, dans la littérature enfantine.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Biais Historiques dans l&apos;Interprétation
            </h2>
            <p>
              Les préhistoriens, dont la discipline s&apos;institutionnalise dans les années 1860, ont plaqué 
              leur modèle de société et leur mode de vie sur ceux de la préhistoire. Cela a provoqué une 
              invisibilisation de la femme. À cette époque, la place de chacun est assignée de façon précise.
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
              <h4 className="text-red-900 font-semibold mb-2">⛪ Influence religieuse</h4>
              <p className="text-red-800">
                La Bible pèse de tout son poids sur la vision de la femme et sa place dans la société. 
                Elle est considérée comme une éternelle mineure, pécheresse. Au dix-neuvième siècle 
                s&apos;impose donc une vision de la société préhistorique adossée aux représentations dominantes du temps.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Représentations Muséales et Artistiques
            </h3>
            <p>
              Les représentations muséales et ludiques ont diffusé les préjugés du moment et ont contribué 
              à les médiatiser. Exemple : diorama représentant l&apos;abri de Cro-Magnon conçu pour l&apos;exposition 
              universelle de Paris de 1889 - 32 millions de visiteurs ont pu admirer l&apos;homme de Cro-Magnon 
              entouré de 2 femmes.
            </p>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6">
              <h4 className="text-purple-900 font-semibold mb-2">🎨 Art officiel du 19e siècle</h4>
              <p className="text-purple-800">
                Les artistes pompiers qui représentaient le bon goût de l&apos;art officiel se sont emparés avec 
                délectation des clichés répandus par les chercheurs d&apos;alors. À partir de 1880, la scène de 
                vie préhistorique devient un genre à la mode : Les peintures de Léon Maxime Faivre ou Paul Jamin 
                sont à destination des salons bourgeois.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Méthodologie Moderne d&apos;Analyse
            </h2>
            <p>
              Désormais, le travail en équipe (préhistoriens, archéologues, scientifiques, anthropologues...) 
              permet une approche plus rigoureuse. Les ossements sont d&apos;excellents indicateurs.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-2">🦴 Identification sexuelle</h4>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Os du bassin :</strong> privilégié pour l&apos;identification sexuelle car seul os dont la morphologie est liée à la possibilité d&apos;enfanter</li>
                <li>• <strong>Oreille interne :</strong> indices de dimorphisme sexuel (cochlée différente selon le sexe)</li>
                <li>• <strong>ADN :</strong> analyse génétique complémentaire</li>
              </ul>
            </div>

            <p>
              Au final, la vie d&apos;une femme est inscrite dans ses os. Cette séance dresse le portrait de la femme 
              au moment du paléolithique supérieur en Europe (entre -40 000 et -10 000 ans).
            </p>
          </div>

          <NavigationButtons
            nextPage={{
              href: "/section-1",
              title: "Le Corps au Paléolithique"
            }}
          />
        </div>
      </div>
    </div>
  );
}