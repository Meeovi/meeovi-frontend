import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationUpdateManyMutationInput } from "../../../inputs/Plugin_translationUpdateManyMutationInput";
import { Plugin_translationWhereInput } from "../../../inputs/Plugin_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Plugin_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  where?: Plugin_translationWhereInput | undefined;
}
