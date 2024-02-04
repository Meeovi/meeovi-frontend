import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateWithoutProductInput } from "../inputs/Product_mediaCreateWithoutProductInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaCreateOrConnectWithoutProductInput", {})
export class Product_mediaCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_mediaCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_mediaCreateWithoutProductInput;
}
