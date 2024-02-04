import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childWhereUniqueInput } from "../../../inputs/Theme_childWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTheme_childOrThrowArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_childWhereUniqueInput;
}
