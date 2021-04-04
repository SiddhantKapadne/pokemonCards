import { Grid } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

const PokeCard = ({ pokemon }) => {

    const pokeImage = pokemon.data.sprites.other["official-artwork"].front_default;
    const pokeType = pokemon.data.types[0].type.name;
    const pokeHeight = pokemon.data.height;
    const pokeWeight = pokemon.data.weight;
    const pokeAblity = pokemon.data.abilities[0].ability.name;
    const pokemonName = pokemon.data.name;
    const pokemonNumber = pokemon.data.id;

    const options = { scale: 1.1, max: 35, speed: 300, glare: true, "max-glare": 0.5 };

    return(
            <Grid item md={4} sm={6} xs={10} className="glassCard">
                {/* <h2 className="colorNumber">{pokemonNumber}</h2> */}
                <div>{  
                        pokeType === 'grass' ? <div className="grassColor"></div> : 
                        pokeType === 'fire' ? <div className="fireColor"></div> :
                        pokeType === 'ice' ? <div className="iceColor"></div> : 
                        pokeType === 'bug' ? <div className="bugColor"></div> :
                        pokeType === 'normal' ? <div className="normalColor"></div> :
                        pokeType === 'poison' ? <div className="poisonColor"></div> : 
                        pokeType === 'electric' ? <div className="electricColor"></div> : 
                        pokeType === 'ground' ? <div className="groundColor"></div> : 
                        pokeType === 'fairy' ? <div className="fairyColor"></div> : 
                        pokeType === 'psychic' ? <div className="psychicColor"></div> : 
                        pokeType === 'fighting' ? <div className="fightingColor"></div> : 
                        pokeType === 'rock' ? <div className="rockColor"></div> : 
                        pokeType === 'water' ? <div className="waterColor"></div> : 
                        pokeType === 'ghost' ? <div className="ghostColor"></div> : 
                        <div className="whiteColor"></div>
                }</div>
                           <Tilt options={options} className="glassEffect">
                             <div className="threeD">
                                <p className="pokeNum">#{pokemonNumber}</p>
                                <img className="pokeImg" src={pokeImage} alt="pokeImg" /> 
                                <h1 className="pokeName">{pokemonName}</h1>
                                <div className="pokeInfo">
                                    <p>Height: {pokeHeight}</p>
                                    <p>Weight: {pokeWeight}</p>
                                </div>
                                <div>
                                  {pokemon.data.types.map(type => {
                                    return(
                                      <div className="TypeArea">
                                        {
                                          type.type.name === 'grass' ? <div className="grassText">{type.type.name}</div> : 
                                          type.type.name === 'fire' ? <div className="fireText">{type.type.name}</div> :
                                          type.type.name === 'ice' ? <div className="iceText">{type.type.name}</div> : 
                                          type.type.name === 'bug' ? <div className="bugText">{type.type.name}</div> :
                                          type.type.name === 'normal' ? <div className="normalText">{type.type.name}</div> :
                                          type.type.name === 'poison' ? <div className="poisonText">{type.type.name}</div> : 
                                          type.type.name === 'electric' ? <div className="electricText">{type.type.name}</div> : 
                                          type.type.name === 'ground' ? <div className="groundText">{type.type.name}</div> : 
                                          type.type.name === 'fairy' ? <div className="fairyText">{type.type.name}</div> : 
                                          type.type.name === 'psychic' ? <div className="psychicText">{type.type.name}</div> : 
                                          type.type.name === 'fighting' ? <div className="fightingText">{type.type.name}</div> : 
                                          type.type.name === 'rock' ? <div className="rockText">{type.type.name}</div> : 
                                          type.type.name === 'water' ? <div className="waterText">{type.type.name}</div> : 
                                          type.type.name === 'ghost' ? <div className="ghostText">{type.type.name}</div> : 
                                            <div className="TypeText"></div>
                                        }
                                      </div>
                                    );
                                  })}
                                </div>
                                    {/* <h4>{pokeType === 'grass' ? <div className="grassText">{pokeType}{pokeType}</div> : 
                                            pokeType === 'fire' ? <div className="fireText">{pokeType}</div> :
                                            pokeType === 'ice' ? <div className="iceText">{pokeType}</div> : 
                                            pokeType === 'bug' ? <div className="bugText">{pokeType}</div> :
                                            pokeType === 'normal' ? <div className="normalText">{pokeType}</div> :
                                            pokeType === 'poison' ? <div className="poisonText">{pokeType}</div> : 
                                            pokeType === 'electric' ? <div className="electricText">{pokeType}</div> : 
                                            pokeType === 'ground' ? <div className="groundText">{pokeType}</div> : 
                                            pokeType === 'fairy' ? <div className="fairyText">{pokeType}</div> : 
                                            pokeType === 'psychic' ? <div className="psychicText">{pokeType}</div> : 
                                            pokeType === 'fighting' ? <div className="fightingText">{pokeType}</div> : 
                                            pokeType === 'rock' ? <div className="rockText">{pokeType}</div> : 
                                            pokeType === 'water' ? <div className="waterText">{pokeType}</div> : 
                                            pokeType === 'ghost' ? <div className="ghostText">{pokeType}</div> : 
                                            <div className="TypeText"></div>
                                        }</h4> */}

                                        <h4 className="pokeAb">{pokeAblity}</h4>
                            </div>
                        </Tilt>
            </Grid>
    );
}

export default PokeCard;