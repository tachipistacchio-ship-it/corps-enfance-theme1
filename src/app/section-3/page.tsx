import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Section III - Parentalité et Société
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Structures familiales et rôles parentaux dans les sociétés préhistoriques
            </p>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <h3 className="text-indigo-900 font-semibold mb-2 text-base sm:text-lg">🎯 Thèmes abordés</h3>
              <ul className="text-indigo-800 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Organisation sociale et structures familiales</li>
                <li>Rôles genrés dans l&apos;éducation des enfants</li>
                <li>Transmission des savoirs et des techniques</li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-200">
              Idée Reçue n°3 : La Femme Préhistorique était Soumise
            </h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
              <h4 className="text-red-900 font-semibold mb-2">❌ Idée fausse</h4>
              <p className="text-red-800">
                <strong>Préjugé :</strong> Les femmes préhistoriques étaient dominées par les hommes et n&apos;avaient aucun pouvoir de décision.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Art et Expression Personnelle
            </h3>
            
            <p>
              Les femmes préhistoriques étaient des créatrices actives, participant pleinement 
              à la production artistique et à l&apos;expression symbolique de leur époque.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-2">🎨 Participation Artistique Féminine</h4>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Empreintes de mains :</strong> 75% des mains négatives dans les grottes sont féminines</li>
                <li>• <strong>Création de pigments :</strong> Préparation des couleurs et techniques picturales</li>
                <li>• <strong>Art mobilier :</strong> Gravures sur os, bois de renne, galets</li>
                <li>• <strong>Parures corporelles :</strong> Création de bijoux et ornements</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Parures et Statut Social
            </h3>
            
            <p>
              L&apos;analyse des parures funéraires révèle l&apos;existence de femmes de haut rang, 
              possédant des objets de prestige et des signes de pouvoir.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h4 className="text-blue-900 font-semibold mb-2">💎 Indicateurs de Statut</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Sépultures riches :</strong> Femmes enterrées avec de nombreux objets de valeur</li>
                <li>• <strong>Matériaux exotiques :</strong> Coquillages, ambre, pierres précieuses</li>
                <li>• <strong>Objets rituels :</strong> Bâtons percés, pendeloques symboliques</li>
                <li>• <strong>Déformations crâniennes :</strong> Modifications corporelles de prestige</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Techniques Textiles et Innovation
            </h3>
            
            <p>
              Les femmes étaient à l&apos;origine d&apos;innovations techniques majeures, 
              particulièrement dans le domaine textile et la transformation des matières premières.
            </p>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6">
              <h4 className="text-purple-900 font-semibold mb-2">🧵 Innovations Textiles</h4>
              <ul className="text-purple-800 space-y-2">
                <li>• <strong>Filage :</strong> Invention du fuseau et techniques de torsion des fibres</li>
                <li>• <strong>Tissage :</strong> Développement des premiers métiers à tisser</li>
                <li>• <strong>Teinture :</strong> Utilisation de colorants végétaux et minéraux</li>
                <li>• <strong>Vannerie :</strong> Techniques de tressage et de cordage</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Sexualité et Mariage
            </h3>
            
            <p>
              Les pratiques sexuelles et matrimoniales préhistoriques étaient plus égalitaires 
              et diversifiées que ne le suggèrent les stéréotypes traditionnels.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">💕 Pratiques Sexuelles et Matrimoniales</h4>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Liberté sexuelle :</strong> Absence de tabous stricts sur la sexualité</li>
                <li>• <strong>Unions flexibles :</strong> Partenariats temporaires ou permanents</li>
                <li>• <strong>Échanges matrimoniaux :</strong> Alliances entre groupes</li>
                <li>• <strong>Diversité des pratiques :</strong> Adaptation aux contextes sociaux</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Évolution de la Pigmentation
            </h3>
            
            <p>
              L&apos;étude de l&apos;évolution de la pigmentation cutanée révèle des adaptations 
              complexes liées aux migrations et aux changements environnementaux.
            </p>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg my-6">
              <h4 className="text-orange-900 font-semibold mb-2">🌍 Dépigmentation et Adaptation</h4>
              <ul className="text-orange-800 space-y-2">
                <li>• <strong>Migration vers le nord :</strong> Adaptation à la diminution de l&apos;ensoleillement</li>
                <li>• <strong>Synthèse de vitamine D :</strong> Nécessité d&apos;une peau plus claire</li>
                <li>• <strong>Sélection naturelle :</strong> Avantage reproductif des peaux claires en Europe</li>
                <li>• <strong>Diversité génétique :</strong> Coexistence de différents phénotypes</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Parentalité et Société Préhistorique
            </h2>
            <p>
              L&apos;organisation familiale au Paléolithique supérieur peut être appréhendée 
              à travers l&apos;analyse spatiale des habitats, la répartition des sépultures 
              et l&apos;étude des liens de parenté révélés par l&apos;ADN ancien.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">
              Structures Familiales Paléolithiques
            </h2>
            <p>
              L&apos;organisation familiale au Paléolithique supérieur peut être appréhendée 
              à travers l&apos;analyse spatiale des habitats, la répartition des sépultures 
              et l&apos;étude des liens de parenté révélés par l&apos;ADN ancien.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h4 className="text-blue-900 font-semibold mb-2">🏠 Organisation de l&apos;habitat</h4>
              <div className="text-blue-800 space-y-3">
                <div>
                  <strong>Foyers familiaux :</strong> Espaces de vie délimités autour des foyers
                </div>
                <div>
                  <strong>Zones d&apos;activité :</strong> Répartition genrée des espaces de travail
                </div>
                <div>
                  <strong>Aires de repos :</strong> Organisation des espaces de couchage
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">
              Rôles Parentaux et Division Genrée
            </h2>
            <p>
              Les données archéologiques suggèrent une division des rôles parentaux 
              basée sur le genre, bien que cette répartition ne soit pas absolue. 
              L&apos;analyse des activités et des objets associés révèle des patterns 
              comportementaux distincts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-pink-900 font-semibold mb-3">👩 Rôles maternels</h4>
                <ul className="text-pink-800 text-sm space-y-2">
                  <li>Soins aux nourrissons</li>
                  <li>Transmission des savoirs domestiques</li>
                  <li>Initiation aux techniques de cueillette</li>
                  <li>Éducation artistique et symbolique</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-blue-900 font-semibold mb-3">👨 Rôles paternels</h4>
                <ul className="text-blue-800 text-sm space-y-2">
                  <li>Apprentissage de la chasse</li>
                  <li>Transmission des techniques lithiques</li>
                  <li>Initiation aux activités rituelles</li>
                  <li>Formation aux déplacements territoriaux</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">
              Transmission des Savoirs
            </h2>
            <p>
              La transmission des connaissances au Paléolithique supérieur s&apos;effectue 
              principalement par l&apos;observation et l&apos;imitation. Cette éducation 
              pratique permet l&apos;acquisition progressive des compétences nécessaires 
              à la survie du groupe.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-2">📚 Modes de transmission</h4>
              <div className="text-green-800 space-y-3">
                <div>
                  <strong>Apprentissage par imitation :</strong> Observation des gestes techniques
                </div>
                <div>
                  <strong>Participation progressive :</strong> Intégration graduelle aux activités
                </div>
                <div>
                  <strong>Transmission orale :</strong> Récits, mythes et savoirs symboliques
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-indigo-800 mt-6 mb-3 border-l-4 border-indigo-400 pl-3">
              Spécialisation et Expertise
            </h3>
            <p>
              Certains individus développent des compétences particulières qui sont 
              transmises de manière privilégiée. Cette spécialisation contribue à 
              la complexification sociale et à l&apos;émergence de statuts différenciés.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="text-purple-900 font-semibold mb-2">Artistes</h4>
                <p className="text-purple-800 text-sm">
                  Maîtres des techniques artistiques
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔮</div>
                <h4 className="text-orange-900 font-semibold mb-2">Chamanes</h4>
                <p className="text-orange-800 text-sm">
                  Détenteurs des savoirs rituels
                </p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏹</div>
                <h4 className="text-teal-900 font-semibold mb-2">Chasseurs</h4>
                <p className="text-teal-800 text-sm">
                  Experts des techniques cynégétiques
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">
              Rites de Passage
            </h2>
            <p>
              Les rites de passage marquent les étapes importantes de la vie sociale. 
              Au Paléolithique supérieur, ces rituels accompagnent probablement 
              l&apos;intégration progressive des enfants dans la communauté adulte.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">🎭 Indices archéologiques</h4>
              <ul className="text-yellow-800 space-y-2">
                <li>Modifications corporelles (perforations, scarifications)</li>
                <li>Parures spécifiques selon l&apos;âge</li>
                <li>Accès progressif aux espaces sacrés</li>
                <li>Participation aux activités rituelles</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
              <h4 className="text-red-900 font-semibold mb-2">🧠 Moyen mnémotechnique</h4>
              <p className="text-red-800">
                <strong>FAMILLE :</strong><br/>
                <strong>F</strong>oyers - <strong>A</strong>pprentissage - <strong>M</strong>ères - 
                <strong>I</strong>nitiation - <strong>L</strong>iens - <strong>L</strong>égacy - <strong>E</strong>ducation
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-indigo-200">
              Évolution des Structures Sociales
            </h2>
            <p>
              L&apos;évolution des structures familiales au cours du Paléolithique supérieur 
              reflète les transformations sociales plus larges. L&apos;augmentation de la 
              complexité sociale s&apos;accompagne d&apos;une diversification des rôles parentaux.
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-6">
              <h4 className="text-gray-900 font-semibold mb-2">📈 Tendances évolutives</h4>
              <div className="text-gray-800 space-y-2">
                <p><strong>Spécialisation croissante :</strong> Diversification des rôles sociaux</p>
                <p><strong>Complexification rituelle :</strong> Élaboration des pratiques symboliques</p>
                <p><strong>Hiérarchisation sociale :</strong> Émergence de statuts différenciés</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-indigo-800 mt-6 mb-3 border-l-4 border-indigo-400 pl-3">
              Synthèse
            </h3>
            <p>
              L&apos;étude de la parentalité au Paléolithique supérieur révèle des sociétés 
              complexes où l&apos;éducation des enfants constitue un enjeu central. La 
              transmission des savoirs, organisée selon des modalités genrées, assure 
              la perpétuation culturelle et l&apos;adaptation aux défis environnementaux.
            </p>
          </div>

          <NavigationButtons
            previousPage={{
              href: "/section-2",
              title: "L'Enfance Préhistorique"
            }}
            nextPage={{
              href: "/quiz",
              title: "Quiz d'évaluation"
            }}
          />
        </div>
      </div>
    </div>
  );
}