import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationWhereUniqueInput } from "../../../inputs/Theme_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_translationWhereUniqueInput;
}
