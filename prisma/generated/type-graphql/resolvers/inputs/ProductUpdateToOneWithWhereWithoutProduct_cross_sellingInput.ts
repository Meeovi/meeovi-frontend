import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_cross_sellingInput } from "../inputs/ProductUpdateWithoutProduct_cross_sellingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_cross_sellingInput;
}
