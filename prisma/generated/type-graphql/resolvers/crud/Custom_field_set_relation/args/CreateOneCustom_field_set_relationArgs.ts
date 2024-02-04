import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationCreateInput } from "../../../inputs/Custom_field_set_relationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationCreateInput, {
    nullable: false
  })
  data!: Custom_field_set_relationCreateInput;
}
