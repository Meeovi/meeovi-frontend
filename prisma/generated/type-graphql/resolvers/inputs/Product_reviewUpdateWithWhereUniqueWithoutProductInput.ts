import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewUpdateWithoutProductInput } from "../inputs/Product_reviewUpdateWithoutProductInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_reviewUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_reviewUpdateWithoutProductInput;
}
