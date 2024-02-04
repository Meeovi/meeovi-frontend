import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationOrderByWithAggregationInput } from "../../../inputs/Product_manufacturer_translationOrderByWithAggregationInput";
import { Product_manufacturer_translationScalarWhereWithAggregatesInput } from "../../../inputs/Product_manufacturer_translationScalarWhereWithAggregatesInput";
import { Product_manufacturer_translationWhereInput } from "../../../inputs/Product_manufacturer_translationWhereInput";
import { Product_manufacturer_translationScalarFieldEnum } from "../../../../enums/Product_manufacturer_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  where?: Product_manufacturer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_manufacturer_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_manufacturer_id" | "product_manufacturer_version_id" | "language_id" | "name" | "description" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_manufacturer_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
