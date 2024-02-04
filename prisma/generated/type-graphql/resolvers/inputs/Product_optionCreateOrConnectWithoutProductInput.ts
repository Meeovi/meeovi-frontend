import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCreateWithoutProductInput } from "../inputs/Product_optionCreateWithoutProductInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionCreateOrConnectWithoutProductInput", {})
export class Product_optionCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_optionCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_optionCreateWithoutProductInput;
}
