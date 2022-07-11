import React from 'react';
import {
  Route as ReactDOMRouter,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isPrivateAndPublic?: boolean;
  component: React.ComponentType;
}


const Route: React.FC<IRouteProps> = ({
  component: Component,
}) => {

 
  return (
     <ReactDOMRouter
       render={() => {
        return (
          <Component />
        )
       }}
     /> 
     );
};

export default Route;
