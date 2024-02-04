import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewUpdateWithoutCustomerInput } from "../inputs/Product_reviewUpdateWithoutCustomerInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateWithWhereUniqueWithoutCustomerInput", {})
export class Product_reviewUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Product_reviewUpdateWithoutCustomerInput;
}
