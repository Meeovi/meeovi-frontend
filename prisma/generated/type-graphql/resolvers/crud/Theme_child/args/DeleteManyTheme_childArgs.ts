import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childWhereInput } from "../../../inputs/Theme_childWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereInput, {
    nullable: true
  })
  where?: Theme_childWhereInput | undefined;
}
