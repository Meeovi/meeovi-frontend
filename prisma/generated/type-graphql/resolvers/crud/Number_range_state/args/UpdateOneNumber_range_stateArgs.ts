import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateUpdateInput } from "../../../inputs/Number_range_stateUpdateInput";
import { Number_range_stateWhereUniqueInput } from "../../../inputs/Number_range_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateUpdateInput, {
    nullable: false
  })
  data!: Number_range_stateUpdateInput;

  @TypeGraphQL.Field(_type => Number_range_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_stateWhereUniqueInput;
}
