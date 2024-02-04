import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childCreateInput } from "../../../inputs/Theme_childCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childCreateInput, {
    nullable: false
  })
  data!: Theme_childCreateInput;
}
