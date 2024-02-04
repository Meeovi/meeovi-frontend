import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childUpdateManyMutationInput } from "../../../inputs/Theme_childUpdateManyMutationInput";
import { Theme_childWhereInput } from "../../../inputs/Theme_childWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childUpdateManyMutationInput, {
    nullable: false
  })
  data!: Theme_childUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Theme_childWhereInput, {
    nullable: true
  })
  where?: Theme_childWhereInput | undefined;
}
