import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsCreateManyProduct_cross_sellingInputEnvelope } from "../inputs/Product_cross_selling_assigned_productsCreateManyProduct_cross_sellingInputEnvelope";
import { Product_cross_selling_assigned_productsCreateOrConnectWithoutProduct_cross_sellingInput } from "../inputs/Product_cross_selling_assigned_productsCreateOrConnectWithoutProduct_cross_sellingInput";
import { Product_cross_selling_assigned_productsCreateWithoutProduct_cross_sellingInput } from "../inputs/Product_cross_selling_assigned_productsCreateWithoutProduct_cross_sellingInput";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput", {})
export class Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateWithoutProduct_cross_sellingInput], {
    nullable: true
  })
  create?: Product_cross_selling_assigned_productsCreateWithoutProduct_cross_sellingInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateOrConnectWithoutProduct_cross_sellingInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_selling_assigned_productsCreateOrConnectWithoutProduct_cross_sellingInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateManyProduct_cross_sellingInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_selling_assigned_productsCreateManyProduct_cross_sellingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_selling_assigned_productsWhereUniqueInput[] | undefined;
}
