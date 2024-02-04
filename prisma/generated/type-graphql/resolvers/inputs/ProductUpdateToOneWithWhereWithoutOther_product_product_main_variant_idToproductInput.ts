import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutOther_product_product_main_variant_idToproductInput } from "../inputs/ProductUpdateWithoutOther_product_product_main_variant_idToproductInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutOther_product_product_main_variant_idToproductInput", {})
export class ProductUpdateToOneWithWhereWithoutOther_product_product_main_variant_idToproductInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOther_product_product_main_variant_idToproductInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutOther_product_product_main_variant_idToproductInput;
}
