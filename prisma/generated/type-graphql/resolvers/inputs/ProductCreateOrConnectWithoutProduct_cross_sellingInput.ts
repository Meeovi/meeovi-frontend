import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateWithoutProduct_cross_sellingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_cross_sellingInput", {})
export class ProductCreateOrConnectWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_cross_sellingInput;
}
