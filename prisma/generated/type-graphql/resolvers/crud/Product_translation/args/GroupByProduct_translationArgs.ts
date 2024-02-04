import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationOrderByWithAggregationInput } from "../../../inputs/Product_translationOrderByWithAggregationInput";
import { Product_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_translationScalarWhereWithAggregatesInput";
import { Product_translationWhereInput } from "../../../inputs/Product_translationWhereInput";
import { Product_translationScalarFieldEnum } from "../../../../enums/Product_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  where?: Product_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "language_id" | "meta_description" | "name" | "keywords" | "description" | "meta_title" | "pack_unit" | "custom_fields" | "slot_config" | "created_at" | "updated_at" | "pack_unit_plural" | "custom_search_keywords">;

  @TypeGraphQL.Field(_type => Product_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
