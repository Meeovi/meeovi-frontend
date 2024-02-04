import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationUpdateManyMutationInput } from "../../../inputs/Theme_translationUpdateManyMutationInput";
import { Theme_translationWhereInput } from "../../../inputs/Theme_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Theme_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Theme_translationWhereInput, {
    nullable: true
  })
  where?: Theme_translationWhereInput | undefined;
}
