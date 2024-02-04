import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOther_product_product_canonical_product_idToproductInput } from "../inputs/ProductCreateWithoutOther_product_product_canonical_product_idToproductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutOther_product_product_canonical_product_idToproductInput", {})
export class ProductCreateOrConnectWithoutOther_product_product_canonical_product_idToproductInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOther_product_product_canonical_product_idToproductInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOther_product_product_canonical_product_idToproductInput;
}
