import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeWhereInput } from "../../../inputs/ThemeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThemeArgs {
  @TypeGraphQL.Field(_type => ThemeWhereInput, {
    nullable: true
  })
  where?: ThemeWhereInput | undefined;
}
