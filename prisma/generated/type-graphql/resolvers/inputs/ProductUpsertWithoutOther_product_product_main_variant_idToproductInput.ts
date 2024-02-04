import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOther_product_product_main_variant_idToproductInput } from "../inputs/ProductCreateWithoutOther_product_product_main_variant_idToproductInput";
import { ProductUpdateWithoutOther_product_product_main_variant_idToproductInput } from "../inputs/ProductUpdateWithoutOther_product_product_main_variant_idToproductInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutOther_product_product_main_variant_idToproductInput", {})
export class ProductUpsertWithoutOther_product_product_main_variant_idToproductInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOther_product_product_main_variant_idToproductInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOther_product_product_main_variant_idToproductInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOther_product_product_main_variant_idToproductInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOther_product_product_main_variant_idToproductInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
