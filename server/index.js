const helpTopics = ['REACT','ALLERGEN'];
const allergenTopics = ['GLUTEN','MILK', 'CRUSTACEANS', 'MOLLUSCS', 'PEANUTS'];
module.exports = [{
  path: '/help/:name',
  method: 'GET',
  status: (req, res, next) => {
    if(!helpTopics.includes(req.params.name.toUpperCase())){
      res.status(404);
    }
    next();
  },
  template: {
    data:(params) => {
        if(params.name.toUpperCase() === 'REACT') {
          return `React components implement a render() method that takes input data and returns what to display.
          This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
          JSX is optional and not required to use React.Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.`
        } else if(params.name.toUpperCase() === 'ALLERGEN') {
          return `An allergen is a type of antigen that produces an abnormally vigorous immune response in which the
          immune system fights off a perceivedthreat that would otherwise be harmless to the body.
          Such reactions are called allergies.`
        }
    },
  }
}, {
  path: '/allergen/:name',
  method: 'GET',
  status: (req, res, next) => {
    if(!allergenTopics.includes(req.params.name.toUpperCase())){
      res.status(404);
    }
    next();
  },
  template: {
    data:(params) => {
        if(params.name.toUpperCase() === 'GLUTEN') {
          return `Gluten is a group of seed storage proteins found in certain cereal grains.
          Although, strictly speaking, "gluten" pertains only to wheat proteins, in the medical literature
          it refers to the combination of prolamin and glutelin proteins naturally occurring in all grains that
          have been demonstrated capable of triggering celiac disease. These include any species of wheat
          (such as common wheat, durum, spelt, khorasan, emmer and einkorn),
          barley, rye and oats, as well as any cross hybrids of these grains (such as triticale).
          Gluten comprises 75–85% of the total protein in bread wheat.`
        } else if(params.name.toUpperCase() === 'MILK') {
          return `Milk is a nutrient-rich liquid food produced by the
          mammary glands of mammals. It is the primary source of nutrition for young mammals, including breastfed human
          infants before they are able to digest solid food.[1] Early-lactation milk is called colostrum, which contains
          antibodies that strengthen the immune system and thus reduces the risk of many diseases. It holds many other nutrients,
          including protein and lactose.`
        } else if(params.name.toUpperCase() === 'CRUSTACEANS') {
          return `Crustaceans form a large, diverse arthropod taxon which includes such animals as crabs,
          lobsters, crayfish, shrimps, prawns, krill, woodlice, and barnacles.[1] The crustacean group can
          be treated as a subphylum under the clade Mandibulata; because of recent molecular studies it is
          now well accepted that the crustacean group is paraphyletic, and comprises all animals in the clade
          Pancrustacea other than hexapods.`
        } else if(params.name.toUpperCase() === 'MOLLUSCS') {
          return `Mollusca is the second-largest phylum of invertebrate animals after the Arthropoda.
          The members are known as molluscs. Around 85,000 extant species of molluscs are recognized.
          The number of fossil species is estimated between 60,000 and 100,000 additional species.
          The proportion of undescribed species is very high. Many taxa remain poorly studied.`
        } else if(params.name.toUpperCase() === 'PEANUTS') {
          return `The peanut, also known as the groundnut, goober (US), pindar (US) or monkey nut (UK), and
          taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds.
          It is widely grown in the tropics and subtropics, being important to both small and large commercial producers.
          It is classified as both a grain legume and, due to its high oil content, an oil crop.`
        }
    },
  }
}];