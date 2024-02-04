import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProductInputEnvelope } from "../inputs/Product_cross_sellingCreateManyProductInputEnvelope";
import { Product_cross_sellingCreateOrConnectWithoutProductInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProductInput";
import { Product_cross_sellingCreateWithoutProductInput } from "../inputs/Product_cross_sellingCreateWithoutProductInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateNestedManyWithoutProductInput", {})
export class Product_cross_sellingCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_sellingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_sellingWhereUniqueInput[] | undefined;
}
