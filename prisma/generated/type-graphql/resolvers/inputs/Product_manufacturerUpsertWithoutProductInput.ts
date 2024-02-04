import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateWithoutProductInput } from "../inputs/Product_manufacturerCreateWithoutProductInput";
import { Product_manufacturerUpdateWithoutProductInput } from "../inputs/Product_manufacturerUpdateWithoutProductInput";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.InputType("Product_manufacturerUpsertWithoutProductInput", {})
export class Product_manufacturerUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_manufacturerUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_manufacturerUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;
}
