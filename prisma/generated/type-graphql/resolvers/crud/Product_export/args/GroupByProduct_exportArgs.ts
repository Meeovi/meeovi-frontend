import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportOrderByWithAggregationInput } from "../../../inputs/Product_exportOrderByWithAggregationInput";
import { Product_exportScalarWhereWithAggregatesInput } from "../../../inputs/Product_exportScalarWhereWithAggregatesInput";
import { Product_exportWhereInput } from "../../../inputs/Product_exportWhereInput";
import { Product_exportScalarFieldEnum } from "../../../../enums/Product_exportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  where?: Product_exportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_exportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_exportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_exportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_stream_id" | "storefront_sales_channel_id" | "sales_channel_id" | "sales_channel_domain_id" | "file_name" | "access_key" | "encoding" | "file_format" | "include_variants" | "generate_by_cronjob" | "generated_at" | "interval" | "header_template" | "body_template" | "footer_template" | "created_at" | "updated_at" | "currency_id" | "paused_schedule" | "is_running">;

  @TypeGraphQL.Field(_type => Product_exportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_exportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
