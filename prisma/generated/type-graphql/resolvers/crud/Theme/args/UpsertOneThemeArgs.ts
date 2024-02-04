import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeCreateInput } from "../../../inputs/ThemeCreateInput";
import { ThemeUpdateInput } from "../../../inputs/ThemeUpdateInput";
import { ThemeWhereUniqueInput } from "../../../inputs/ThemeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneThemeArgs {
  @TypeGraphQL.Field(_type => ThemeWhereUniqueInput, {
    nullable: false
  })
  where!: ThemeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThemeCreateInput, {
    nullable: false
  })
  create!: ThemeCreateInput;

  @TypeGraphQL.Field(_type => ThemeUpdateInput, {
    nullable: false
  })
  update!: ThemeUpdateInput;
}
