import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateWithoutProduct_cross_sellingInput";
import { ProductUpdateWithoutProduct_cross_sellingInput } from "../inputs/ProductUpdateWithoutProduct_cross_sellingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_cross_sellingInput", {})
export class ProductUpsertWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_cross_sellingInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_cross_sellingInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
