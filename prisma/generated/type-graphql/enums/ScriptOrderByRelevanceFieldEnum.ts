import * as TypeGraphQL from "type-graphql";

export enum ScriptOrderByRelevanceFieldEnum {
  script = "script",
  hook = "hook",
  name = "name"
}
TypeGraphQL.registerEnumType(ScriptOrderByRelevanceFieldEnum, {
  name: "ScriptOrderByRelevanceFieldEnum",
  description: undefined,
});
