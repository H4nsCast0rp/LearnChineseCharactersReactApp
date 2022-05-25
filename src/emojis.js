import * as React from 'react';

export default class Emojis extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchWords : this.props.searchWords,
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://emoji-api.com/emojis?search="+this.props.searchWords+"&access_key=0982f5a0a255cae78f0e1b8e9b267038fb049543")
        .then(res => res.json())
        .then(
          (result) => {
            const emojis = [];
            for(const key in result){
                console.log(result[key].character);
                emojis.push(result[key].character);

            };

            this.setState({
              isLoaded: true,
              items: emojis
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state ;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <ul>
            {items.map(emoji => <li>{emoji}</li>)}
          </ul>
        );
      }
    }
  }