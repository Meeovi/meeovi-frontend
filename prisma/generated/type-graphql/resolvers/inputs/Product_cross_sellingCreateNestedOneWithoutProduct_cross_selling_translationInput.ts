import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_translationInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_translationInput";
import { Product_cross_sellingCreateWithoutProduct_cross_selling_translationInput } from "../inputs/Product_cross_sellingCreateWithoutProduct_cross_selling_translationInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput", {})
export class Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingCreateWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProduct_cross_selling_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_cross_sellingWhereUniqueInput | undefined;
}
