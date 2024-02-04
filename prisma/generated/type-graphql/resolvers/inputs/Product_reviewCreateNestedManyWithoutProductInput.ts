import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyProductInputEnvelope } from "../inputs/Product_reviewCreateManyProductInputEnvelope";
import { Product_reviewCreateOrConnectWithoutProductInput } from "../inputs/Product_reviewCreateOrConnectWithoutProductInput";
import { Product_reviewCreateWithoutProductInput } from "../inputs/Product_reviewCreateWithoutProductInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateNestedManyWithoutProductInput", {})
export class Product_reviewCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;
}
