import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionUpdateWithoutProductInput } from "../inputs/Product_optionUpdateWithoutProductInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_optionUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_optionUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_optionUpdateWithoutProductInput;
}
