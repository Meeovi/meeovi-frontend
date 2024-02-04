import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyLanguageInputEnvelope } from "../inputs/Product_reviewCreateManyLanguageInputEnvelope";
import { Product_reviewCreateOrConnectWithoutLanguageInput } from "../inputs/Product_reviewCreateOrConnectWithoutLanguageInput";
import { Product_reviewCreateWithoutLanguageInput } from "../inputs/Product_reviewCreateWithoutLanguageInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateNestedManyWithoutLanguageInput", {})
export class Product_reviewCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;
}
