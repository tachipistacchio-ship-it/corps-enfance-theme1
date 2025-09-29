import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

export default function Section2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Section II - L&apos;Enfance Préhistorique
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Traces archéologiques et interprétations de l&apos;enfance au Paléolithique
            </p>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <h3 className="text-purple-900 font-semibold mb-2 text-base sm:text-lg">🎯 Objectifs de cette section</h3>
              <ul className="text-purple-800 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Identifier les traces matérielles de l&apos;enfance</li>
                <li>Comprendre les processus d&apos;apprentissage préhistoriques</li>
                <li>Analyser les sépultures d&apos;enfants</li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-200">
              Idée Reçue n°2 : La Femme Préhistorique était Uniquement Reproductrice
            </h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
              <h4 className="text-red-900 font-semibold mb-2">❌ Idée fausse</h4>
              <p className="text-red-800">
                <strong>Préjugé :</strong> Les femmes préhistoriques étaient cantonnées au rôle de reproductrices et de gardiennes du foyer.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Pratiques Reproductives et Contrôle des Naissances
            </h3>
            
            <p>
              Les femmes préhistoriques maîtrisaient leur reproduction grâce à diverses techniques 
              et connaissances transmises de génération en génération.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-2">🌿 Méthodes de Contrôle des Naissances</h4>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Plantes contraceptives :</strong> Utilisation de plantes aux propriétés anti-ovulatoires</li>
                <li>• <strong>Allaitement prolongé :</strong> Aménorrhée de lactation (absence de règles pendant l&apos;allaitement)</li>
                <li>• <strong>Espacement des naissances :</strong> Intervalles de 3-4 ans entre les enfants</li>
                <li>• <strong>Techniques d&apos;avortement :</strong> Méthodes mécaniques et phytothérapie</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Accouchement et Pratiques Obstétricales
            </h3>
            
            <p>
              L&apos;accouchement était un événement social impliquant la communauté féminine, 
              avec des techniques sophistiquées de gestion de la douleur et des complications.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h4 className="text-blue-900 font-semibold mb-2">👶 Pratiques d&apos;Accouchement</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Position verticale :</strong> Accouchement debout ou accroupie, facilitant l&apos;expulsion</li>
                <li>• <strong>Assistance féminine :</strong> Sages-femmes expérimentées et support communautaire</li>
                <li>• <strong>Analgésiques naturels :</strong> Plantes aux propriétés antidouleur</li>
                <li>• <strong>Rituels de protection :</strong> Pratiques magico-religieuses accompagnant la naissance</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Coopération dans l&apos;Élevage des Enfants
            </h3>
            
            <p>
              L&apos;éducation des enfants était une responsabilité collective, impliquant 
              l&apos;ensemble de la communauté selon des modèles de coopération sophistiqués.
            </p>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6">
              <h4 className="text-purple-900 font-semibold mb-2">👥 Modèles de Coopération</h4>
              <ul className="text-purple-800 space-y-2">
                <li>• <strong>Allaitement partagé :</strong> Plusieurs femmes peuvent nourrir un même enfant</li>
                <li>• <strong>Garde collective :</strong> Surveillance des enfants par rotation</li>
                <li>• <strong>Transmission des savoirs :</strong> Apprentissage par observation et imitation</li>
                <li>• <strong>Adoption informelle :</strong> Prise en charge d&apos;orphelins par la communauté</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Rôle des Femmes Ménopausées
            </h2>
            
            <p>
              Les femmes post-ménopausées jouaient un rôle crucial dans les sociétés préhistoriques, 
              bien au-delà de leur période reproductive.
            </p>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg my-6">
              <h4 className="text-orange-900 font-semibold mb-2">👵 Hypothèse de la Grand-Mère</h4>
              <ul className="text-orange-800 space-y-2">
                <li>• <strong>Transmission culturelle :</strong> Gardiennes des savoirs et traditions</li>
                <li>• <strong>Assistance reproductive :</strong> Aide aux jeunes mères</li>
                <li>• <strong>Collecte spécialisée :</strong> Expertise dans la recherche de ressources</li>
                <li>• <strong>Médecine traditionnelle :</strong> Connaissance des plantes médicinales</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">
              Les Empreintes d&apos;Enfants
            </h2>
            <p>
              Les empreintes de pas et de mains constituent des témoignages directs 
              de la présence d&apos;enfants dans les grottes paléolithiques. Ces traces, 
              préservées dans l&apos;argile ou imprimées sur les parois, révèlent 
              l&apos;âge et les activités des jeunes individus.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h4 className="text-blue-900 font-semibold mb-2">🦶 Sites remarquables</h4>
              <div className="text-blue-800 space-y-3">
                <div>
                  <strong>Grotte de Niaux :</strong> Empreintes de pieds d&apos;enfants de 10-12 ans
                </div>
                <div>
                  <strong>Grotte de Pech Merle :</strong> Mains négatives d&apos;adolescents
                </div>
                <div>
                  <strong>Grotte de Gargas :</strong> Mains d&apos;enfants de différents âges
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">
              L&apos;Apprentissage des Techniques
            </h2>
            <p>
              L&apos;analyse des productions lithiques révèle des traces d&apos;apprentissage. 
              Les &quot;ratés&quot; de taille, les nucléus mal exploités et les outils 
              imparfaits témoignent de l&apos;initiation progressive des enfants aux 
              techniques de production.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔨</div>
                <h4 className="text-green-900 font-semibold mb-2">Taille du silex</h4>
                <p className="text-green-800 text-sm">
                  Apprentissage progressif des gestes techniques
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="text-orange-900 font-semibold mb-2">Art pariétal</h4>
                <p className="text-orange-800 text-sm">
                  Initiation aux techniques artistiques
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏹</div>
                <h4 className="text-red-900 font-semibold mb-2">Chasse</h4>
                <p className="text-red-800 text-sm">
                  Formation aux activités de subsistance
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">
              Les Sépultures d&apos;Enfants
            </h2>
            <p>
              Les sépultures d&apos;enfants du Paléolithique supérieur fournissent des 
              informations précieuses sur le statut social des plus jeunes et les 
              pratiques funéraires qui leur étaient réservées.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg my-6">
              <h4 className="text-indigo-900 font-semibold mb-2">⚱️ Exemples significatifs</h4>
              <div className="text-indigo-800 space-y-3">
                <div>
                  <strong>Sungir (Russie) :</strong> Sépultures d&apos;enfants richement dotées
                </div>
                <div>
                  <strong>Grotte des Enfants (Italie) :</strong> Inhumations multiples
                </div>
                <div>
                  <strong>Lagar Velho (Portugal) :</strong> Enfant paré d&apos;ocre rouge
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-purple-800 mt-6 mb-3 border-l-4 border-purple-400 pl-3">
              Mobilier Funéraire
            </h3>
            <p>
              Le mobilier accompagnant les sépultures d&apos;enfants révèle leur 
              intégration sociale. Parures, outils miniatures et objets symboliques 
              témoignent de leur reconnaissance en tant qu&apos;individus à part entière.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">🧠 Moyen mnémotechnique</h4>
              <p className="text-yellow-800">
                <strong>ENFANT :</strong><br/>
                <strong>E</strong>mpreintes - <strong>N</strong>écropoles - <strong>F</strong>ormation - 
                <strong>A</strong>pprentissage - <strong>N</strong>éolithisation - <strong>T</strong>echniques
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-purple-200">
              Jeux et Jouets Préhistoriques
            </h2>
            <p>
              Bien que difficiles à identifier avec certitude, certains objets 
              peuvent être interprétés comme des jouets ou des supports de jeu. 
              Ces éléments éclairent les aspects ludiques de l&apos;enfance préhistorique.
            </p>

            <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg my-6">
              <h4 className="text-pink-900 font-semibold mb-2">🎲 Objets ludiques potentiels</h4>
              <ul className="text-pink-800 space-y-2">
                <li>Figurines animales miniatures</li>
                <li>Sifflets en os d&apos;oiseau</li>
                <li>Galets peints ou gravés</li>
                <li>Répliques d&apos;outils en miniature</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-purple-800 mt-6 mb-3 border-l-4 border-purple-400 pl-3">
              Conclusion
            </h3>
            <p>
              L&apos;archéologie de l&apos;enfance au Paléolithique supérieur révèle une 
              société où les enfants occupaient une place reconnue. Leur participation 
              aux activités techniques, artistiques et rituelles témoigne d&apos;une 
              intégration progressive dans la communauté adulte.
            </p>
          </div>

          <NavigationButtons
            previousPage={{
              href: "/section-1",
              title: "Le Corps au Paléolithique"
            }}
            nextPage={{
              href: "/section-3",
              title: "Parentalité et Société"
            }}
          />
        </div>
      </div>
    </div>
  );
}