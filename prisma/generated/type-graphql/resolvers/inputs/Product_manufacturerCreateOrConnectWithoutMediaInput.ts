import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateWithoutMediaInput } from "../inputs/Product_manufacturerCreateWithoutMediaInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateOrConnectWithoutMediaInput", {})
export class Product_manufacturerCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateWithoutMediaInput;
}
