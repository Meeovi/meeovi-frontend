import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionCreateInput } from "../../../inputs/Property_group_optionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => Property_group_optionCreateInput, {
    nullable: false
  })
  data!: Property_group_optionCreateInput;
}
