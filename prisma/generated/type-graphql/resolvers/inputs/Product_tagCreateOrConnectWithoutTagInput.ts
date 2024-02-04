import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateWithoutTagInput } from "../inputs/Product_tagCreateWithoutTagInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagCreateOrConnectWithoutTagInput", {})
export class Product_tagCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Product_tagCreateWithoutTagInput;
}
