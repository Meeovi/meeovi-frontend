import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionWhereInput } from "../inputs/Product_optionWhereInput";

@TypeGraphQL.InputType("Product_optionListRelationFilter", {})
export class Product_optionListRelationFilter {
  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  every?: Product_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  some?: Product_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  none?: Product_optionWhereInput | undefined;
}
