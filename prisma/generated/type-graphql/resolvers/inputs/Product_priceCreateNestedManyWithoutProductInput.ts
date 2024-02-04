import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyProductInputEnvelope } from "../inputs/Product_priceCreateManyProductInputEnvelope";
import { Product_priceCreateOrConnectWithoutProductInput } from "../inputs/Product_priceCreateOrConnectWithoutProductInput";
import { Product_priceCreateWithoutProductInput } from "../inputs/Product_priceCreateWithoutProductInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceCreateNestedManyWithoutProductInput", {})
export class Product_priceCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_priceCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_priceCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_priceCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_priceCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_priceCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_priceWhereUniqueInput[] | undefined;
}
