import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationOrderByWithAggregationInput } from "../../../inputs/Number_range_type_translationOrderByWithAggregationInput";
import { Number_range_type_translationScalarWhereWithAggregatesInput } from "../../../inputs/Number_range_type_translationScalarWhereWithAggregatesInput";
import { Number_range_type_translationWhereInput } from "../../../inputs/Number_range_type_translationWhereInput";
import { Number_range_type_translationScalarFieldEnum } from "../../../../enums/Number_range_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_range_type_translationArgs {
  @TypeGraphQL.Field(_type => Number_range_type_translationWhereInput, {
    nullable: true
  })
  where?: Number_range_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_range_type_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"number_range_type_id" | "language_id" | "type_name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_range_type_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_range_type_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
