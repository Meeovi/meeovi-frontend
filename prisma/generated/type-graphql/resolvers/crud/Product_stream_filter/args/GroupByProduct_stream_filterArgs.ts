import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterOrderByWithAggregationInput } from "../../../inputs/Product_stream_filterOrderByWithAggregationInput";
import { Product_stream_filterScalarWhereWithAggregatesInput } from "../../../inputs/Product_stream_filterScalarWhereWithAggregatesInput";
import { Product_stream_filterWhereInput } from "../../../inputs/Product_stream_filterWhereInput";
import { Product_stream_filterScalarFieldEnum } from "../../../../enums/Product_stream_filterScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  where?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_stream_filterOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_stream_id" | "parent_id" | "type" | "field" | "operator" | "value" | "parameters" | "position" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_stream_filterScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_stream_filterScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
