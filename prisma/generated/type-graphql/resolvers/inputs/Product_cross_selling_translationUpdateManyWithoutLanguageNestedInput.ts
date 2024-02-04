import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCreateManyLanguageInputEnvelope } from "../inputs/Product_cross_selling_translationCreateManyLanguageInputEnvelope";
import { Product_cross_selling_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateOrConnectWithoutLanguageInput";
import { Product_cross_selling_translationCreateWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateWithoutLanguageInput";
import { Product_cross_selling_translationScalarWhereInput } from "../inputs/Product_cross_selling_translationScalarWhereInput";
import { Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput";
import { Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput", {})
export class Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_cross_selling_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_selling_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_selling_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_cross_selling_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_cross_selling_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_cross_selling_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_selling_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_cross_selling_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_cross_selling_translationScalarWhereInput[] | undefined;
}
