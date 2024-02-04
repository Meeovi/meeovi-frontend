import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_option_translationCreateInput } from "../../../inputs/Property_group_option_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProperty_group_option_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_option_translationCreateInput, {
    nullable: false
  })
  data!: Property_group_option_translationCreateInput;
}
