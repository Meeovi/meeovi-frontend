import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateManyProductInputEnvelope } from "../inputs/Product_translationCreateManyProductInputEnvelope";
import { Product_translationCreateOrConnectWithoutProductInput } from "../inputs/Product_translationCreateOrConnectWithoutProductInput";
import { Product_translationCreateWithoutProductInput } from "../inputs/Product_translationCreateWithoutProductInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationCreateNestedManyWithoutProductInput", {})
export class Product_translationCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_translationCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_translationCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_translationCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_translationCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_translationWhereUniqueInput[] | undefined;
}
