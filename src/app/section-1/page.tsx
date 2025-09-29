import BackToPlanButton from '@/components/content/BackToPlanButton';
import NavigationButtons from '@/components/content/NavigationButtons';

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Section I - Le Corps au Paléolithique
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Représentations corporelles et symbolisme dans l&apos;art préhistorique
            </p>
          </div>

          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <h3 className="text-green-900 font-semibold mb-2 text-base sm:text-lg">🎯 Dans cette section</h3>
              <ul className="text-green-800 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Les Vénus paléolithiques et leurs interprétations</li>
                <li>Représentations masculines et féminines</li>
                <li>Symbolisme corporel et identité sociale</li>
              </ul>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b-2 border-blue-200">
              Idée Reçue n°1 : La Femme Préhistorique était Faible
            </h2>
            
            <div className="bg-red-50 border border-red-200 p-4 sm:p-6 rounded-lg my-4 sm:my-6">
              <h4 className="text-red-900 font-semibold mb-2 text-sm sm:text-base">❌ Idée fausse</h4>
              <p className="text-red-800 text-sm sm:text-base">
                <strong>Préjugé :</strong> Les femmes préhistoriques étaient physiquement faibles et ne participaient pas aux activités de chasse.
              </p>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-blue-800 mt-4 sm:mt-6 mb-2 sm:mb-3 border-l-4 border-blue-400 pl-3">
              Preuves Scientifiques de la Force Physique Féminine
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed">
              L&apos;analyse des ossements révèle une réalité bien différente. Les femmes du Paléolithique 
              supérieur possédaient une force physique remarquable, comparable à celle des athlètes modernes.
            </p>

            <div className="bg-green-50 border border-green-200 p-4 sm:p-6 rounded-lg my-4 sm:my-6">
              <h4 className="text-green-900 font-semibold mb-2">🦴 Analyse des Ossements</h4>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>Insertions musculaires :</strong> Traces très marquées sur les os, témoignant d&apos;une musculature développée</li>
                <li>• <strong>Densité osseuse :</strong> Comparable à celle des athlètes de haut niveau actuels</li>
                <li>• <strong>Robustesse :</strong> Squelettes féminins montrant une adaptation à des activités physiques intenses</li>
                <li>• <strong>Asymétrie :</strong> Différences entre bras droit et gauche indiquant des activités spécialisées</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Participation Féminine à la Chasse
            </h3>
            
            <p>
              Contrairement aux idées reçues, les femmes participaient activement à la chasse. 
              Les preuves archéologiques et anthropologiques sont nombreuses et convergentes.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h4 className="text-blue-900 font-semibold mb-2">🏹 Preuves de Participation à la Chasse</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Sépultures avec armes :</strong> Femmes enterrées avec des pointes de projectiles et outils de chasse</li>
                <li>• <strong>Traumatismes osseux :</strong> Blessures typiques des activités de chasse (fractures de Parry, impacts)</li>
                <li>• <strong>Analyses isotopiques :</strong> Régime alimentaire riche en protéines animales</li>
                <li>• <strong>Usure dentaire :</strong> Traces d&apos;utilisation des dents comme outils (préparation des peaux, cordages)</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-3 border-l-4 border-blue-400 pl-3">
              Comparaisons Ethnographiques
            </h3>
            
            <p>
              L&apos;étude des sociétés de chasseurs-cueilleurs actuelles confirme la participation 
              féminine aux activités de chasse dans de nombreuses cultures.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">🌍 Exemples Ethnographiques</h4>
              <ul className="text-yellow-800 space-y-2">
                <li>• <strong>Agta (Philippines) :</strong> 85% des femmes participent à la chasse</li>
                <li>• <strong>Aka (Afrique centrale) :</strong> Chasse collective impliquant hommes et femmes</li>
                <li>• <strong>Inuits :</strong> Femmes chasseuses de mammifères marins</li>
                <li>• <strong>Aborigènes d&apos;Australie :</strong> Chasse spécialisée selon les proies</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-200">
              Les Vénus Paléolithiques : Réinterprétation
            </h2>
            <p>
              Les statuettes féminines du Paléolithique supérieur, communément appelées 
              &quot;Vénus&quot;, constituent l&apos;un des corpus artistiques les plus fascinants 
              de la préhistoire. Ces figurines, découvertes sur un vaste territoire 
              européen, présentent des caractéristiques morphologiques particulières.
            </p>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6">
              <h4 className="text-purple-900 font-semibold mb-2">📊 Caractéristiques communes</h4>
              <div className="text-purple-800 space-y-2">
                <p><strong>Morphologie :</strong> Formes généreuses, seins et hanches proéminents</p>
                <p><strong>Visage :</strong> Souvent absent ou stylisé</p>
                <p><strong>Matériaux :</strong> Pierre, ivoire, os</p>
                <p><strong>Chronologie :</strong> 28 000 - 22 000 ans BP</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-green-800 mt-6 mb-3 border-l-4 border-green-400 pl-3">
              Interprétations Multiples
            </h3>
            <p>
              L&apos;interprétation de ces figurines a évolué au fil des découvertes et 
              des approches théoriques :
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-blue-900 font-semibold mb-3">🔮 Hypothèse religieuse</h4>
                <p className="text-blue-800 text-sm">
                  Déesses-mères, symboles de fertilité et de fécondité, 
                  objets de culte liés à la reproduction.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-orange-900 font-semibold mb-3">👥 Hypothèse sociale</h4>
                <p className="text-orange-800 text-sm">
                  Représentations de statuts sociaux particuliers, 
                  portraits individuels ou types sociaux.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-green-200">
              Représentations Masculines
            </h2>
            <p>
              Bien que moins nombreuses, les représentations masculines existent dans 
              l&apos;art paléolithique. Elles se caractérisent par une approche différente 
              de la corporalité masculine.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg my-6">
              <h4 className="text-indigo-900 font-semibold mb-2">🎭 Exemples notables</h4>
              <ul className="text-indigo-800 space-y-2">
                <li><strong>Brno II :</strong> Figurine masculine en ivoire</li>
                <li><strong>Grimaldi :</strong> Représentations androgynes</li>
                <li><strong>Art pariétal :</strong> Silhouettes masculines dans les grottes</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-green-200">
              Le Corps comme Marqueur Social
            </h2>
            <p>
              L&apos;analyse des représentations corporelles révèle l&apos;existence de codes 
              sociaux complexes. Les modifications corporelles, les parures et les 
              attitudes corporelles constituent autant d&apos;indices sur l&apos;organisation 
              sociale paléolithique.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
              <h4 className="text-yellow-900 font-semibold mb-2">💡 Moyen mnémotechnique</h4>
              <p className="text-yellow-800">
                <strong>CORPS :</strong><br/>
                <strong>C</strong>ulte - <strong>O</strong>rnements - <strong>R</strong>ôles - 
                <strong>P</strong>arures - <strong>S</strong>ymboles
              </p>
            </div>

            <h3 className="text-lg font-semibold text-green-800 mt-6 mb-3 border-l-4 border-green-400 pl-3">
              Synthèse
            </h3>
            <p>
              L&apos;étude du corps au Paléolithique supérieur révèle une société complexe 
              où les représentations corporelles véhiculent des messages sociaux, 
              religieux et identitaires. Cette approche multidisciplinaire permet 
              de mieux comprendre les mentalités préhistoriques.
            </p>
          </div>

          <NavigationButtons
            previousPage={{
              href: "/introduction",
              title: "Introduction"
            }}
            nextPage={{
              href: "/section-2",
              title: "L'Enfance Préhistorique"
            }}
          />
        </div>
      </div>
    </div>
  );
}