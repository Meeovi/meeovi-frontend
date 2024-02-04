import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyLanguageInputEnvelope } from "../inputs/Product_reviewCreateManyLanguageInputEnvelope";
import { Product_reviewCreateOrConnectWithoutLanguageInput } from "../inputs/Product_reviewCreateOrConnectWithoutLanguageInput";
import { Product_reviewCreateWithoutLanguageInput } from "../inputs/Product_reviewCreateWithoutLanguageInput";
import { Product_reviewScalarWhereInput } from "../inputs/Product_reviewScalarWhereInput";
import { Product_reviewUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_reviewUpdateManyWithWhereWithoutLanguageInput";
import { Product_reviewUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_reviewUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_reviewUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_reviewUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateManyWithoutLanguageNestedInput", {})
export class Product_reviewUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_reviewUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  set?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_reviewUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_reviewUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_reviewScalarWhereInput[] | undefined;
}
