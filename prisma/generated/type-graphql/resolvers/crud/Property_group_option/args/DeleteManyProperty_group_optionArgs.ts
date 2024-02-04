import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionWhereInput } from "../../../inputs/Property_group_optionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => Property_group_optionWhereInput, {
    nullable: true
  })
  where?: Property_group_optionWhereInput | undefined;
}
