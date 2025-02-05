const ProductDescription = () => {
  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary" l>
          Description
        </button>
        <button className="medium-14 p-3 w-32 border-b-2" l>
          Guide de soins
        </button>
        <button className="medium-14 p-3 w-32 border-b-2" l>
          Guide des tailles
        </button>
      </div>
      <hr className="h-[1px] w-full" />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Détail</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sint laborum necessitatibus, architecto accusantium atque minima
            ullam, molestias cumque dolore distinctio impedit beatae minus
            aliquid nisi veritatis repellendus quisquam fugiat.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            iure dolore tempora molestiae placeat nisi sed earum distinctio
            debitis? Ab.
          </p>
        </div>
        <div>
          <h5 className="h5">Avantage</h5>
          <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
            <li>
              Les matériaux de haute qualité garantissent une durabilité et un
              confort durables.
            </li>
            <li>
              Conçu pour répondre aux besoins d'un style de vie moderne et
              créatif.
            </li>
            <li>
              Disponible dans une large gamme de tailles et de couleurs
              tendance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
