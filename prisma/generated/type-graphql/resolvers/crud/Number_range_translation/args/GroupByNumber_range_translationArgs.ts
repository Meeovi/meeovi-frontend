import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_translationOrderByWithAggregationInput } from "../../../inputs/Number_range_translationOrderByWithAggregationInput";
import { Number_range_translationScalarWhereWithAggregatesInput } from "../../../inputs/Number_range_translationScalarWhereWithAggregatesInput";
import { Number_range_translationWhereInput } from "../../../inputs/Number_range_translationWhereInput";
import { Number_range_translationScalarFieldEnum } from "../../../../enums/Number_range_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_range_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_range_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"number_range_id" | "name" | "description" | "custom_fields" | "language_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_range_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_range_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
