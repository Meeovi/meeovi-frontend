import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_priceInput } from "../inputs/ProductCreateWithoutProduct_priceInput";
import { ProductUpdateWithoutProduct_priceInput } from "../inputs/ProductUpdateWithoutProduct_priceInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_priceInput", {})
export class ProductUpsertWithoutProduct_priceInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_priceInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_priceInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_priceInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_priceInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
