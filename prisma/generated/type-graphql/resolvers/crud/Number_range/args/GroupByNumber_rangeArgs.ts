import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_rangeOrderByWithAggregationInput } from "../../../inputs/Number_rangeOrderByWithAggregationInput";
import { Number_rangeScalarWhereWithAggregatesInput } from "../../../inputs/Number_rangeScalarWhereWithAggregatesInput";
import { Number_rangeWhereInput } from "../../../inputs/Number_rangeWhereInput";
import { Number_rangeScalarFieldEnum } from "../../../../enums/Number_rangeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_rangeArgs {
  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_rangeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type_id" | "global" | "pattern" | "start" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_rangeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_rangeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
