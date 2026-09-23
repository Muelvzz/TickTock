import featureToDoImg from "../../assets/feature-icons/feature-todo.png"
import featurePlanImg from "../../assets/feature-icons/feature-planner.png"
import featureFocusImg from "../../assets/feature-icons/feature-focus.png"
import featureInsightImg from "../../assets/feature-icons/feature-insights.png"

const FeatureList = [
  {
    caption: "To-Do List",
    title: "Take control of your life",
    description: "Self-mastery comes from being able to control yourself - whether it's your work projects, personal tasks, or study plans.",
    image: featureToDoImg
  },
  {
    caption: "Calendar Views",
    title: "Easily plan your schedule",
    description: "Different calendar views like yearly, monthly, weekly, daily and agenda view help you plan your time more efficiently.",
    image: featurePlanImg
  },
  {
    caption: "Gamification",
    title: "Gamify to stay focused",
    description: "Adopt the \"Gamification\" - treat your goals as a quest to achieve a productive flow.",
    image: featureFocusImg
  },
  {
    caption: "Summary",
    title: "Gain insights of your actions",
    description: "Self-mastery comes from being able to control yourself - whether it's your work projects, personal tasks, or study plans.",
    image: featureInsightImg
  }
];

function FeatureCard() {
  return (
    <>
      { FeatureList.map((feature, idx) => { return (
        <section key={idx} className={`bg-washed-white rounded-lg flex flex-col-reverse md:flex-row justify-between px-5 md:px-10 lg:px-20 py-10 ${ idx % 2 !== 0 && "md:flex-row-reverse" } items-center gap-x-10 gap-y-5 md:gap-y-10 lg:gap-y-15 mb-10`}>
          <div className="flex-1">
            <small className="text-green">{ feature.caption }</small>
            <h2 className="font-bold">{ feature.title }</h2>
            <p>{ feature.description }</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={ feature.image } alt={`Image of ${ feature.caption }`} className="w-3/4 rounded-xl"/>
          </div>
        </section>
      )}) }
    </>
  )
}

export default function Features() {
  return (
    <>
      <article className="px-3 sm:px-15 md:px-20 lg:px-40 py-10">
        <FeatureCard/>
      </article>
    </>
  )
}