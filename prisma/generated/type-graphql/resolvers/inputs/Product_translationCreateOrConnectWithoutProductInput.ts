import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateWithoutProductInput } from "../inputs/Product_translationCreateWithoutProductInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationCreateOrConnectWithoutProductInput", {})
export class Product_translationCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_translationCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_translationCreateWithoutProductInput;
}
