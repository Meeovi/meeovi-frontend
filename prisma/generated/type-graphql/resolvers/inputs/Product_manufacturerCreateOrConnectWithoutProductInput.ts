import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateWithoutProductInput } from "../inputs/Product_manufacturerCreateWithoutProductInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateOrConnectWithoutProductInput", {})
export class Product_manufacturerCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateWithoutProductInput;
}
