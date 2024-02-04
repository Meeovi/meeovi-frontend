import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateOrderByWithAggregationInput } from "../../../inputs/Number_range_stateOrderByWithAggregationInput";
import { Number_range_stateScalarWhereWithAggregatesInput } from "../../../inputs/Number_range_stateScalarWhereWithAggregatesInput";
import { Number_range_stateWhereInput } from "../../../inputs/Number_range_stateWhereInput";
import { Number_range_stateScalarFieldEnum } from "../../../../enums/Number_range_stateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateWhereInput, {
    nullable: true
  })
  where?: Number_range_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_range_stateOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "number_range_id" | "last_value" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_range_stateScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_range_stateScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
