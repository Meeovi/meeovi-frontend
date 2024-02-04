import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryUpdateWithoutCategoryInput } from "../inputs/Product_categoryUpdateWithoutCategoryInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryUpdateWithWhereUniqueWithoutCategoryInput", {})
export class Product_categoryUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_categoryUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Product_categoryUpdateWithoutCategoryInput;
}
