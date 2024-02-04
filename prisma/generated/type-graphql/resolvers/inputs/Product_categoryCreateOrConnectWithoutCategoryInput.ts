import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateWithoutCategoryInput } from "../inputs/Product_categoryCreateWithoutCategoryInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryCreateOrConnectWithoutCategoryInput", {})
export class Product_categoryCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_categoryCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Product_categoryCreateWithoutCategoryInput;
}
