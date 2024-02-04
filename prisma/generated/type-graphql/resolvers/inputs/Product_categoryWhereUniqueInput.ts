import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_categoryWhereInput } from "../inputs/Product_categoryWhereInput";
import { product_categoryProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput } from "../inputs/product_categoryProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_categoryWhereUniqueInput", {})
export class Product_categoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_categoryProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_category_id_category_version_id?: product_categoryProduct_idProduct_version_idCategory_idCategory_version_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereInput], {
    nullable: true
  })
  AND?: Product_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereInput], {
    nullable: true
  })
  OR?: Product_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryWhereInput], {
    nullable: true
  })
  NOT?: Product_categoryWhereInput[] | undefined;

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
