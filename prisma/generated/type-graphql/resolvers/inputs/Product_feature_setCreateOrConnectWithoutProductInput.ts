import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateWithoutProductInput } from "../inputs/Product_feature_setCreateWithoutProductInput";
import { Product_feature_setWhereUniqueInput } from "../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_setCreateOrConnectWithoutProductInput", {})
export class Product_feature_setCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_feature_setCreateWithoutProductInput;
}
