import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateCreateInput } from "../../../inputs/Number_range_stateCreateInput";
import { Number_range_stateUpdateInput } from "../../../inputs/Number_range_stateUpdateInput";
import { Number_range_stateWhereUniqueInput } from "../../../inputs/Number_range_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_stateCreateInput, {
    nullable: false
  })
  create!: Number_range_stateCreateInput;

  @TypeGraphQL.Field(_type => Number_range_stateUpdateInput, {
    nullable: false
  })
  update!: Number_range_stateUpdateInput;
}
