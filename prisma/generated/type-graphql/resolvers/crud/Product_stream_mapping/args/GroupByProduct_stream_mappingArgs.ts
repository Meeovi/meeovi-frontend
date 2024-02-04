import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingOrderByWithAggregationInput } from "../../../inputs/Product_stream_mappingOrderByWithAggregationInput";
import { Product_stream_mappingScalarWhereWithAggregatesInput } from "../../../inputs/Product_stream_mappingScalarWhereWithAggregatesInput";
import { Product_stream_mappingWhereInput } from "../../../inputs/Product_stream_mappingWhereInput";
import { Product_stream_mappingScalarFieldEnum } from "../../../../enums/Product_stream_mappingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  where?: Product_stream_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_stream_mappingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "product_stream_id">;

  @TypeGraphQL.Field(_type => Product_stream_mappingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_stream_mappingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
