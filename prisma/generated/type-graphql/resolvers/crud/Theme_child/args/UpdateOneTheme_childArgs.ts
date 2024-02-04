import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childUpdateInput } from "../../../inputs/Theme_childUpdateInput";
import { Theme_childWhereUniqueInput } from "../../../inputs/Theme_childWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childUpdateInput, {
    nullable: false
  })
  data!: Theme_childUpdateInput;

  @TypeGraphQL.Field(_type => Theme_childWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_childWhereUniqueInput;
}
