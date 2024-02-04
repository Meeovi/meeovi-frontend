import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateWithoutProductInput } from "../inputs/Product_reviewCreateWithoutProductInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateOrConnectWithoutProductInput", {})
export class Product_reviewCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_reviewCreateWithoutProductInput;
}
