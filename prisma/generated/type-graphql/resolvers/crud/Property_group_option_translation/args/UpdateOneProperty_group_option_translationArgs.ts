import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_option_translationUpdateInput } from "../../../inputs/Property_group_option_translationUpdateInput";
import { Property_group_option_translationWhereUniqueInput } from "../../../inputs/Property_group_option_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProperty_group_option_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_option_translationUpdateInput, {
    nullable: false
  })
  data!: Property_group_option_translationUpdateInput;

  @TypeGraphQL.Field(_type => Property_group_option_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_option_translationWhereUniqueInput;
}
