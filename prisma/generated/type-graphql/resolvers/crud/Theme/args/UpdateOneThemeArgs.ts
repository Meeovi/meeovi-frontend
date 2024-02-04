import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeUpdateInput } from "../../../inputs/ThemeUpdateInput";
import { ThemeWhereUniqueInput } from "../../../inputs/ThemeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneThemeArgs {
  @TypeGraphQL.Field(_type => ThemeUpdateInput, {
    nullable: false
  })
  data!: ThemeUpdateInput;

  @TypeGraphQL.Field(_type => ThemeWhereUniqueInput, {
    nullable: false
  })
  where!: ThemeWhereUniqueInput;
}
