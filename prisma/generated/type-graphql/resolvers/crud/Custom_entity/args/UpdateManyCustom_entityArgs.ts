import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityUpdateManyMutationInput } from "../../../inputs/Custom_entityUpdateManyMutationInput";
import { Custom_entityWhereInput } from "../../../inputs/Custom_entityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_entityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;
}
