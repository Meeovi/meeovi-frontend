import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationWhereInput } from "../../../inputs/Theme_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationWhereInput, {
    nullable: true
  })
  where?: Theme_translationWhereInput | undefined;
}
