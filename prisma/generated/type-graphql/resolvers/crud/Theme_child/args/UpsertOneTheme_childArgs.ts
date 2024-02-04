import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childCreateInput } from "../../../inputs/Theme_childCreateInput";
import { Theme_childUpdateInput } from "../../../inputs/Theme_childUpdateInput";
import { Theme_childWhereUniqueInput } from "../../../inputs/Theme_childWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_childWhereUniqueInput;

  @TypeGraphQL.Field(_type => Theme_childCreateInput, {
    nullable: false
  })
  create!: Theme_childCreateInput;

  @TypeGraphQL.Field(_type => Theme_childUpdateInput, {
    nullable: false
  })
  update!: Theme_childUpdateInput;
}
