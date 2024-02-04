import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_category_treeWhereInput } from "../inputs/Product_category_treeWhereInput";
import { product_category_treeProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput } from "../inputs/product_category_treeProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_category_treeWhereUniqueInput", {})
export class Product_category_treeWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_category_treeProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_category_id_category_version_id?: product_category_treeProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  AND?: Product_category_treeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  OR?: Product_category_treeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  NOT?: Product_category_treeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
