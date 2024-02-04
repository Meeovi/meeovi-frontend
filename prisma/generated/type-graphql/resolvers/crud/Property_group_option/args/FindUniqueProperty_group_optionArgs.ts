import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionWhereUniqueInput } from "../../../inputs/Property_group_optionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => Property_group_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Property_group_optionWhereUniqueInput;
}
