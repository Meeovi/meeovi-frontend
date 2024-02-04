import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_exportOrderByWithRelationAndSearchRelevanceInput";
import { Product_exportWhereInput } from "../../../inputs/Product_exportWhereInput";
import { Product_exportWhereUniqueInput } from "../../../inputs/Product_exportWhereUniqueInput";
import { Product_exportScalarFieldEnum } from "../../../../enums/Product_exportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channel_domainProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  where?: Product_exportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_exportOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_exportOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_exportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_exportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_stream_id" | "storefront_sales_channel_id" | "sales_channel_id" | "sales_channel_domain_id" | "file_name" | "access_key" | "encoding" | "file_format" | "include_variants" | "generate_by_cronjob" | "generated_at" | "interval" | "header_template" | "body_template" | "footer_template" | "created_at" | "updated_at" | "currency_id" | "paused_schedule" | "is_running"> | undefined;
}
