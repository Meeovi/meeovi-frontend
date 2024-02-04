import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope } from "../inputs/Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope";
import { Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationCreateWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationScalarWhereInput } from "../inputs/Product_manufacturer_translationScalarWhereInput";
import { Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationUpdateWithWhereUniqueWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationUpdateWithWhereUniqueWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationUpsertWithWhereUniqueWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationUpsertWithWhereUniqueWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput", {})
export class Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput {
  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateWithoutProduct_manufacturerInput], {
    nullable: true
  })
  create?: Product_manufacturer_translationCreateWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturer_translationCreateOrConnectWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpsertWithWhereUniqueWithoutProduct_manufacturerInput], {
    nullable: true
  })
  upsert?: Product_manufacturer_translationUpsertWithWhereUniqueWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturer_translationCreateManyProduct_manufacturerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpdateWithWhereUniqueWithoutProduct_manufacturerInput], {
    nullable: true
  })
  update?: Product_manufacturer_translationUpdateWithWhereUniqueWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput], {
    nullable: true
  })
  updateMany?: Product_manufacturer_translationUpdateManyWithWhereWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_manufacturer_translationScalarWhereInput[] | undefined;
}
