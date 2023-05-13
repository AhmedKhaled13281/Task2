import MainContent from "@/Components/Home/MainContent"
import classes from '../styles/Components/Home/home.module.css'
export default function Home() {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.leftSideContent}>
          <MainContent />
        </div>
        <div className={classes.rightSideContent}>
          <img height="100vh" className={classes.image} src="https://media.architecturaldigest.com/photos/5a84b03e498fd76f3be3d671/1:1/w_3349,h_3349,c_limit/indoor-trees-rubber-tree.jpg" alt="img"/>
        </div>
      </section>
    </>
  );
}

Home.layout = 'L1'