import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_option_translationWhereUniqueInput } from "../../../inputs/Property_group_option_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProperty_group_option_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_option_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_option_translationWhereUniqueInput;
}
