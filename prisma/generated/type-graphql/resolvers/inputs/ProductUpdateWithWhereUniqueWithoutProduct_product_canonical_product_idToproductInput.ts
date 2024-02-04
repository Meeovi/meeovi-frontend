import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductUpdateWithoutProduct_product_canonical_product_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput", {})
export class ProductUpdateWithWhereUniqueWithoutProduct_product_canonical_product_idToproductInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_product_canonical_product_idToproductInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_product_canonical_product_idToproductInput;
}
