import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldOrderByWithAggregationInput } from "../../../inputs/Product_search_config_fieldOrderByWithAggregationInput";
import { Product_search_config_fieldScalarWhereWithAggregatesInput } from "../../../inputs/Product_search_config_fieldScalarWhereWithAggregatesInput";
import { Product_search_config_fieldWhereInput } from "../../../inputs/Product_search_config_fieldWhereInput";
import { Product_search_config_fieldScalarFieldEnum } from "../../../../enums/Product_search_config_fieldScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldWhereInput, {
    nullable: true
  })
  where?: Product_search_config_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_search_config_fieldOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "product_search_config_id" | "custom_field_id" | "field" | "tokenize" | "searchable" | "ranking" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_search_config_fieldScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_search_config_fieldScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
