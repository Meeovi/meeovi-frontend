import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationUpdateManyMutationInput } from "../../../inputs/Custom_field_set_relationUpdateManyMutationInput";
import { Custom_field_set_relationWhereInput } from "../../../inputs/Custom_field_set_relationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Custom_field_set_relationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  where?: Custom_field_set_relationWhereInput | undefined;
}
