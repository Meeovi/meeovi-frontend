import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateOrConnectWithoutProduct_cross_sellingInput";
import { ProductCreateWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateWithoutProduct_cross_sellingInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_cross_sellingInput", {})
export class ProductCreateNestedOneWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
