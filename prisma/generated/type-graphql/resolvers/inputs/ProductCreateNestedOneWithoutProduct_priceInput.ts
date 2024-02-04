import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_priceInput } from "../inputs/ProductCreateOrConnectWithoutProduct_priceInput";
import { ProductCreateWithoutProduct_priceInput } from "../inputs/ProductCreateWithoutProduct_priceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_priceInput", {})
export class ProductCreateNestedOneWithoutProduct_priceInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_priceInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_priceInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_priceInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_priceInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
