import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionUpdateWithoutProperty_group_optionInput } from "../inputs/Product_optionUpdateWithoutProperty_group_optionInput";
import { Product_optionWhereUniqueInput } from "../inputs/Product_optionWhereUniqueInput";

@TypeGraphQL.InputType("Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput", {})
export class Product_optionUpdateWithWhereUniqueWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => Product_optionWhereUniqueInput, {
    nullable: false
  })
  where!: Product_optionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_optionUpdateWithoutProperty_group_optionInput, {
    nullable: false
  })
  data!: Product_optionUpdateWithoutProperty_group_optionInput;
}
