import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setCreateInput } from "../../../inputs/Custom_field_setCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setCreateInput, {
    nullable: false
  })
  data!: Custom_field_setCreateInput;
}
