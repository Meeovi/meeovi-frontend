import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemeCreateInput } from "../../../inputs/ThemeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneThemeArgs {
  @TypeGraphQL.Field(_type => ThemeCreateInput, {
    nullable: false
  })
  data!: ThemeCreateInput;
}
