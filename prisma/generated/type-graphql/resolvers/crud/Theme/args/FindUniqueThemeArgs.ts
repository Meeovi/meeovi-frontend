import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeWhereUniqueInput } from "../../../inputs/ThemeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueThemeArgs {
  @TypeGraphQL.Field(_type => ThemeWhereUniqueInput, {
    nullable: false
  })
  where!: ThemeWhereUniqueInput;
}
