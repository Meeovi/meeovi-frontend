import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateWithoutCustomerInput } from "../inputs/Product_reviewCreateWithoutCustomerInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateOrConnectWithoutCustomerInput", {})
export class Product_reviewCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Product_reviewCreateWithoutCustomerInput;
}
