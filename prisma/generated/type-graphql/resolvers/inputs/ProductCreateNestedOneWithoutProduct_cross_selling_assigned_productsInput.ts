import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput";
import { ProductCreateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateWithoutProduct_cross_selling_assigned_productsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput", {})
export class ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
