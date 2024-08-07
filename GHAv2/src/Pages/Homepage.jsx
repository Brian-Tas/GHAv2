import Title from "../Components/Title/Title.jsx";
import Transition from '../Components/Transition/Transition.jsx';
import Selector from '../Components/Selector/Selector.jsx';
import SeparaterLine from "../Components/Separater Line/SeparaterLine.jsx";

function Homepage() {
  return (
    <div className="page-container">
      <Title/>
      <Selector/>
      <Transition source="../public/flowers.jpg"/>

      {/*Welcome message*/}
      <SeparaterLine/>
      <div className="mx-24">
        <h1 className="heading">
            Welcome to Gentle Health Assessments!
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis perferendis inventore officia, eaque reprehenderit enim eveniet impedit? Architecto ad velit possimus temporibus aliquid iure assumenda minima ipsum facilis tempore!
        Eius voluptatum at non facere numquam ad adipisci beatae blanditiis, asperiores necessitatibus! Distinctio maxime quasi quod quia, quisquam id alias fugit nostrum magnam expedita iste officia aliquid, amet autem quam.
        Maxime nesciunt saepe omnis praesentium nisi odit doloremque quis totam fuga beatae recusandae non voluptatibus esse, sequi perferendis pariatur, in dolore ipsum. Repellendus iusto cum molestiae culpa optio officiis repudiandae?
        </p>

        {/*4 Collumns*/}
        <SeparaterLine/>
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
            <div>
                <h2 className="subheading">Heading 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas aspernatur repellendus necessitatibus saepe suscipit quaerat. Sequi deleniti doloremque consectetur. Quaerat porro minima rerum reprehenderit ex dolor, inventore dolore quas!
                   Facere itaque, culpa nemo ipsam ducimus aliquid libero delectus earum soluta? Vitae reprehenderit ea officia illo nisi, alias, tenetur suscipit fuga dolor inventore libero nostrum soluta officiis dicta, maiores voluptatem?
                </p>
            </div>
            <div>
                <h2 className="subheading">Heading 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime quisquam cum doloribus ex exercitationem ipsa. Dolorum impedit ex sint quasi, dolor quis facere incidunt ducimus ipsum error a voluptatum!
                   Amet aut totam modi vel quod dolorem nisi ullam sint asperiores voluptatibus. Commodi, consequatur aliquam facere necessitatibus corrupti sunt aperiam nesciunt perferendis aut! Est tenetur, beatae delectus at nulla consectetur!
                </p>
            </div>
            <div>
                <h2 className="subheading">Heading 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ipsa eius natus. Nulla autem corporis quae saepe, dolore, quaerat dolorem molestiae dicta culpa distinctio animi aut veritatis nobis! Ipsa, quo!
                   Aliquam exercitationem facere quis odit quos ipsa unde quam incidunt aperiam aspernatur, adipisci accusamus porro non sint minima. Illo vitae iusto ab officiis unde cupiditate in doloribus nemo commodi optio!
                </p>
            </div>
            <div>
                <h2 className="subheading">Heading 4</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illum quisquam at sapiente voluptatum voluptas, placeat recusandae, odio veniam quam ipsa pariatur maxime. Cumque, exercitationem aperiam. Suscipit, tempore voluptate? Atque.
                Facilis nisi veritatis ducimus neque repellat eligendi libero accusamus? Impedit, modi iste, aspernatur, eius explicabo libero nihil delectus repellendus enim officia sed tempora fuga consectetur aut expedita voluptatum. Quia, impedit.
               </p>
            </div>
        </div>

        {/*Next section*/}
        <SeparaterLine/>
      </div>
      

    </div>
  );
}

export default Homepage;