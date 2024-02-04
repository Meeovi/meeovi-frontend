import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeOrderByWithAggregationInput } from "../../../inputs/Number_range_typeOrderByWithAggregationInput";
import { Number_range_typeScalarWhereWithAggregatesInput } from "../../../inputs/Number_range_typeScalarWhereWithAggregatesInput";
import { Number_range_typeWhereInput } from "../../../inputs/Number_range_typeWhereInput";
import { Number_range_typeScalarFieldEnum } from "../../../../enums/Number_range_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  where?: Number_range_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_range_typeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "technical_name" | "global" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_range_typeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_range_typeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
