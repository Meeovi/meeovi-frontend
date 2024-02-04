import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagUpdateWithoutTagInput } from "../inputs/Product_tagUpdateWithoutTagInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpdateWithWhereUniqueWithoutTagInput", {})
export class Product_tagUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateWithoutTagInput, {
    nullable: false
  })
  data!: Product_tagUpdateWithoutTagInput;
}
