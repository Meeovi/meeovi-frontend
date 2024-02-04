import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionCreateInput } from "../../../inputs/Property_group_optionCreateInput";
import { Property_group_optionUpdateInput } from "../../../inputs/Property_group_optionUpdateInput";
import { Property_group_optionWhereUniqueInput } from "../../../inputs/Property_group_optionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => Property_group_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_optionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Property_group_optionCreateInput, {
    nullable: false
  })
  create!: Property_group_optionCreateInput;

  @TypeGraphQL.Field(_type => Property_group_optionUpdateInput, {
    nullable: false
  })
  update!: Property_group_optionUpdateInput;
}
