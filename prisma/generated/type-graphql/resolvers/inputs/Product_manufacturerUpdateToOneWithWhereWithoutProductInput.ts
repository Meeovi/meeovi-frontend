import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerUpdateWithoutProductInput } from "../inputs/Product_manufacturerUpdateWithoutProductInput";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateToOneWithWhereWithoutProductInput", {})
export class Product_manufacturerUpdateToOneWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_manufacturerUpdateWithoutProductInput;
}
