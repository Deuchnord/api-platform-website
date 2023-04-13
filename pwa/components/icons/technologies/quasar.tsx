import classNames from "classnames";

interface IconProps {
  className?: string;
}

export default function Github({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 15.41 16"
      className={classNames("fill-current", className)}
      aria-hidden="true"
    >
      <path d="M9.26,8c-.02,.86-.73,1.55-1.59,1.53-.84-.02-1.51-.69-1.53-1.53,0-.86,.7-1.56,1.56-1.56s1.56,.7,1.56,1.56h0Zm5.37-4c-.34-.58-.75-1.12-1.23-1.6l-1.8,1.04c-.56-.48-1.19-.85-1.88-1.09-.6,.6-1.1,1.31-1.46,2.08,2.01-.14,4.08,.59,6.01,2.09l1.14-.66c-.18-.65-.44-1.28-.77-1.87h0Zm0,8c.34-.59,.6-1.21,.77-1.86l-1.8-1.04c.13-.73,.13-1.47,0-2.18-.82-.22-1.68-.29-2.53-.22,1.12,1.67,1.53,3.83,1.19,6.25l1.14,.66c.48-.48,.89-1.02,1.23-1.6h0Zm-6.93,4c.68,0,1.35-.09,2-.26v-2.08c.69-.24,1.33-.61,1.89-1.09-.22-.82-.59-1.6-1.07-2.3-.89,1.81-2.55,3.24-4.82,4.16v1.31c.65,.17,1.33,.26,2,.26h0ZM.78,12c.34,.58,.75,1.12,1.23,1.6l1.8-1.04c.56,.48,1.19,.85,1.88,1.09,.6-.6,1.1-1.31,1.46-2.08-2.01,.14-4.08-.59-6.01-2.09L0,10.13c.18,.65,.44,1.28,.77,1.87ZM.78,4c-.34,.59-.6,1.21-.78,1.86l1.8,1.04c-.13,.72-.13,1.46,0,2.18,.85,.22,1.7,.3,2.53,.22-1.12-1.67-1.53-3.83-1.19-6.25l-1.14-.66c-.48,.48-.89,1.02-1.23,1.6h0ZM7.7,0c-.68,0-1.35,.09-2,.26V2.34c-.69,.24-1.33,.61-1.89,1.09,.22,.82,.59,1.6,1.07,2.3,.88-1.81,2.55-3.24,4.82-4.16V.27c-.65-.17-1.33-.26-2-.27Z" />
    </svg>
  );
}
