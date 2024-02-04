import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationCreateInput } from "../../../inputs/Theme_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationCreateInput, {
    nullable: false
  })
  data!: Theme_translationCreateInput;
}
